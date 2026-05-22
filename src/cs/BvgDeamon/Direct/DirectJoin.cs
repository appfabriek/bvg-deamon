using System;
using System.Threading.Tasks;

namespace BvgDeamon.Direct;

public static class DirectJoin
{
    public static async Task<int> RunAsync(string host, string token, string? transport)
    {
        Console.WriteLine($"connecting to bvgeert at {host}...");
        var r = await RedeemClient.RedeemAsync(host, token);
        var creds = new Credentials
        {
            ClientId = r.ClientIdentifier,
            RegistrationToken = r.RegistrationToken,
            TransportToken = r.TransportToken,
            BvgeertHost = host,
            CableUrl = r.WebsocketUrl,
            ConnectionIdentifier = r.ConnectionIdentifier ?? transport,
        };
        var path = creds.Save();
        Console.WriteLine($"paired as {creds.ClientId} on {creds.ConnectionIdentifier ?? "(unknown)"}");
        Console.WriteLine($"credentials: {path}");
        return 0;
    }
}
