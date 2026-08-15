import { getPlaylistInfo, SPOTIFY_EMBED_URL, SPOTIFY_PLAYLIST_URL } from "@/lib/spotify";
import {ArrowUpRight} from "lucide-react";

async function Playlist() {
  const { title, cover } = await getPlaylistInfo();

  return (
    <div className="border-b border-border p-5">
      <div className="flex items-center justify-between">
        <span className="label">Playlist</span>
        <a
          href={SPOTIFY_PLAYLIST_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-[14px] text-muted-foreground transition hover:text-ink"
        >
          Open in Spotify <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-5 flex items-center gap-4">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={`${title} cover`}
            className="h-14 w-14 rounded-md border border-border object-cover"
          />
        ) : (
          <div className="grid h-14 w-14 place-items-center rounded-md border border-border bg-secondary text-ink">
            <span className="text-[16px] font-medium">{title.charAt(0)}</span>
          </div>
        )}
        <div>
          <div className="text-[17px] font-medium text-ink">{title}</div>
          <div className="text-[14px] text-muted-foreground">by kshetritej</div>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-border bg-[#121212]">
        <iframe
          title={`Spotify Embed: ${title}`}
          src={SPOTIFY_EMBED_URL}
          width="100%"
          height="400"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block"
        />
      </div>
    </div>
  );
}
