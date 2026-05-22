using System;
using System.IO;
using Serilog;
using Serilog.Core;
using Serilog.Events;

namespace BvgDeamon.Logging;

public static class SerilogSetup
{
    public static Logger Build()
    {
        var logDir = ResolveLogDirectory();
        Directory.CreateDirectory(logDir);

        return new LoggerConfiguration()
            .MinimumLevel.Information()
            .MinimumLevel.Override("Microsoft.Hosting.Lifetime", LogEventLevel.Information)
            .WriteTo.File(
                path: Path.Combine(logDir, "bvg-deamon-.log"),
                rollingInterval: RollingInterval.Day,
                fileSizeLimitBytes: 10L * 1024 * 1024,
                rollOnFileSizeLimit: true,
                retainedFileCountLimit: 5,
                outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff} [{Level:u3}] {Message:lj}{NewLine}{Exception}")
            .WriteTo.Console(
                outputTemplate: "{Timestamp:HH:mm:ss.fff} [{Level:u3}] {Message:lj}{NewLine}{Exception}")
            .CreateLogger();
    }

    public static string ResolveLogDirectory()
    {
        // Service-mode (installer sets BVG_DEAMON_CREDENTIALS under %ProgramData%) writes to
        // %ProgramData%\bvg-deamon\logs. Interactive runs without that env-var (developer or
        // operator running the exe by hand) log next to the exe — they can't always write to
        // ProgramData without elevation.
        var creds = Environment.GetEnvironmentVariable("BVG_DEAMON_CREDENTIALS") ?? "";
        var programData = Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData);
        if (!string.IsNullOrEmpty(programData) &&
            creds.StartsWith(programData, StringComparison.OrdinalIgnoreCase))
        {
            return Path.Combine(programData, "bvg-deamon", "logs");
        }
        return Path.Combine(AppContext.BaseDirectory, "logs");
    }
}
