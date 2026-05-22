using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Azure.Messaging.WebPubSub.Clients;

namespace BvgDeamon.Azure;

public static class AzureJoin
{
    public static async Task<int> RunAsync(string hub, string transport)
    {
        Console.WriteLine("connecting to Azure anonymously...");
        await using var client = new WebPubSubClient(new Uri(hub));

        TaskCompletionSource<JsonElement?> approvedTcs = new();
        TaskCompletionSource<bool> deniedTcs = new();
        bool topicRequested = false;

        client.ServerMessageReceived += async (e) =>
        {
            var msg = AzureCommands.AsJsonObject(e.Message.Data);
            if (msg is null) return;
            var type = msg.Value.GetProperty("type").GetString();
            switch (type)
            {
                case "pairing.code":
                    var code = msg.Value.GetProperty("code").GetString();
                    Console.WriteLine();
                    Console.WriteLine($"pair code: {code}");
                    if (msg.Value.TryGetProperty("admin_url", out var adminUrl))
                        Console.WriteLine($"approve in admin: {adminUrl.GetString()}");
                    Console.WriteLine();
                    if (!topicRequested)
                    {
                        topicRequested = true;
                        await AzureCommands.SendEvent(client, "pairing_request_topic",
                            new Dictionary<string, object?> { ["topic_identifier"] = transport });
                    }
                    break;
                case "pairing.approved":
                    approvedTcs.TrySetResult(msg);
                    break;
                case "pairing.denied":
                    deniedTcs.TrySetResult(true);
                    break;
            }
        };

        await client.StartAsync();

        var done = await Task.WhenAny(approvedTcs.Task, deniedTcs.Task, Task.Delay(TimeSpan.FromMinutes(30)));
        await client.StopAsync();

        if (done == deniedTcs.Task) { Console.Error.WriteLine("denied by admin"); return 3; }
        if (done != approvedTcs.Task) { Console.Error.WriteLine("timeout"); return 4; }

        var approved = approvedTcs.Task.Result!.Value;
        var creds = new Credentials
        {
            AzureHubUrl = hub,
            ClientId = approved.GetProperty("client_id").GetString()!,
            RegistrationToken = approved.GetProperty("registration_token").GetString()!,
            AccessUrl = approved.GetProperty("url").GetString(),
            AccessUrlExpiresAt = approved.GetProperty("expires_at").GetString(),
            TopicIdentifier = transport,
        };
        var path = creds.Save();
        Console.WriteLine($"paired as {creds.ClientId} on transport {transport}");
        Console.WriteLine($"credentials: {path}");
        return 0;
    }
}
