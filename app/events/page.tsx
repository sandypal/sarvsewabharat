import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { eventsList } from "@/lib/events-data";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Events — Sarv Sewa Sashaktikaran Sangathan",
  description: "Discover upcoming events by Sarv Sewa Sashaktikaran Sangathan — marathons, cricket tournaments, blood donation camps, tree plantation drives and more.",
  openGraph: {
    title: "Events — Sarv Sewa Sashaktikaran Sangathan",
    description: "Run, play, donate, plant and celebrate with us. Explore our calendar of community events.",
  },
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-[0.97]" />
        <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_30%,oklch(0.82_0.16_95/0.35),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.18_50/0.3),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-white/25">
            <CalendarDays className="h-3.5 w-3.5 text-secondary" /> Our Calendar
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl">
            Every event is a step toward a stronger community.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">
            From sunrise marathons to blood donation camps and tree plantations, find the cause that moves you and register to be part of it.
          </p>
        </div>
        <div className="relative h-16 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* EVENTS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-8">
          {eventsList.map((event) => (
            <article
              key={event.slug}
              className="group relative rounded-3xl bg-card border border-border shadow-elegant overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={event.img}
                  alt={event.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                />
              </div>
              <div className="p-7 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    {event.tag}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl lg:text-3xl font-bold text-foreground">
                  {event.title}
                </h2>
                <p className="mt-2 text-accent font-medium">{event.tagline}</p>
                <p className="mt-4 text-foreground/70 leading-relaxed line-clamp-2">
                  {event.description[0]}
                </p>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CalendarDays className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link
                  href={`/events/${event.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition shadow-elegant"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <div className="rounded-[2rem] bg-card border border-border shadow-elegant p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Host With Us</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground max-w-2xl mx-auto">
              Want to bring an event to your district?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              We partner with schools, colleges, RWAs and panchayats to organise health, sports and environment camps where they are needed most.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:events@sangathan.org?subject=Host an event in my district"
                className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary/90 transition shadow-elegant"
              >
                Partner With Us
              </a>
              <Link
                href="/"
                className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
