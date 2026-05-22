using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Azure.Messaging.WebPubSub.Clients;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BvgDeamon.Azure;

public sealed class AzureWorker(ILogger<AzureWorker> log, Credentials creds) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        log.LogInformation("bvg-deamon starting in azure mode (client_id={ClientId}, topic={Topic})",
            creds.ClientId, creds.TopicIdentifier);

        await using var client = AzureCommands.BuildAuthedClient(creds);

        client.Connected += (e) =>
        {
            log.LogInformation("connected — connectionId={ConnectionId} userId={UserId}", e.ConnectionId, e.UserId);
            return Task.CompletedTask;
        };
        client.Disconnected += (e) =>
        {
            log.LogWarning("disconnected — {Reason}", e.DisconnectedMessage?.Reason);
            return Task.CompletedTask;
        };
        client.ServerMessageReceived += (e) => { HandleEnvelope(AzureCommands.AsJsonObject(e.Message.Data)); return Task.CompletedTask; };
        client.GroupMessageReceived += (e) => { HandleEnvelope(AzureCommands.AsJsonObject(e.Message.Data)); return Task.CompletedTask; };

        await client.StartAsync(stoppingToken);

        // Block until the host signals shutdown — the Azure SDK handles reconnect itself.
        try { await Task.Delay(Timeout.Infinite, stoppingToken); }
        catch (OperationCanceledException) { /* shutdown */ }

        await client.StopAsync();
        log.LogInformation("bvg-deamon stopping");
    }

    private void HandleEnvelope(JsonElement? data)
    {
        if (data is null) return;
        var d = data.Value;
        if (d.TryGetProperty("type", out var t) && t.GetString() == "token.refresh") return;
        var sender = d.TryGetProperty("sender_identifier", out var s) ? s.GetString() : "(unknown)";
        var target = d.TryGetProperty("target_identifier", out var tg) && tg.ValueKind != JsonValueKind.Null ? tg.GetString() : null;
        if (target != null && target != creds.ClientId) return;
        var payload = d.TryGetProperty("payload", out var p) ? (p.ValueKind == JsonValueKind.String ? p.GetString() : p.ToString()) : "";
        var msgType = d.TryGetProperty("message_type", out var m) ? m.GetString() : "";
        log.LogInformation("[{Sender}] {MessageType}: {Payload}", sender, msgType, payload);
    }
}
