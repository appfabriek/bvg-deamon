using System;
using System.Threading.Tasks;
using BvgDeamon.Azure;
using BvgDeamon.Direct;
using BvgDeamon.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace BvgDeamon;

public static class Program
{
    public static async Task<int> Main(string[] args)
    {
        // Service-mode: Windows starts us with no args. Drop straight into the daemon.
        if (args.Length == 0) return await RunDaemon();

        if (args[0] is "-h" or "--help")
        {
            PrintUsage();
            return 0;
        }

        try
        {
            return args[0] switch
            {
                "join"    => await CmdJoin(args[1..]),
                "daemon"  => await RunDaemon(),
                "clients" => await AzureCommands.ClientsAsync(args[1..]),
                "send"    => await AzureCommands.SendAsync(args[1..]),
                "unpair"  => CmdUnpair(),
                _ => UnknownSubcommand(args[0])
            };
        }
        catch (UsageException u)
        {
            Console.Error.WriteLine(u.Message);
            return 2;
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
bvg-deamon - transport client for bvgeert (Windows)

Usage:
  bvg-deamon join --host <https://bvgeert-host> --token <jt_...> [--transport <name>]
  bvg-deamon join --hub  <wss://x.webpubsub.azure.com/...>       --transport <id>
  bvg-deamon daemon                  # connect and stream messages until killed
  bvg-deamon                         # (no args) same as daemon, used as Windows service entrypoint
  bvg-deamon clients [--online]      # azure-mode only
  bvg-deamon send <id|*> <text>      # azure-mode only
  bvg-deamon unpair                  # wipe local credentials

Env-vars honored by the installer and `join`:
  BVG_JOIN_TOKEN, BVG_BVGEERT_HOST, BVG_TRANSPORT, BVG_AZURE_HUB,
  BVG_DEAMON_CREDENTIALS (path override).

Credentials default to %LOCALAPPDATA%\bvg-deamon\credentials.json
(the installer sets BVG_DEAMON_CREDENTIALS to %ProgramData%\bvg-deamon\credentials.json
for the service).
");
    }

    private static int UnknownSubcommand(string cmd)
    {
        Console.Error.WriteLine($"unknown subcommand: {cmd}");
        PrintUsage();
        return 2;
    }

    private static async Task<int> CmdJoin(string[] args)
    {
        var hub = ParseFlag(args, "hub")    ?? Environment.GetEnvironmentVariable("BVG_AZURE_HUB");
        var host = ParseFlag(args, "host")  ?? Environment.GetEnvironmentVariable("BVG_BVGEERT_HOST");
        var token = ParseFlag(args, "token") ?? Environment.GetEnvironmentVariable("BVG_JOIN_TOKEN");
        var transport = ParseFlag(args, "transport") ?? Environment.GetEnvironmentVariable("BVG_TRANSPORT");

        var canDirect = !string.IsNullOrEmpty(host) && !string.IsNullOrEmpty(token);
        var canAzure  = !string.IsNullOrEmpty(hub)  && !string.IsNullOrEmpty(transport);

        // Try direct first when possible. If direct fails *and* azure is also configured,
        // fall back to the azure route. The operator can force azure-only by leaving
        // BVG_BVGEERT_HOST unset.
        if (canDirect)
        {
            try
            {
                var rc = await DirectJoin.RunAsync(host!, token!, transport);
                if (rc == 0 || !canAzure) return rc;
                Console.Error.WriteLine($"direct join returned exit {rc}, falling back to azure...");
            }
            catch (Exception ex) when (canAzure)
            {
                Console.Error.WriteLine($"direct join failed ({ex.Message}), falling back to azure...");
            }
        }

        if (canAzure)
            return await AzureJoin.RunAsync(hub!, transport!, token);

        Console.Error.WriteLine("usage: bvg-deamon join --host <host> --token <jt_...> [--transport <name>]");
        Console.Error.WriteLine("   or: bvg-deamon join --hub <wss-url> --transport <identifier> [--token <jt_...>]");
        Console.Error.WriteLine("   or: set both BVG_BVGEERT_HOST and BVG_AZURE_HUB for automatic fallback");
        return 2;
    }

    private static int CmdUnpair()
    {
        Credentials.Wipe();
        Console.WriteLine("local credentials wiped");
        return 0;
    }

    private static async Task<int> RunDaemon()
    {
        // Configure Serilog before any check, so credential-load failures end up in the log
        // (a Windows service has no console — without this the failure would be invisible).
        Log.Logger = SerilogSetup.Build();

        try
        {
            var creds = Credentials.Load();
            if (creds == null)
            {
                Log.Error("not paired — credentials missing at {Path}. Run `bvg-deamon join` first.",
                    Credentials.FilePath());
                return 2;
            }

            var builder = Host.CreateApplicationBuilder();
            builder.Services.AddWindowsService(o => o.ServiceName = "bvg-deamon");
            builder.Services.AddSingleton(creds);
            builder.Services.AddSerilog();

            switch (creds.Mode)
            {
                case CredentialMode.Direct:
                    builder.Services.AddHostedService<ActionCableWorker>();
                    break;
                case CredentialMode.Azure:
                    builder.Services.AddHostedService<AzureWorker>();
                    break;
                default:
                    Log.Error("credentials present but mode unknown — re-run `bvg-deamon join`");
                    return 2;
            }

            await builder.Build().RunAsync();
            return 0;
        }
        finally
        {
            await Log.CloseAndFlushAsync();
        }
    }

    private static string? ParseFlag(string[] args, string name)
    {
        for (int i = 0; i < args.Length - 1; i++)
            if (args[i] == "--" + name) return args[i + 1];
        return null;
    }
}

internal sealed class UsageException(string message) : Exception(message);
