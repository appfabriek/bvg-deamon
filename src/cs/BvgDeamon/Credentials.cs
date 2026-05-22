using System;
using System.IO;
using System.Runtime.InteropServices;
using System.Security.AccessControl;
using System.Security.Principal;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BvgDeamon;

public enum CredentialMode { None, Direct, Azure }

public sealed class Credentials
{
    [JsonPropertyName("client_id")]
    public string ClientId { get; set; } = "";

    [JsonPropertyName("registration_token")]
    public string RegistrationToken { get; set; } = "";

    [JsonPropertyName("connection_identifier")]
    public string? ConnectionIdentifier { get; set; }

    [JsonPropertyName("bvgeert_host")]
    public string? BvgeertHost { get; set; }

    [JsonPropertyName("cable_url")]
    public string? CableUrl { get; set; }

    [JsonPropertyName("transport_token")]
    public string? TransportToken { get; set; }

    [JsonPropertyName("azure_hub_url")]
    public string? AzureHubUrl { get; set; }

    [JsonPropertyName("access_url")]
    public string? AccessUrl { get; set; }

    [JsonPropertyName("access_url_expires_at")]
    public string? AccessUrlExpiresAt { get; set; }

    [JsonPropertyName("topic_identifier")]
    public string? TopicIdentifier { get; set; }

    [JsonIgnore]
    public CredentialMode Mode =>
        !string.IsNullOrEmpty(BvgeertHost) ? CredentialMode.Direct :
        !string.IsNullOrEmpty(AzureHubUrl) ? CredentialMode.Azure :
        CredentialMode.None;

    public static string FilePath()
    {
        var custom = Environment.GetEnvironmentVariable("BVG_DEAMON_CREDENTIALS");
        if (!string.IsNullOrEmpty(custom)) return custom;
        var local = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        return Path.Combine(local, "bvg-deamon", "credentials.json");
    }

    public static Credentials? Load()
    {
        var path = FilePath();
        if (!File.Exists(path)) return null;
        try
        {
            var json = File.ReadAllText(path);
            var creds = JsonSerializer.Deserialize<Credentials>(json, JsonOpts);
            if (creds == null || string.IsNullOrEmpty(creds.ClientId) || string.IsNullOrEmpty(creds.RegistrationToken))
                return null;
            if (creds.Mode == CredentialMode.None) return null;
            return creds;
        }
        catch
        {
            return null;
        }
    }

    public string Save()
    {
        var path = FilePath();
        Directory.CreateDirectory(Path.GetDirectoryName(path)!);
        File.WriteAllText(path, JsonSerializer.Serialize(this, JsonOpts));
        TryLockDown(path);
        return path;
    }

    public static void Wipe()
    {
        var path = FilePath();
        if (File.Exists(path)) File.Delete(path);
    }

    private static void TryLockDown(string path)
    {
        if (!RuntimeInformation.IsOSPlatform(OSPlatform.Windows)) return;
        try
        {
            var fi = new FileInfo(path);
            var fs = fi.GetAccessControl();
            fs.SetAccessRuleProtection(isProtected: true, preserveInheritance: false);

            var system = new SecurityIdentifier(WellKnownSidType.LocalSystemSid, null);
            var admins = new SecurityIdentifier(WellKnownSidType.BuiltinAdministratorsSid, null);

            fs.AddAccessRule(new FileSystemAccessRule(
                system, FileSystemRights.FullControl, AccessControlType.Allow));
            fs.AddAccessRule(new FileSystemAccessRule(
                admins, FileSystemRights.Read, AccessControlType.Allow));

            fi.SetAccessControl(fs);
        }
        catch
        {
            // Best-effort: ACL is enforced by the installer too; failure here just keeps inherited rights.
        }
    }

    private static readonly JsonSerializerOptions JsonOpts = new()
    {
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        WriteIndented = true
    };
}
