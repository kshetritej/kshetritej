export type WatchedFilm = {
  title: string;
  year: string;
  rating: number | null;
  poster: string | null;
  link: string;
};

function pick(block: string, tag: string) {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  if (!m) return "";
  return m[1]
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

export async function getRecentlyWatched(): Promise<{ username: string; films: WatchedFilm[] }> {
  const username = process.env.LETTERBOXD_USERNAME || "supermanintern";

  try {
    const res = await fetch(`https://letterboxd.com/${username}/rss/`, {
      headers: { "User-Agent": "portfolio-letterboxd-widget" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { username, films: [] };
    const xml = await res.text();

    const blocks = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    const films: WatchedFilm[] = [];

    for (const block of blocks) {
      const title = pick(block, "letterboxd:filmTitle");
      if (!title) continue;
      const ratingRaw = pick(block, "letterboxd:memberRating");
      const description = pick(block, "description");
      const poster = description.match(/<img src="([^"]+)"/)?.[1] ?? null;

      films.push({
        title,
        year: pick(block, "letterboxd:filmYear"),
        rating: ratingRaw ? Number(ratingRaw) : null,
        poster,
        link: pick(block, "link"),
      });

      if (films.length >= 6) break;
    }

    return { username, films };
  } catch {
    return { username, films: [] };
  }
}
