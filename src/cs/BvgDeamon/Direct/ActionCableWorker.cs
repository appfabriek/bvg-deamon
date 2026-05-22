using System;
using System.Net.WebSockets;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BvgDeamon.Direct;

public sealed class ActionCableWorker(
    ILogger<ActionCableWorker> log,
    IHostApplicationLifetime lifetime,
    Credentials creds) : BackgroundService
{
    private const int BackoffStartSeconds = 1;
    private const int BackoffMaxSeconds = 60;

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        log.LogInformation("bvg-deamon starting in direct mode (client_id={ClientId}, connection={Conn})",
            creds.ClientId, creds.ConnectionIdentifier);

        var delay = BackoffStartSeconds;
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                var confirmed = await RunOnceAsync(stoppingToken);
                // Reset backoff only after a healthy session (subscribe confirmed) so that we
                // don't hammer the server when each connect fails before subscribe.
                if (confirmed) delay = BackoffStartSeconds;
            }
            catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
            {
                break;
            }
            catch (PermanentAuthException ex)
            {
                // Credentials invalid/expired. Stop the host so sc.exe failure-policy decides
                // whether to restart; the operator must re-run `bvg-deamon join` to recover.
                log.LogError(ex, "permanent auth failure — stopping. Re-run `bvg-deamon.exe join`.");
                lifetime.StopApplication();
                return;
            }
            catch (Exception ex)
            {
                log.LogWarning(ex, "connection lost, reconnecting in {Delay}s", delay);
                try { await Task.Delay(TimeSpan.FromSeconds(delay), stoppingToken); }
                catch (OperationCanceledException) { break; }
                delay = Math.Min(delay * 2, BackoffMaxSeconds);
            }
        }

        log.LogInformation("bvg-deamon stopping");
    }

    /// <summary>Runs one WSS session. Returns true if subscribe was confirmed at least once.</summary>
    private async Task<bool> RunOnceAsync(CancellationToken ct)
    {
        var cableUrl = creds.CableUrl
            ?? throw new InvalidOperationException("cable_url missing in credentials");
        var wsToken = creds.TransportToken ?? creds.RegistrationToken;
        var url = $"{cableUrl}?transport_token={Uri.EscapeDataString(wsToken)}";

        log.LogInformation("connecting WSS {CableUrl}", cableUrl);

        using var ws = new ClientWebSocket();
        ws.Options.AddSubProtocol("actioncable-v1-json");

        await ws.ConnectAsync(new Uri(url), ct);
        log.LogInformation("ws open");

        var subscribed = false;
        var subId = JsonSerializer.Serialize(new
        {
            channel = "TransportChannel",
            connection_identifier = creds.ConnectionIdentifier,
        });

        var buffer = new byte[64 * 1024];
        var sb = new StringBuilder();

        while (ws.State == WebSocketState.Open && !ct.IsCancellationRequested)
        {
            sb.Clear();
            WebSocketReceiveResult result;
            do
            {
                result = await ws.ReceiveAsync(new ArraySegment<byte>(buffer), ct);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    log.LogInformation("ws close ({Code}): {Reason}", result.CloseStatus, result.CloseStatusDescription);
                    using var closeCts = new CancellationTokenSource(TimeSpan.FromSeconds(3));
                    try { await ws.CloseAsync(WebSocketCloseStatus.NormalClosure, "client closing", closeCts.Token); }
                    catch (OperationCanceledException) { /* server didn't respond — fine, socket is dead */ }
                    return subscribed;
                }
                sb.Append(Encoding.UTF8.GetString(buffer, 0, result.Count));
            } while (!result.EndOfMessage);

            var raw = sb.ToString();
            JsonDocument? doc = null;
            try { doc = JsonDocument.Parse(raw); }
            catch { continue; }
            using (doc)
            {
                var root = doc.RootElement;
                var type = root.TryGetProperty("type", out var t) ? t.GetString() : null;

                switch (type)
                {
                    case "welcome":
                        var subscribeFrame = JsonSerializer.Serialize(new
                        {
                            command = "subscribe",
                            identifier = subId,
                        });
                        await SendAsync(ws, subscribeFrame, ct);
                        log.LogInformation("subscribing to TransportChannel (connection={Conn})", creds.ConnectionIdentifier);
                        break;

                    case "ping":
                        // ActionCable heartbeat — no response required.
                        break;

                    case "confirm_subscription":
                        subscribed = true;
                        log.LogInformation("subscription confirmed");
                        break;

                    case "reject_subscription":
                        throw new PermanentAuthException(
                            $"subscription rejected for connection_identifier={creds.ConnectionIdentifier}");

                    case "disconnect":
                        log.LogWarning("server requested disconnect: {Raw}", raw);
                        return subscribed;

                    default:
                        if (root.TryGetProperty("identifier", out _) &&
                            root.TryGetProperty("message", out var env))
                        {
                            LogEnvelope(env);
                        }
                        break;
                }
            }
        }

        if (!subscribed)
            log.LogInformation("ws closed before subscribe confirmed — will retry");
        return subscribed;
    }

    private void LogEnvelope(JsonElement env)
    {
        var seq = env.TryGetProperty("sequence", out var s) && s.ValueKind == JsonValueKind.Number ? s.GetInt64().ToString() : "?";
        var msgType = env.TryGetProperty("message_type", out var m) ? m.GetString() : "";
        var payload = env.TryGetProperty("payload", out var p)
            ? (p.ValueKind == JsonValueKind.String ? p.GetString() : p.ToString())
            : "";
        log.LogInformation("#{Sequence} {MessageType} {Payload}", seq, msgType, payload);
    }

    private static async Task SendAsync(ClientWebSocket ws, string text, CancellationToken ct)
    {
        var bytes = Encoding.UTF8.GetBytes(text);
        await ws.SendAsync(new ArraySegment<byte>(bytes), WebSocketMessageType.Text, endOfMessage: true, ct);
    }
}

internal sealed class PermanentAuthException(string message) : Exception(message);
