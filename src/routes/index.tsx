import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, ArrowLeft, ArrowRight, SlidersHorizontal, Sun } from "lucide-react";
import { getRecentlyWatched, type WatchedFilm } from "@/lib/letterboxd.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tej Kshetri — Fullstack Developer, Pokhara" },
      {
        name: "description",
        content:
          "Tej Kshetri is a fullstack developer in Pokhara, Nepal — shipping products, client sites and small tools end to end.",
      },
      { property: "og:title", content: "Tej Kshetri — Fullstack Developer, Pokhara" },
      {
        property: "og:description",
        content:
          "Tej Kshetri is a fullstack developer in Pokhara, Nepal — shipping products, client sites and small tools end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "LaunchBunch", note: "Product", href: "https://launchbunch.com" },
  { name: "Swash Tackle", note: "AI · DevTool", href: "https://swash-tackle.vercel.app" },
  { name: "Mapory", note: "Side project", href: "https://mapory-nu.vercel.app" },
  { name: "AssignBee", note: "Product", href: "https://assignbee.com" },
  { name: "Summit Luxury Treks", href: "https://summitluxurytreks.com/" },
  { name: "Essence Treks Nepal", href: "https://essencetreksnepal.com/" },
  { name: "Walk Through Nepal", href: "https://walkthroughnepal.com/" },
  { name: "Trip Eleven", href: "https://tripeleven.com/" },
  { name: "Ash & Moss", href: "https://ashandmoss.com/" },
  { name: "Limestone Treks", href: "https://limestonetreks.com" },
  { name: "TNA", note: "Social impact", href: "https://support.kshetritej.com.np" },
  { name: "Crescentful", note: "Open source", href: "https://github.com/kshetritej/crescentful" },
];

const playlists = [
  { title: "Late Night Deploys", artist: "the 3am build playlist" },
  { title: "Lo-fi & Legacy Code", artist: "for refactors" },
  { title: "Nepali Indie", artist: "home, on shuffle" },
  { title: "Focus, Allegedly", artist: "no lyrics allowed" },
];

const testimonials = [
  {
    quote:
      "Tej took a vague brief and came back with something better than we asked for. He handles the design, the build and the deploy — we never had to chase three people for one fix.",
    name: "Trekking operator",
    role: "Client, Pokhara",
  },
  {
    quote:
      "Fast, blunt in the good way, and genuinely careful about the details nobody notices until they're wrong. The admin panel he built is the first one our team actually enjoys using.",
    name: "Product owner",
    role: "Client, Kathmandu",
  },
  {
    quote:
      "He ships. That sounds simple until you've worked with people who don't. Scope stayed honest, timelines stayed real, and the thing went live.",
    name: "Founder",
    role: "Early-stage startup",
  },
];

function Clock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kathmandu",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}

function Header() {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border p-5">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-border bg-secondary text-lg font-medium text-ink">
          TK
        </div>
        <div>
          <h1 className="text-[17px] font-medium text-ink">Tej Kshetri</h1>
          <p className="text-[15px] text-muted-foreground">Fullstack Developer</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="text-right text-[15px] leading-tight">
          <div className="text-ink">Pokhara, Nepal</div>
          <div className="mt-1 flex items-center justify-end gap-2 text-muted-foreground">
            <Clock />
            <span className="text-border">——</span>
            <span>22°C</span>
            <Sun className="h-3.5 w-3.5" />
          </div>
        </div>
        <button
          type="button"
          aria-label="Preferences"
          className="grid h-10 w-10 place-items-center rounded-md border border-border bg-secondary text-ink transition hover:bg-accent"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

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

function About() {
  return (
    <div className="space-y-5 border-b border-border p-5 py-10 text-[15px] leading-relaxed">
      <p>
        I'm a fullstack developer based in Pokhara, Nepal. I build products end to end —
        the interface, the API, the database and the deploy pipeline — usually alone,
        usually on purpose.
      </p>
      <p>
        Most of my work lives in React, Next.js and TanStack on the front, with Node,
        .NET and Postgres behind it. Some of it is my own products, some of it is client
        work for trekking operators and small businesses that needed a site that actually
        loads.
      </p>
      <p>
        The consistent part across all of it: caring about the small stuff — spacing,
        error states, the fifth-most-common path — that nobody praises but everybody
        feels.
      </p>
      <p className="text-muted-foreground">
        Music taste says a lot about a person, so mine is up there in the ticker. Judge
        accordingly.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="border-b border-border">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-4 border-b border-border px-5 py-4 transition last:border-b-0 hover:bg-secondary/60"
        >
          <span className="flex items-center gap-3">
            <span className="text-[16px] font-medium text-ink">{p.name}</span>
            {p.note ? (
              <span className="rounded-full border border-border px-2.5 py-0.5 text-[12px] text-muted-foreground">
                {p.note}
              </span>
            ) : null}
          </span>
          <span className="flex items-center gap-1 text-[14px] text-muted-foreground transition group-hover:text-ink">
            View site <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      ))}
    </div>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const pair = [testimonials[i % testimonials.length], testimonials[(i + 1) % testimonials.length]];

  return (
    <div className="border-b border-border">
      <div className="grid grid-cols-1 divide-y divide-border border-b border-border md:grid-cols-2 md:divide-x md:divide-y-0">
        {pair.map((t, idx) => (
          <div key={idx} className="flex min-h-[240px] flex-col justify-between p-5">
            <p className="text-[15px] leading-relaxed text-ink">{t.quote}</p>
            <div className="mt-8 text-[14px]">
              <div className="text-ink">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
          className="grid h-14 w-16 place-items-center border-r border-border text-muted-foreground transition hover:bg-secondary hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setI((v) => (v + 1) % testimonials.length)}
          className="grid h-14 w-16 place-items-center border-r border-border text-muted-foreground transition hover:bg-secondary hover:text-ink"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number | null }) {
  if (rating == null) return null;
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="text-ink">
      {"★".repeat(full)}
      {half ? "½" : ""}
      <span className="text-border">{"☆".repeat(5 - full - (half ? 1 : 0))}</span>
    </span>
  );
}

function RecentlyWatched() {
  const fetchWatched = useServerFn(getRecentlyWatched);
  const [data, setData] = useState<{ username: string; films: WatchedFilm[] } | null>(null);

  useEffect(() => {
    let alive = true;
    fetchWatched()
      .then((d) => alive && setData(d))
      .catch(() => alive && setData({ username: "kshetritej", films: [] }));
    return () => {
      alive = false;
    };
  }, [fetchWatched]);

  const films = data?.films ?? [];

  return (
    <div className="border-b border-border p-5">
      <div className="flex items-center justify-between">
        <span className="label">Recently watched</span>
        <a
          href={`https://letterboxd.com/${data?.username ?? "kshetritej"}/`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-[14px] text-muted-foreground transition hover:text-ink"
        >
          Letterboxd <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-6">
        {films.length > 0
          ? films.map((f) => (
              <a key={f.link} href={f.link} target="_blank" rel="noreferrer" className="group">
                <div className="aspect-[2/3] overflow-hidden rounded-md border border-border bg-secondary">
                  {f.poster ? (
                    <img
                      src={f.poster}
                      alt={`${f.title} poster`}
                      loading="lazy"
                      className="h-full w-full object-cover transition group-hover:opacity-80"
                    />
                  ) : null}
                </div>
                <div className="mt-2 truncate text-[13px] text-ink">{f.title}</div>
                <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  <span>{f.year}</span>
                  <Stars rating={f.rating} />
                </div>
              </a>
            ))
          : Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <div className="aspect-[2/3] animate-pulse rounded-md border border-border bg-secondary" />
              </div>
            ))}
      </div>

      {data && films.length === 0 ? (
        <p className="mt-4 text-[13px] text-muted-foreground">
          Letterboxd feed isn't connected yet — set the LETTERBOXD_USERNAME value and the
          last six films land here automatically.
        </p>
      ) : null}
    </div>
  );
}

function Footer() {
  return (
    <div className="flex items-stretch">
      <div className="flex w-24 items-center justify-center border-r border-border py-5 text-[14px] text-ink">
        {new Date().getFullYear()}
      </div>
      <div className="flex flex-1 items-center justify-end gap-6 px-5 py-5 text-[14px] text-muted-foreground">
        <a href="https://github.com/kshetritej" target="_blank" rel="noreferrer" className="hover:text-ink">
          GitHub
        </a>
        <a href="https://contact.kshetritej.com.np/" target="_blank" rel="noreferrer" className="hover:text-ink">
          Contact
        </a>
        <span className="text-ink">@kshetritej</span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background bg-grain">
      <div className="w-full max-w-[860px] border-r border-border">
        <Header />
        <Marquee />
        <About />
        <Projects />
        <Testimonials />
        <RecentlyWatched />
        <Footer />
      </div>
    </main>
  );
}
