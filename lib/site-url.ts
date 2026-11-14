export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return undefined;
  try {
    const url = new URL(configured);
    if (url.protocol !== "https:" && url.hostname !== "localhost") return undefined;
    return url.toString().replace(/\/$/, "");
  } catch {
    return undefined;
  }
}
