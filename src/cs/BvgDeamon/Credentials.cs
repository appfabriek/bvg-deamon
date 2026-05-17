using System;
using System.IO;
using System.Text.Json;

namespace BvgDeamon;

public sealed class Credentials
{
    public string AzureHubUrl { get; set; } = "";
    public string ClientId { get; set; } = "";
    public string RegistrationToken { get; set; } = "";
    public string? TopicIdentifier { get; set; }
    public string? AccessUrl { get; set; }
    public string? AccessUrlExpiresAt { get; set; }

    public static string Path()
    {
        var custom = Environment.GetEnvironmentVariable("BVG_DEAMON_CREDENTIALS");
        if (!string.IsNullOrEmpty(custom)) return custom;
        var local = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        return System.IO.Path.Combine(local, "bvg-deamon", "credentials.json");
    }

    public static Credentials? Load()
    {
        var path = Path();
        if (!File.Exists(path)) return null;
        try
        {
            var json = File.ReadAllText(path);
            var creds = JsonSerializer.Deserialize<Credentials>(json, JsonOpts);
            if (creds == null || string.IsNullOrEmpty(creds.AzureHubUrl) || string.IsNullOrEmpty(creds.ClientId) || string.IsNullOrEmpty(creds.RegistrationToken))
                return null;
            return creds;
        }
        catch
        {
            return null;
        }
    }

    public string Save()
    {
        var path = Path();
        Directory.CreateDirectory(System.IO.Path.GetDirectoryName(path)!);
        File.WriteAllText(path, JsonSerializer.Serialize(this, JsonOpts));
        return path;
    }

    public static void Wipe()
    {
        var path = Path();
        if (File.Exists(path)) File.Delete(path);
    }

    private static readonly JsonSerializerOptions JsonOpts = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
        WriteIndented = true
    };
}
