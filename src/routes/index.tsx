import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  ShieldPlus,
  Globe,
  Cloud,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Database,
  Sparkles,
  Layers,
  Boxes,
  Terminal,
  Workflow,
  Cpu,
  Rocket,
  PenTool,
  Map,
  ShoppingBag,
  GraduationCap,
  Gamepad2,
  Library,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tej Kshetri — Fullstack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tej Kshetri, fullstack web developer from Pokhara, Nepal. Building intentional things for the web.",
      },
      { property: "og:title", content: "Tej Kshetri — Fullstack Web Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Tej Kshetri, fullstack web developer from Pokhara, Nepal. Building intentional things for the web.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Box,
    title: "Frontends that don't embarrass you",
    body:
      "Clean, accessible interfaces shipped to real domains. React, Next.js, and TanStack — with taste, motion, and type that actually behaves.",
  },
  {
    icon: ShieldPlus,
    title: "Backends that stay up at 3am",
    body:
      "REST and serverless APIs in Node and .NET on top of Postgres. Auth, RLS, queues, and the unglamorous plumbing nobody tweets about.",
  },
  {
    icon: Globe,
    title: "Idea to URL, no middlemen",
    body:
      "Design, build, ship, iterate — same person, same brain. I run my own products and treat client work with the same stubbornness.",
  },
];

const projects = [
  {
    name: "Swash Tackle",
    desc: "A GPT wrapper that writes the Swagger payloads you keep avoiding. Realistic API samples, zero copy-paste.",
    href: "https://swash-tackle.vercel.app",
    tag: "AI · DevTool",
    stars: 14,
  },
  {
    name: "LaunchBunch",
    desc: "Discover and review local businesses with AI summaries, trust points, credibility badges, and a community upvote system that actually means something.",
    href: "https://launchbunch.com",
    tag: "Product",
  },
  {
    name: "Mapory",
    desc: "Pin your travel memories on a map. Upload images, write tiny stories, mark exact spots — a scrapbook with coordinates.",
    href: "https://mapory-nu.vercel.app",
    tag: "Next.js · Leaflet · Supabase",
  },
  {
    name: "Summit Luxury Treks",
    desc: "Marketing site and CMS for a Himalayan trekking operator. Mountains do the heavy lifting; I just made them load fast.",
    href: "https://summitluxurytreks.com",
    tag: "Client work",
  },
  {
    name: "Limestone Treks",
    desc: "Booking and content platform for a Nepal-based trekking company, with an admin panel that doesn't make their team cry.",
    href: "https://limestonetreks.com",
    tag: "Client work",
  },
  {
    name: "AssignBee",
    desc: "Helping students tackle essays, problem sets, and projects without pulling another all-nighter. Fast, friendly, suspiciously helpful.",
    href: "https://assignbee.com",
    tag: "Product",
  },
  {
    name: "TNA",
    desc: "The New Alliance — connecting people living with mental-health conditions to psychiatrists and real support, not just hotlines.",
    href: "https://support.kshetritej.com.np",
    tag: "Social impact",
  },
  {
    name: "Crescentful",
    desc: "A small, sharp side project I built to scratch my own itch — open on GitHub, opinions included.",
    href: "https://github.com/kshetritej/crescentful",
    tag: "Open source",
  },
];

const stacks = [
  {
    label: "Frontend",
    items: [
      { icon: Code2, name: "React & Next.js", sub: "App router, RSC, TanStack" },
      { icon: PenTool, name: "Tailwind CSS", sub: "Design systems & tokens" },
      { icon: Sparkles, name: "Motion / GSAP", sub: "Interactions worth noticing" },
      { icon: Layers, name: "TypeScript", sub: "Strict, end-to-end, no excuses" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: Terminal, name: "Node & Bun", sub: "REST, RPC, edge functions" },
      { icon: Cpu, name: ".NET / C#", sub: "ASP.NET Core, EF Core" },
      { icon: Database, name: "Postgres", sub: "Schemas that age well" },
      { icon: Cloud, name: "AWS", sub: "S3, Lambda, the usual suspects" },
    ],
  },
  {
    label: "Craft",
    items: [
      { icon: Boxes, name: "Architecture", sub: "Monorepos, clean boundaries" },
      { icon: Rocket, name: "Shipping", sub: "Vercel, Cloudflare, Docker" },
      { icon: Sparkles, name: "Design taste", sub: "Type, spacing, restraint" },
      { icon: Workflow, name: "DX", sub: "CI, previews, telemetry" },
    ],
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-brand-foreground">
            <Cloud className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-ink">
            KSHETRITEJ
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-foreground/80 md:flex">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#stack" className="hover:text-foreground">Stack</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/kshetritej"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-border px-4 py-1.5 text-sm font-medium hover:bg-accent md:inline-flex"
          >
            GitHub
          </a>
          <a
            href="https://contact.kshetritej.com.np/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-border px-4 py-1.5 text-sm font-medium hover:bg-accent"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dotgrid">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="marker-frame inline-flex items-center gap-2 rounded-md border border-dashed border-brand/60 bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand">
            <Cloud className="h-3.5 w-3.5" />
            Fullstack · Pokhara, Nepal
          </div>
          <h1 className="mt-10 text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
            I build things for the web. On purpose.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm Tej Kshetri — a fullstack developer who ships products end to
            end. Some are beautiful, some are brutal, a few are mildly useful,
            and one or two are honestly just for me. All of them are on
            purpose.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition hover:brightness-105"
            >
              See my work
            </a>
            <a
              href="https://github.com/kshetritej"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8">
              <f.icon className="h-6 w-6 text-ink" strokeWidth={1.5} />
              <h3 className="mt-6 text-base font-semibold text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Streamline() {
  return (
    <section className="bg-dotgrid border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <h2 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Less ceremony. More shipping.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Sketch on Monday, deploy by Friday, fix the embarrassing bit on
          Saturday. The loop stays tight — taste and reliability survive
          unharmed.
        </p>
      </div>
    </section>
  );
}

const projectIcons = [Rocket, Sparkles, Map, ShoppingBag, GraduationCap, Library, Gamepad2, PenTool];

function Work() {
  return (
    <section id="work" className="border-t border-border bg-dotgrid">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="inline-flex items-center gap-2 rounded-md border border-dashed border-brand/60 bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand">
            <Cloud className="h-3.5 w-3.5" />
            Selected work
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Real things, on real internets
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A grab bag of personal products, client websites, and dev tools.
            Each one is live, each one taught me something I now refuse to
            forget.
          </p>
          <a
            href="https://github.com/kshetritej?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
          >
            All repositories <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = projectIcons[i % projectIcons.length];
            return (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col gap-4 bg-background p-6 transition hover:bg-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-brand-soft text-brand">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
                <span className="mt-auto text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {p.tag}
                  {p.stars ? ` · ★ ${p.stars}` : ""}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-t border-border bg-dotgrid">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Small toolkit. Strong opinions.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            A short list of tools I keep returning to — picked so I can move
            fast today without making future-me file a complaint.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-3">
          {stacks.map((col) => (
            <div key={col.label}>
              <div className="text-sm font-medium text-muted-foreground">
                {col.label}
              </div>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {col.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-center gap-4 py-4 transition hover:bg-accent/40"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border text-ink">
                      <it.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {it.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {it.sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-dotgrid">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-dashed border-brand/60 bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand">
            <Cloud className="h-3.5 w-3.5" />
            About
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Hi, I'm Tej. I make websites and the occasional small product.
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Fullstack web developer based in Pokhara, Nepal. I work across the
            whole stack — design, frontend, backend, and the unglamorous
            middle bit — and I get a small dopamine hit every time an idea
            turns into a URL someone can actually open.
          </p>
          <p>
            Most of my code lives on GitHub as
            <a className="px-1 font-medium text-ink underline decoration-brand decoration-2 underline-offset-4" href="https://github.com/kshetritej" target="_blank" rel="noreferrer">@kshetritej</a>
            — client sites, product experiments, and tiny tools I built to
            scratch my own itch and then accidentally kept maintaining.
          </p>
          <p>
            Off the clock: long walks, longer books, and a slightly unhealthy
            relationship with typography.
          </p>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-brand-grain">
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-brand-foreground md:text-6xl">
          Have something worth building?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/90 md:text-lg">
          I'm open to selective freelance and collaboration. Pitch me a product
          you actually care about — I'll tell you honestly if I can help.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://contact.kshetritej.com.np/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-ink shadow-sm hover:bg-background/90"
          >
            <Send className="h-4 w-4" /> Start a conversation
          </a>
          <a
            href="https://linkedin.com/in/kshetritej"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/40 px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-foreground/10"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-brand-foreground">
              <Cloud className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-ink">
              KSHETRITEJ
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Tej Kshetri — fullstack developer based in Pokhara, Nepal.
            Building intentional things for the web.
          </p>
        </div>
        <div>
          <div className="text-sm font-medium text-ink">Sitemap</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#work" className="hover:text-foreground">Work</a></li>
            <li><a href="#stack" className="hover:text-foreground">Stack</a></li>
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium text-ink">Elsewhere</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/kshetritej" target="_blank" rel="noreferrer">
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://linkedin.com/in/kshetritej" target="_blank" rel="noreferrer">
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://contact.kshetritej.com.np/" target="_blank" rel="noreferrer">
                <Mail className="h-3.5 w-3.5" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Tej Kshetri. All rights reserved.</span>
          <span>Pokhara, Nepal · kshetritej.com.np</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Streamline />
      <Work />
      <Stack />
      <About />
      <Cta />
      <Footer />
    </main>
  );
}
