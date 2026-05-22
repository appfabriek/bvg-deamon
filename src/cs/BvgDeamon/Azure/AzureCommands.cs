using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Azure.Messaging.WebPubSub.Clients;

namespace BvgDeamon.Azure;

public static class AzureCommands
{
    public static async Task<int> ClientsAsync(string[] args)
    {
        var creds = RequireCreds();
        await using var client = BuildAuthedClient(creds);
        TaskCompletionSource<JsonElement?> resultTcs = new();
        client.ServerMessageReceived += (e) =>
        {
            var msg = AsJsonObject(e.Message.Data);
            if (msg is not null && msg.Value.TryGetProperty("type", out var t) && t.GetString() == "clients.list_result")
                resultTcs.TrySetResult(msg);
            return Task.CompletedTask;
        };
        await client.StartAsync();
        await SendEvent(client, "clients_list", new Dictionary<string, object?> { ["topic_identifier"] = creds.TopicIdentifier });
        var done = await Task.WhenAny(resultTcs.Task, Task.Delay(TimeSpan.FromSeconds(10)));
        await client.StopAsync();
        if (done != resultTcs.Task) throw new Exception("timeout waiting for clients list");
        var result = resultTcs.Task.Result!.Value;
        var onlineOnly = Array.IndexOf(args, "--online") >= 0;
        foreach (var c in result.GetProperty("clients").EnumerateArray())
        {
            var online = c.GetProperty("online").GetBoolean();
            if (onlineOnly && !online) continue;
            var dot = online ? "●" : "○";
            var id = c.GetProperty("identifier").GetString();
            var name = c.TryGetProperty("name", out var n) && n.ValueKind != JsonValueKind.Null ? n.GetString() : null;
            var kind = c.GetProperty("kind").GetString();
            Console.WriteLine($"{dot} {id}{(name != null ? $" ({name})" : "")} — {kind}");
        }
        return 0;
    }

    public static async Task<int> SendAsync(string[] args)
    {
        if (args.Length < 2)
        {
            Console.Error.WriteLine("usage: bvg-deamon send <target-identifier|*> <text>");
            return 2;
        }
        var creds = RequireCreds();
        await using var client = BuildAuthedClient(creds);
        await client.StartAsync();
        await Publish(client, creds, args[0], string.Join(' ', args[1..]));
        await client.StopAsync();
        return 0;
    }

    public static async Task Publish(WebPubSubClient client, Credentials creds, string target, string text)
    {
        var data = new Dictionary<string, object?>
        {
            ["topic_identifier"] = creds.TopicIdentifier,
            ["message_type"] = "chat.text",
            ["payload"] = text,
            ["target_identifier"] = target == "*" ? null : target
        };
        await SendEvent(client, "publish", data);
        Console.WriteLine($"sent to {target}: {text}");
    }

    public static Task SendEvent(WebPubSubClient client, string eventName, Dictionary<string, object?> data)
    {
        var bytes = JsonSerializer.SerializeToUtf8Bytes(data);
        return client.SendEventAsync(eventName, BinaryData.FromBytes(bytes), WebPubSubDataType.Json);
    }

    public static Credentials RequireCreds()
    {
        var c = Credentials.Load();
        if (c == null || c.Mode != CredentialMode.Azure)
            throw new UsageException("not paired in azure-mode — run `bvg-deamon join --hub <url> --transport <id>` first");
        return c;
    }

    public static WebPubSubClient BuildAuthedClient(Credentials creds)
    {
        if (string.IsNullOrEmpty(creds.AccessUrl))
            throw new Exception("no access url — re-pair");
        var options = new WebPubSubClientOptions { AutoReconnect = true };
        return new WebPubSubClient(
            new WebPubSubClientCredential(_ => ValueTask.FromResult(new Uri(creds.AccessUrl))),
            options);
    }

    public static JsonElement? AsJsonObject(BinaryData data)
    {
        try { return JsonDocument.Parse(data.ToMemory()).RootElement.Clone(); }
        catch { return null; }
    }
}
