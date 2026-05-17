import fs from "node:fs";
import path from "node:path";
import os from "node:os";

export type Credentials = {
  azure_hub_url: string;
  client_id: string;
  registration_token: string;
  topic_identifier?: string;
  bvgeert_host?: string;
  access_url?: string;
  access_url_expires_at?: string;
};

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
    if (!data.azure_hub_url || !data.client_id || !data.registration_token) return null;
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
