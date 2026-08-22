import type { Metadata } from "next";
import { ArrowUpRight, SlidersHorizontal, Sun } from "lucide-react";
import { Clock } from "@/components/clock";
import { Testimonials } from "@/components/testimonials";
import { getRecentlyWatched } from "@/lib/letterboxd";

export const metadata: Metadata = {
  title: "Tej Kshetri — Fullstack Developer, Pokhara",
  description:
    "Tej Kshetri is a fullstack developer in Pokhara, Nepal — shipping products, client sites and small tools end to end.",
};

const projects = [
  { name: "LaunchBunch", note: "Product", href: "https://launchbunch.com" },
  { name: "AssignBee", note: "Service", href: "https://assignbee.com" },
  { name: "Ash & Moss", note:"ERP, Product", href: "https://ashandmoss.com/" },
  { name: "Trip Eleven", note: "Product, Professional Work", href: "https://tripeleven.com/" },
  { name: "Essence Treks Nepal", note: "Professional Work", href: "https://essencetreksnepal.com/" },
  { name: "Walk Through Nepal", note: "Professional Work", href: "https://walkthroughnepal.com/" },
  { name: "Into Nepal Treks", note: "Professional Work", href: "https://new.intonepaltreks.com/" },
  { name: "Limestone Treks", note: "Professional Work", href: "https://limestonetreks.com" },
  { name: "Summit Luxury Treks", note: "Professional Work", href: "https://summitluxurytreks.com/" },
  { name: "Lovely Trips", note: "Professional Work", href: "https://lovelytrips.com.np/" },
  { name: "Crescentful", note: "Tool, SYI", href: "https://crescentful.vercel.app/" },
];


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
        {/*<button
          type="button"
          aria-label="Preferences"
          className="grid h-10 w-10 place-items-center rounded-md border border-border bg-secondary text-ink transition hover:bg-accent"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>*/}
      </div>
    </div>
  );
}


function About() {
  return (
    <div className="space-y-5 border-b border-border p-5 py-10 text-[15px] leading-relaxed">
      <p>
        I&apos;m a fullstack developer based in Pokhara, Nepal. I build products end to end —
        the interface, the API, the database and the deploy pipeline.
      </p>
      <p>
        Most of my work lives in React, Next.js and TanStack on the front, with Node, .NET and
        Postgres behind it. Some of it is my own products, some of it is client work for trekking
        operators and small businesses that needed a system.
      </p>
      <p>
        The consistent part across all of it: caring about the small stuff — spacing, error
        states, the fifth-most-common path — that nobody praises but everybody feels.
      </p>
      {/*<p className="text-muted-foreground">
        Music taste says a lot about a person, so mine is up there in the ticker. Judge
        accordingly.
      </p>*/}
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

async function RecentlyWatched() {
  const { username, films } = await getRecentlyWatched();

  return (
    <div className="border-b border-border p-5">
      <div className="flex items-center justify-between">
        <span className="label">Recently watched</span>
        <a
          href={`https://letterboxd.com/${username}/`}
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
                    // eslint-disable-next-line @next/next/no-img-element
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

      {films.length === 0 ? (
        <p className="mt-4 text-[13px] text-muted-foreground">
          Letterboxd feed isn&apos;t reachable right now — the last six films land here
          automatically when it is.
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
        <a href="https://rwx.kshetritej.com.np/" target="_blank" rel="noreferrer" className="hover:text-ink">
          rwx
        </a>
        <a href="https://github.com/kshetritej" target="_blank" rel="noreferrer" className="hover:text-ink">
          GitHub
        </a>
        <a href="https://linkedin.com/in/kshetritej" target="_blank" rel="noreferrer" className="hover:text-ink">
          LinkedIn
        </a>
        <a href="https://contact.kshetritej.com.np/" target="_blank" rel="noreferrer" className="hover:text-ink">
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-background bg-grain">
      <div className="w-full max-w-[860px] border-r border-border">
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <RecentlyWatched />
        <Footer />
      </div>
    </main>
  );
}
