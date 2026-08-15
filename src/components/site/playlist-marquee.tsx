const playlists = [
  { title: "Late Night Deploys", artist: "the 3am build playlist" },
  { title: "Lo-fi & Legacy Code", artist: "for refactors" },
  { title: "Nepali Indie", artist: "home, on shuffle" },
  { title: "Focus, Allegedly", artist: "no lyrics allowed" },
];

function Marquee() {
  const row = [...playlists, ...playlists];
  return (
    <div className="flex items-stretch border-b border-border">
      <div className="label shrink-0 border-r border-border px-5 py-4 leading-none">
        On repeat
      </div>
      <div className="relative flex-1 overflow-hidden py-4">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap px-6">
          {row.map((p, i) => (
            <span key={i} className="flex items-center gap-2 text-[14px]">
              <span className="h-4 w-4 rounded-sm bg-secondary" />
              <span className="text-ink">{p.title}</span>
              <span className="text-muted-foreground">{p.artist}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
