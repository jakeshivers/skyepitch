import type { GeneratedPitch } from './ai';

export function encodePitchToHash(p: GeneratedPitch, title: string): string {
  const payload = JSON.stringify({ v: 1, title, p });
  const b64 = btoa(unescape(encodeURIComponent(payload)));
  return `${location.origin}/builder#share=${b64}`;
}

export function decodeSharedPitch(
  hash: string
): { title: string; p: GeneratedPitch } | null {
  const m = hash.match(/share=([^&]+)/);
  if (!m) return null;
  try {
    const json = decodeURIComponent(escape(atob(m[1])));
    const parsed = JSON.parse(json);
    if (parsed?.v === 1 && parsed.p) return { title: parsed.title, p: parsed.p };
  } catch {}
  return null;
}

export async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
