"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

export function Testimonials() {
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
