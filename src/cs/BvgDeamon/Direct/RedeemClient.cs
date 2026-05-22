using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace BvgDeamon.Direct;

public sealed class RedeemResponse
{
    [JsonPropertyName("client_identifier")]
    public string ClientIdentifier { get; set; } = "";

    [JsonPropertyName("registration_token")]
    public string RegistrationToken { get; set; } = "";

    [JsonPropertyName("transport_token")]
    public string TransportToken { get; set; } = "";

    [JsonPropertyName("websocket_url")]
    public string WebsocketUrl { get; set; } = "";

    [JsonPropertyName("connection_identifier")]
    public string? ConnectionIdentifier { get; set; }
}

public static class RedeemClient
{
    public static string BaseUrl(string host)
    {
        if (host.StartsWith("http://", StringComparison.OrdinalIgnoreCase) ||
            host.StartsWith("https://", StringComparison.OrdinalIgnoreCase))
            return host.TrimEnd('/');
        return $"https://{host}";
    }

    public static async Task<RedeemResponse> RedeemAsync(string host, string token, CancellationToken ct = default)
    {
        var url = $"{BaseUrl(host)}/api/v1/transport/redeem";
        using var http = new HttpClient { Timeout = TimeSpan.FromSeconds(30) };
        var res = await http.PostAsJsonAsync(url, new { token }, ct);
        if (!res.IsSuccessStatusCode)
        {
            var body = await res.Content.ReadAsStringAsync(ct);
            throw new InvalidOperationException($"redeem failed ({(int)res.StatusCode}): {body}");
        }
        var parsed = await res.Content.ReadFromJsonAsync<RedeemResponse>(cancellationToken: ct)
            ?? throw new InvalidOperationException("redeem returned empty body");
        return parsed;
    }
}
