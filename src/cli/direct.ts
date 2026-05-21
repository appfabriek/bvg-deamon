// Direct-mode: praat rechtstreeks met bvgeert via HTTPS (redeem) en
// WSS (ActionCable). Geen Azure tussenstap.
import pc from "picocolors";
import { Credentials, saveCredentials } from "./credentials.js";

type RedeemResponse = {
  client_identifier: string;
  registration_token: string;
  websocket_url: string;
  connection_identifier?: string;
};

export async function redeemDirect(host: string, token: string): Promise<RedeemResponse> {
  const url = `https://${host}/api/v1/transport/redeem`;
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
  const cableUrl = creds.cable_url ?? `wss://${creds.bvgeert_host}/cable`;
  const url = `${cableUrl}?transport_token=${encodeURIComponent(creds.registration_token)}`;
  const debug = process.env.BVG_DEBUG === "1";
  const dbg = (...a: unknown[]) => { if (debug) console.error(pc.dim("[debug]"), ...a as string[]); };

  console.log(pc.cyan(`connecting WSS ${cableUrl}...`));
  const WS: any = (globalThis as any).WebSocket;
  if (!WS) {
    console.error(pc.red("Node lacks global WebSocket. Require Node >= 22."));
    return 1;
  }
  const ws = new WS(url);
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
