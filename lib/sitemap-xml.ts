import { SITE_URL } from "@/lib/site";

export function siteOrigin(): string {
  return SITE_URL.replace(/\/$/, "");
}

export function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
