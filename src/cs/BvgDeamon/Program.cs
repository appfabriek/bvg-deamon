using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Azure.Messaging.WebPubSub.Clients;

namespace BvgDeamon;

public static class Program
{
    public static async Task<int> Main(string[] args)
    {
        if (args.Length == 0 || args[0] is "-h" or "--help")
        {
            PrintUsage();
            return args.Length == 0 ? 2 : 0;
        }

        try
        {
            return args[0] switch
            {
                "join"    => await CmdJoin(args[1..]),
                "daemon"  => await CmdDaemon(args[1..]),
                "clients" => await CmdClients(args[1..]),
                "send"    => await CmdSend(args[1..]),
                "unpair"  => CmdUnpair(),
                _ => UnknownSubcommand(args[0])
            };
        }
        catch (Exception e)
        {
            Console.Error.WriteLine($"error: {e.Message}");
            return 1;
        }
    }

    private static void PrintUsage()
    {
        Console.Error.WriteLine(@"
bvg-deamon — pure-Azure transport client for bvgeert

Usage:
  bvg-deamon join --hub <wss://x.webpubsub.azure.com/client/hubs/<hub>> --transport <identifier>
  bvg-deamon daemon
  bvg-deamon clients [--online]
  bvg-deamon send <target-identifier|*> <text>
  bvg-deamon unpair

Credentials at %LOCALAPPDATA%\bvg-deamon\credentials.json (or $BVG_DEAMON_CREDENTIALS).
");
    }

    private static int UnknownSubcommand(string cmd)
    {
        Console.Error.WriteLine($"unknown subcommand: {cmd}");
        PrintUsage();
        return 2;
    }

    private static string? ParseFlag(string[] args, string name)
    {
        for (int i = 0; i < args.Length - 1; i++)
            if (args[i] == "--" + name) return args[i + 1];
        return null;
    }

    private static async Task<int> CmdJoin(string[] args)
    {
        var hub = ParseFlag(args, "hub");
        var transport = ParseFlag(args, "transport");
        if (hub == null || transport == null)
        {
            Console.Error.WriteLine("usage: bvg-deamon join --hub <wss-url> --transport <identifier>");
            return 2;
        }

        Console.WriteLine("connecting to Azure anonymously...");
        await using var client = new WebPubSubClient(new Uri(hub));

        TaskCompletionSource<JsonElement?> approvedTcs = new();
        TaskCompletionSource<bool> deniedTcs = new();
        bool topicRequested = false;

        client.ServerMessageReceived += async (e) =>
        {
            var msg = AsJsonObject(e.Message.Data);
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
                        await SendEvent(client, "pairing.request_topic", new Dictionary<string, object?> { ["topic_identifier"] = transport });
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
            TopicIdentifier = transport
        };
        var path = creds.Save();
        Console.WriteLine($"paired as {creds.ClientId} on transport {transport}");
        Console.WriteLine($"credentials: {path}");
        return 0;
    }

    private static int CmdUnpair()
    {
        Credentials.Wipe();
        Console.WriteLine("local credentials wiped");
        return 0;
    }

    private static async Task<int> CmdDaemon(string[] args)
    {
        var creds = RequireCreds();
        await using var client = BuildAuthedClient(creds);

        string? lastSender = null;

        void HandleEnvelope(JsonElement? data)
        {
            if (data is null) return;
            var d = data.Value;
            if (d.TryGetProperty("type", out var t) && t.GetString() == "token.refresh") return;
            var sender = d.TryGetProperty("sender_identifier", out var s) ? s.GetString() : "(unknown)";
            var target = d.TryGetProperty("target_identifier", out var tg) && tg.ValueKind != JsonValueKind.Null ? tg.GetString() : null;
            if (target != null && target != creds.ClientId) return;
            var payload = d.TryGetProperty("payload", out var p) ? (p.ValueKind == JsonValueKind.String ? p.GetString() : p.ToString()) : "";
            var msgType = d.TryGetProperty("message_type", out var m) ? m.GetString() : "";
            Console.WriteLine($"[{sender}] {msgType}: {payload}");
            lastSender = sender;
        }

        client.Connected += (e) => { Console.WriteLine($"connected — connectionId={e.ConnectionId} userId={e.UserId}"); Console.WriteLine($"transport: {creds.TopicIdentifier ?? "(unknown)"}"); Console.WriteLine("type 'reply <text>' to reply, 'send <id> <text>', 'clients', 'quit'"); return Task.CompletedTask; };
        client.Disconnected += (e) => { Console.WriteLine($"disconnected — {e.DisconnectedMessage?.Reason}"); return Task.CompletedTask; };
        client.ServerMessageReceived += (e) => { HandleEnvelope(AsJsonObject(e.Message.Data)); return Task.CompletedTask; };
        client.GroupMessageReceived += (e) => { HandleEnvelope(AsJsonObject(e.Message.Data)); return Task.CompletedTask; };

        await client.StartAsync();

        // Simple stdin REPL.
        _ = Task.Run(async () =>
        {
            string? line;
            while ((line = Console.ReadLine()) != null)
            {
                line = line.Trim();
                if (string.IsNullOrEmpty(line)) continue;
                if (line == "quit") { await client.StopAsync(); Environment.Exit(0); }
                if (line == "help") { Console.WriteLine("commands: reply <text> | send <id> <text> | clients | quit"); continue; }
                if (line == "clients") { try { await ListClientsOver(client, creds); } catch (Exception ex) { Console.Error.WriteLine(ex.Message); } continue; }
                if (line.StartsWith("reply "))
                {
                    if (lastSender == null) { Console.WriteLine("no last sender"); continue; }
                    await Publish(client, creds, lastSender, line[6..]); continue;
                }
                var parts = line.Split(' ', 3);
                if (parts.Length >= 3 && parts[0] == "send") { await Publish(client, creds, parts[1], parts[2]); continue; }
                Console.WriteLine("unknown command — try 'help'");
            }
        });

        var tcs = new TaskCompletionSource<int>();
        Console.CancelKeyPress += async (s, a) => { a.Cancel = true; await client.StopAsync(); tcs.TrySetResult(0); };
        return await tcs.Task;
    }

    private static async Task<int> CmdClients(string[] args)
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
        await SendEvent(client, "clients.list", new Dictionary<string, object?> { ["topic_identifier"] = creds.TopicIdentifier });
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

    private static async Task ListClientsOver(WebPubSubClient client, Credentials creds)
    {
        TaskCompletionSource<JsonElement?> resultTcs = new();
        // Listener temporarily added; the daemon already has one but we reuse it via the tcs.
        // Send the event; the global handler will publish the result line.
        await SendEvent(client, "clients.list", new Dictionary<string, object?> { ["topic_identifier"] = creds.TopicIdentifier });
    }

    private static async Task<int> CmdSend(string[] args)
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

    private static async Task Publish(WebPubSubClient client, Credentials creds, string target, string text)
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

    private static Task SendEvent(WebPubSubClient client, string eventName, Dictionary<string, object?> data)
    {
        var bytes = JsonSerializer.SerializeToUtf8Bytes(data);
        return client.SendEventAsync(eventName, BinaryData.FromBytes(bytes), WebPubSubDataType.Json);
    }

    private static Credentials RequireCreds()
    {
        var c = Credentials.Load();
        if (c == null) { Console.Error.WriteLine("not paired — run `bvg-deamon join` first"); Environment.Exit(2); }
        return c!;
    }

    private static WebPubSubClient BuildAuthedClient(Credentials creds)
    {
        if (string.IsNullOrEmpty(creds.AccessUrl))
            throw new Exception("no access url — re-pair");
        var options = new WebPubSubClientOptions
        {
            AutoReconnect = true
        };
        return new WebPubSubClient(new WebPubSubClientCredential(_ => ValueTask.FromResult(new Uri(creds.AccessUrl))), options);
    }

    private static JsonElement? AsJsonObject(BinaryData data)
    {
        try { return JsonDocument.Parse(data.ToMemory()).RootElement.Clone(); }
        catch { return null; }
    }
}
