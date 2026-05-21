// Direct-mode: praat rechtstreeks met bvgeert via HTTPS (redeem) en
// WSS (ActionCable). Geen Azure tussenstap.
import pc from "picocolors";
import { Credentials, saveCredentials } from "./credentials.js";

type RedeemResponse = {
  client_identifier: string;
  registration_token: string;
  transport_token: string;
  websocket_url: string;
  connection_identifier?: string;
};

// Accepteert "bvgeert.com" (default HTTPS), "bvgeert.lvh.me:3000" (default
// HTTPS — geef expliciet http://… mee voor dev), of een volledige URL met
// scheme. Voor lokale dev: `--host http://bvgeert.lvh.me:3000`.
function baseUrl(host: string): string {
  if (host.startsWith("http://") || host.startsWith("https://")) return host.replace(/\/$/, "");
  return `https://${host}`;
}

function wsBaseUrl(host: string): string {
  return baseUrl(host).replace(/^http/, "ws");
}

export async function redeemDirect(host: string, token: string): Promise<RedeemResponse> {
  const url = `${baseUrl(host)}/api/v1/transport/redeem`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ token })
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`redeem failed (${res.status}): ${body}`);
  }
  return await res.json() as RedeemResponse;
}

export async function joinDirect(host: string, token: string, transport?: string): Promise<number> {
  console.log(pc.cyan(`connecting to bvgeert at ${host}...`));
  const r = await redeemDirect(host, token);
  const path = saveCredentials({
    client_id: r.client_identifier,
    registration_token: r.registration_token,
    transport_token: r.transport_token,
    bvgeert_host: host,
    cable_url: r.websocket_url,
    connection_identifier: r.connection_identifier ?? transport,
  });
  console.log(pc.green(`paired as ${r.client_identifier} on ${r.connection_identifier ?? transport ?? "(unknown)"}`));
  console.log(`credentials: ${path}`);
  return 0;
}

// Minimal ActionCable client: opens a WS, subscribes to TransportChannel
// with the right connection_identifier, prints incoming messages.
export async function daemonDirect(creds: Credentials): Promise<number> {
  const cableUrl = creds.cable_url ?? `${wsBaseUrl(creds.bvgeert_host!)}/cable`;
  // ApplicationCable verwacht een Rails-signed transport-session token.
  // Fallback naar registration_token voor backward-compat.
  const wsToken = creds.transport_token ?? creds.registration_token;
  const url = `${cableUrl}?transport_token=${encodeURIComponent(wsToken)}`;
  const debug = process.env.BVG_DEBUG === "1";
  const dbg = (...a: unknown[]) => { if (debug) console.error(pc.dim("[debug]"), ...a as string[]); };

  console.log(pc.cyan(`connecting WSS ${cableUrl}...`));
  const WS: any = (globalThis as any).WebSocket;
  if (!WS) {
    console.error(pc.red("Node lacks global WebSocket. Require Node >= 22."));
    return 1;
  }
  // ActionCable sub-protocol — anders sluit Rails de verbinding meteen.
  const ws = new WS(url, [ "actioncable-v1-json" ]);
  const connId = creds.connection_identifier;
  const subId = JSON.stringify({ channel: "TransportChannel", connection_identifier: connId });

  return await new Promise<number>((resolve) => {
    ws.addEventListener("open", () => {
      dbg("ws open");
    });
    ws.addEventListener("message", (event: MessageEvent) => {
      const raw = typeof event.data === "string" ? event.data : new TextDecoder().decode(event.data as ArrayBuffer);
      dbg("ws msg", raw);
      let msg: any;
      try { msg = JSON.parse(raw); } catch { return; }
      if (msg.type === "welcome") {
        ws.send(JSON.stringify({ command: "subscribe", identifier: subId }));
      } else if (msg.type === "ping" || msg.type === "confirm_subscription") {
        // no-op
      } else if (msg.identifier && msg.message) {
        const env = msg.message;
        console.log(pc.bold(`#${env.sequence ?? "?"}`), pc.dim(env.message_type ?? ""), pc.cyan(env.payload ?? ""));
      } else if (msg.type === "reject_subscription") {
        console.error(pc.red("subscription rejected"));
        ws.close();
        resolve(2);
      }
    });
    ws.addEventListener("error", (e: any) => {
      console.error(pc.red("ws error"), e?.message ?? e);
    });
    ws.addEventListener("close", (e: any) => {
      dbg("ws close", e?.code, e?.reason);
      resolve(0);
    });
    process.on("SIGINT", () => { ws.close(); resolve(0); });
    process.on("SIGTERM", () => { ws.close(); resolve(0); });
  });
}
