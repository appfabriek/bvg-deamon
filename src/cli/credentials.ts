import fs from "node:fs";
import path from "node:path";
import os from "node:os";

// Daemon supports two transport modes:
//   - "direct"  : connect WSS naar bvgeert /cable (ActionCable). Vereist bvgeert_host.
//   - "azure"   : connect WPS hub voor restricted networks. Vereist azure_hub_url.
// Mode wordt afgeleid uit welke credentials gezet zijn.
export type Credentials = {
  // gedeeld
  client_id: string;
  registration_token: string;
  connection_identifier?: string;
  // direct-mode
  bvgeert_host?: string;
  cable_url?: string;
  transport_token?: string; // signed transport-session token (7d)
  // azure-mode (legacy / restricted-network fallback)
  azure_hub_url?: string;
  access_url?: string;
  access_url_expires_at?: string;
  topic_identifier?: string; // historisch synoniem voor connection_identifier
};

export type CredentialMode = "direct" | "azure";

export function credentialMode(creds: Credentials): CredentialMode | null {
  if (creds.bvgeert_host) return "direct";
  if (creds.azure_hub_url) return "azure";
  return null;
}

function defaultPath(): string {
  const xdg = process.env.XDG_CONFIG_HOME;
  const base = xdg ? xdg : path.join(os.homedir(), ".config");
  return path.join(base, "bvg-deamon", "credentials.json");
}

export function credentialsPath(): string {
  return process.env.BVG_DEAMON_CREDENTIALS ?? defaultPath();
}

export function loadCredentials(): Credentials | null {
  const p = credentialsPath();
  if (!fs.existsSync(p)) return null;
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf8")) as Credentials;
    if (!data.client_id || !data.registration_token) return null;
    if (!credentialMode(data)) return null;
    return data;
  } catch {
    return null;
  }
}

export function saveCredentials(creds: Credentials): string {
  const p = credentialsPath();
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(creds, null, 2), { mode: 0o600 });
  return p;
}

export function wipeCredentials(): void {
  const p = credentialsPath();
  if (fs.existsSync(p)) fs.unlinkSync(p);
}
