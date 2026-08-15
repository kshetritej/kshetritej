export const SPOTIFY_PLAYLIST_ID = "4UrvRpA5azLAzaztYtdm3j";
export const SPOTIFY_PLAYLIST_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;
export const SPOTIFY_EMBED_URL = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;

export async function getPlaylistInfo(): Promise<{ title: string; cover: string | null }> {
  try {
    const res = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(SPOTIFY_PLAYLIST_URL)}`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) throw new Error("oEmbed failed");
    const data: { title?: string; thumbnail_url?: string } = await res.json();
    return { title: data.title ?? "Playlist", cover: data.thumbnail_url ?? null };
  } catch {
    return { title: "Chill Raps", cover: null };
  }
}
