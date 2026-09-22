import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { eventsData, eventsList } from "@/lib/events-data";

export async function generateStaticParams() {
  return eventsList.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData[slug];
  if (!event) {
    return {
      title: "Event Not Found",
    };
  }
  const description = `${event.tagline}. ${event.description[0].slice(0, 140)}…`;
  return {
    title: event.title,
    description,
    openGraph: {
      title: `${event.title} | Sarv Sewa Sashaktikaran Sangathan`,
      description,
      images: [
        {
          url: event.img.src,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Sarv Sewa Sashaktikaran Sangathan`,
      description,
      images: [event.img.src],
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = eventsData[slug];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6 text-center">
        <div>
          <h1 className="font-display text-4xl font-bold text-primary">Event not found</h1>
          <p className="mt-3 text-muted-foreground">The event you're looking for doesn't exist.</p>
          <Link href="/events" className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition shadow-elegant">
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[40vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={event.img}
            alt={event.title}
            fill
            priority
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/45" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl w-full px-6 py-16 lg:py-24 text-primary-foreground">
          <span className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
            {event.tag}
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02]">{event.title}</h1>
          <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-3xl">{event.tagline}</p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-10 transition">
          ← Back to all events
        </Link>
        
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">About the event</div>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-foreground">What to expect</h2>
            <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed text-lg">
              {event.description.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>

            <h3 className="mt-12 font-display text-2xl font-bold text-foreground">Highlights</h3>
            <ul className="mt-5 space-y-3">
              {event.highlights.map((h: string) => (
                <li key={h} className="flex gap-3 text-foreground/80 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="rounded-3xl bg-card border border-border shadow-elegant p-7">
              <div className="space-y-5">
                <InfoRow label="Date & Time" value={event.date} />
                <InfoRow label="Location" value={event.location} />
                <InfoRow label="Email" value={event.contactEmail} />
                <InfoRow label="Phone" value={event.contactPhone} />
              </div>

              <a
                href={`mailto:${event.contactEmail}?subject=Registration: ${encodeURIComponent(event.title)}`}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:bg-primary/90 transition shadow-elegant"
              >
                Register Now
              </a>
              <a
                href={`tel:${event.contactPhone.replace(/\s/g, "")}`}
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-secondary text-secondary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition"
              >
                Contact Coordinator
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">{label}</div>
      <div className="mt-1 text-foreground font-medium leading-relaxed">{value}</div>
    </div>
  );
}
