#!/usr/bin/env node
import os from "node:os";
import readline from "node:readline";
import pc from "picocolors";
import { WebPubSubClient, WebPubSubJsonProtocol } from "@azure/web-pubsub-client";
import { loadCredentials, saveCredentials, wipeCredentials, credentialMode, Credentials } from "./credentials.js";
import { joinDirect, daemonDirect } from "./direct.js";

// Wordt door esbuild ingelined via --define:BVG_VERSION='"x.y.z"'.
// Valt terug op 'unknown' bij directe ts-run zonder define.
declare const BVG_VERSION: string;
const VERSION = typeof BVG_VERSION !== "undefined" ? BVG_VERSION : "unknown";

type Subcommand = (args: string[]) => Promise<number>;

const subcommands: Record<string, Subcommand> = {
  join: cmdJoin,
  daemon: cmdDaemon,
  clients: cmdClients,
  send: cmdSend,
  unpair: cmdUnpair,
};

async function main(): Promise<number> {
  const [cmd, ...rest] = process.argv.slice(2);
  if (!cmd || cmd === "--help" || cmd === "-h") {
    printUsage();
    return cmd ? 0 : 2;
  }
  if (cmd === "--version" || cmd === "-v" || cmd === "version") {
    console.log(VERSION);
    return 0;
  }
  const fn = subcommands[cmd];
  if (!fn) {
    console.error(pc.red(`unknown subcommand: ${cmd}`));
    printUsage();
    return 2;
  }
  try {
    return await fn(rest);
  } catch (err) {
    console.error(pc.red(err instanceof Error ? err.message : String(err)));
    return 1;
  }
}

function printUsage(): void {
  console.error(`
bvg-deamon — pure-Azure transport client for bvgeert

Usage:
  bvg-deamon join --hub <wss://x.webpubsub.azure.com/client/hubs/<hub>> --transport <identifier> [--token <jt_xxx>]
      anonymously connect to bvgeert via Azure, request to join a
      transport, print a pairing code and wait for admin approval.
      With --token (or env BVG_JOIN_TOKEN), redeem a pre-approved
      join token instead of waiting for an admin — skips the pair-code
      step entirely.

  bvg-deamon daemon
      keep an authenticated WebSocket open. Prints incoming envelopes.
      Type "reply <text>" in stdin to reply to the last sender.

  bvg-deamon clients [--online]
      list members of the joined transport.

  bvg-deamon send <target-identifier|*> <text>
      send a direct message to one client on the joined transport, or "*" to broadcast.

  bvg-deamon unpair
      wipe local credentials (server-side revoke via bvgeert admin).

Credentials are stored at $BVG_DEAMON_CREDENTIALS or ~/.config/bvg-deamon/credentials.json (mode 0600).
`);
}

function parseFlag(args: string[], name: string): string | undefined {
  const idx = args.indexOf(`--${name}`);
  if (idx === -1) return undefined;
  return args[idx + 1];
}

type PairingCodeMsg = { type: "pairing.code"; code: string; expires_at: string; admin_url?: string };
type PairingApprovedMsg = { type: "pairing.approved"; client_id: string; registration_token: string; url: string; expires_at: string };
type PairingDeniedMsg = { type: "pairing.denied" };
type TokenRefreshMsg = { type: "token.refresh"; url: string; expires_at: string };
type SystemMsg = PairingCodeMsg | PairingApprovedMsg | PairingDeniedMsg | TokenRefreshMsg;

function asSystemMsg(data: unknown): SystemMsg | null {
  if (!data || typeof data !== "object") return null;
  const obj = data as Record<string, unknown>;
  if (typeof obj.type !== "string") return null;
  return obj as SystemMsg;
}

async function cmdJoin(args: string[]): Promise<number> {
  const host = parseFlag(args, "host") ?? process.env.BVG_BVGEERT_HOST;
  const tokenFlag = parseFlag(args, "token");
  const token = tokenFlag ?? process.env.BVG_JOIN_TOKEN ?? undefined;
  const transport = parseFlag(args, "transport") ?? process.env.BVG_TRANSPORT;

  // Direct-mode: bvgeert direct bereikbaar via HTTPS.
  if (host && token) {
    return await joinDirect(host, token, transport);
  }

  const hub = parseFlag(args, "hub") ?? process.env.BVG_AZURE_HUB;
  if (!hub || !transport) {
    console.error(pc.red("usage: bvg-deamon join --host <bvgeert-host> --token <jt_xxx>     (directe route)"));
    console.error(pc.red("       bvg-deamon join --hub <wss-url> --transport <id> [--token <jt_xxx>]   (Azure-route)"));
    return 2;
  }
  const debug = process.env.BVG_DEBUG === "1";
  const dbg = (...a: unknown[]) => { if (debug) console.error(pc.dim("[debug]"), ...a as string[]); };

  console.log(pc.cyan(token ? "connecting to Azure (token redeem)..." : "connecting to Azure anonymously..."));
  const client = new WebPubSubClient({ getClientAccessUrl: async () => hub }, { protocol: WebPubSubJsonProtocol() });
  let approved: PairingApprovedMsg | null = null;
  let denied = false;
  let topicRequested = false;
  let tokenRedeemed = false;
  let connectionId: string | null = null;

  client.on("connected", async (e) => {
    connectionId = e.connectionId;
    dbg("connected", { connectionId: e.connectionId, userId: e.userId });
    if (token && !tokenRedeemed) {
      tokenRedeemed = true;
      dbg("redeeming join token");
      await client.sendEvent("redeem_join_token", { token, topic_identifier: transport }, "json", { fireAndForget: true });
    }
  });
  client.on("disconnected", (e) => {
    dbg("disconnected", { message: e.message });
  });
  client.on("stopped", () => dbg("stopped"));
  client.on("server-message", async (e) => {
    dbg("server-message raw:", JSON.stringify(e.message.data));
    const msg = asSystemMsg(e.message.data);
    if (!msg) return;
    if (msg.type === "pairing.code") {
      // Skip the pair-code dance entirely when a token was supplied —
      // the redeem_join_token event is already in flight from connected.
      if (token) return;
      console.log("");
      console.log(pc.bold("pair code:"), pc.cyan(msg.code));
      if (msg.admin_url) console.log(`approve in admin: ${msg.admin_url}`);
      console.log(`expires: ${msg.expires_at}`);
      console.log(pc.dim("\nwaiting for approval — Ctrl+C to cancel\n"));
      if (!topicRequested) {
        topicRequested = true;
        await client.sendEvent("pairing_request_topic", { topic_identifier: transport }, "json", { fireAndForget: true });
      }
    } else if (msg.type === "pairing.approved") {
      approved = msg;
    } else if (msg.type === "pairing.denied") {
      denied = true;
    }
  });

  await client.start();

  const startedAt = Date.now();
  while (!approved && !denied && Date.now() - startedAt < 30 * 60 * 1000) {
    await new Promise((r) => setTimeout(r, 1000));
  }
  await client.stop();

  if (denied) {
    console.error(pc.red("denied by admin"));
    return 3;
  }
  if (!approved) {
    console.error(pc.red("timeout waiting for approval"));
    return 4;
  }

  const path = saveCredentials({
    azure_hub_url: hub,
    client_id: (approved as PairingApprovedMsg).client_id,
    registration_token: (approved as PairingApprovedMsg).registration_token,
    access_url: (approved as PairingApprovedMsg).url,
    access_url_expires_at: (approved as PairingApprovedMsg).expires_at,
    topic_identifier: transport,
  });
  console.log(pc.green(`paired as ${(approved as PairingApprovedMsg).client_id} on transport ${transport}`));
  console.log(`credentials: ${path}`);
  console.log(pc.dim(`bootstrap connectionId was ${connectionId}`));
  return 0;
}

async function cmdUnpair(_args: string[]): Promise<number> {
  wipeCredentials();
  console.log(pc.green("local credentials wiped"));
  return 0;
}

function authedClient(creds: Credentials): WebPubSubClient {
  let accessUrl = creds.access_url ?? "";
  let accessExpiresAt = creds.access_url_expires_at ? Date.parse(creds.access_url_expires_at) : 0;
  let refreshResolve: ((url: string) => void) | null = null;

  const c: WebPubSubClient = new WebPubSubClient({
    getClientAccessUrl: async () => {
      if (!accessUrl) throw new Error("no access url — re-pair");
      if (Date.now() >= accessExpiresAt - 60_000 && !refreshResolve) {
        try {
          const waiter = new Promise<string>((resolve) => { refreshResolve = resolve; });
          await c.sendEvent("request_refresh_token", {}, "json", { fireAndForget: true });
          accessUrl = await Promise.race([
            waiter,
            new Promise<string>((_, reject) => setTimeout(() => reject(new Error("token refresh timeout")), 30_000)),
          ]);
        } catch {
          /* fall back to stale URL */
        } finally {
          refreshResolve = null;
        }
      }
      return accessUrl;
    },
  }, {
    autoReconnect: true,
    reconnectRetryOptions: { maxRetries: Number.MAX_SAFE_INTEGER, retryDelayInMs: 1_000, maxRetryDelayInMs: 30_000, mode: "Exponential" },
    protocol: WebPubSubJsonProtocol(),
  });

  c.on("server-message", (e) => {
    const data = e.message.data as Record<string, unknown> | undefined;
    if (data?.type === "token.refresh" && typeof data.url === "string") {
      accessUrl = data.url;
      if (typeof data.expires_at === "string") accessExpiresAt = Date.parse(data.expires_at);
      refreshResolve?.(data.url);
    }
  });

  return c;
}

function requireCreds(): Credentials {
  const creds = loadCredentials();
  if (!creds) {
    console.error(pc.red("not paired — run `bvg-deamon join` first"));
    process.exit(2);
  }
  return creds;
}

async function cmdDaemon(_args: string[]): Promise<number> {
  const creds = requireCreds();
  if (credentialMode(creds) === "direct") {
    return await daemonDirect(creds);
  }
  const client = authedClient(creds);

  let lastSender: string | null = null;

  client.on("connected", (e) => {
    console.log(pc.green(`connected — connectionId=${e.connectionId} userId=${e.userId}`));
    console.log(pc.dim(`transport: ${creds.topic_identifier ?? "(unknown)"}`));
    console.log(pc.dim("type 'reply <text>' to reply to last sender, 'help' for commands"));
  });
  client.on("disconnected", (e) => {
    console.log(pc.yellow(`disconnected — ${e.message ?? ""}`));
  });

  const handleEnvelope = (data: any) => {
    if (data?.type === "token.refresh") return;
    const sender = data?.sender_identifier ?? "(unknown)";
    const target = data?.target_identifier;
    if (target && target !== creds.client_id) return; // filter out targeted-not-for-me
    const payload = typeof data?.payload === "string" ? data.payload : JSON.stringify(data?.payload);
    console.log(`${pc.cyan("[" + sender + "]")} ${data?.message_type ?? ""}: ${payload}`);
    lastSender = sender;
  };

  client.on("server-message", (e) => handleEnvelope(e.message.data));
  client.on("group-message", (e) => handleEnvelope(e.message.data));

  await client.start();

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
  rl.on("line", async (raw) => {
    const line = raw.trim();
    if (!line) return;
    if (line === "help") {
      console.log(pc.dim("commands: reply <text> | send <identifier> <text> | clients | quit"));
      return;
    }
    if (line === "quit") {
      await client.stop();
      process.exit(0);
    }
    if (line === "clients") {
      try {
        await listClients(creds, false);
      } catch (err) {
        console.error(pc.red(err instanceof Error ? err.message : String(err)));
      }
      return;
    }
    const replyMatch = line.match(/^reply\s+(.+)$/);
    if (replyMatch) {
      if (!lastSender) { console.log(pc.yellow("no last sender to reply to")); return; }
      await publish(client, creds, lastSender, replyMatch[1]);
      return;
    }
    const sendMatch = line.match(/^send\s+(\S+)\s+(.+)$/);
    if (sendMatch) {
      await publish(client, creds, sendMatch[1], sendMatch[2]);
      return;
    }
    console.log(pc.yellow("unknown command — try 'help'"));
  });

  return new Promise<number>((resolve) => {
    const shutdown = async (sig: string) => {
      console.log(pc.dim(`\n${sig}, stopping`));
      try { await client.stop(); } catch { /* */ }
      resolve(0);
    };
    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  });
}

async function publish(client: WebPubSubClient, creds: Credentials, targetIdentifier: string, text: string): Promise<void> {
  const target = targetIdentifier === "*" ? null : targetIdentifier;
  await client.sendEvent("publish", {
    topic_identifier: creds.topic_identifier,
    message_type: "chat.text",
    payload: text,
    target_identifier: target,
  }, "json", { fireAndForget: true });
  console.log(pc.green(`sent to ${targetIdentifier}: ${text}`));
}

async function cmdClients(args: string[]): Promise<number> {
  const creds = requireCreds();
  await listClients(creds, args.includes("--online"));
  return 0;
}

async function listClients(creds: Credentials, onlineOnly: boolean): Promise<void> {
  if (!creds.topic_identifier) throw new Error("no transport associated with credentials");

  const client = authedClient(creds);
  let result: { clients: Array<{ identifier: string; name?: string; kind: string; online: boolean }> } | null = null;
  client.on("server-message", (e) => {
    const data = e.message.data as Record<string, unknown> | undefined;
    if (data?.type === "clients.list_result") {
      result = data as any;
    }
  });
  await client.start();
  await client.sendEvent("clients_list", { topic_identifier: creds.topic_identifier }, "json", { fireAndForget: true });
  const startedAt = Date.now();
  while (!result && Date.now() - startedAt < 10_000) {
    await new Promise((r) => setTimeout(r, 100));
  }
  await client.stop();
  if (!result) throw new Error("timeout waiting for clients list");

  const entries = onlineOnly ? result.clients.filter((c) => c.online) : result.clients;
  for (const c of entries) {
    const dot = c.online ? pc.green("●") : pc.dim("○");
    console.log(`${dot} ${c.identifier}${c.name ? ` (${c.name})` : ""} — ${c.kind}`);
  }
}

async function cmdSend(args: string[]): Promise<number> {
  const creds = requireCreds();
  const [target, ...rest] = args;
  if (!target || rest.length === 0) {
    console.error(pc.red("usage: bvg-deamon send <target-identifier|*> <text>"));
    return 2;
  }
  const text = rest.join(" ");
  const client = authedClient(creds);
  await client.start();
  await publish(client, creds, target, text);
  await client.stop();
  return 0;
}

main().then((code) => process.exit(code));
