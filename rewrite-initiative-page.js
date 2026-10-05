const fs = require('fs');

const content = `import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { initiativesData, initiativesList } from "@/lib/events-data";

export async function generateStaticParams() {
  return initiativesList.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = initiativesData[slug];
  if (!event) {
    return {
      title: "Initiative Not Found",
    };
  }
  const description = \`\${event.tagline}. \${event.description[0].slice(0, 140)}…\`;
  return {
    title: event.title,
    description,
    openGraph: {
      title: \`\${event.title} | Sarv Sewa Sashktikarn Sangthan\`,
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
      title: \`\${event.title} | Sarv Sewa Sashktikarn Sangthan\`,
      description,
      images: [event.img.src],
    },
  };
}

export default async function InitiativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = initiativesData[slug];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6 text-center">
        <div>
          <h1 className="font-display text-4xl font-bold text-primary">Initiative not found</h1>
          <p className="mt-3 text-muted-foreground">The program you're looking for doesn't exist.</p>
          <Link href="/initiatives" className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition shadow-elegant">
            Back to initiatives
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* PROGRAM HERO */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="mx-auto max-w-6xl px-6 relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              Program: {event.tag}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">{event.title}</h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-xl font-medium">{event.tagline}</p>
          </div>
          
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 hidden lg:block rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image src={event.img} alt={event.title} fill className="object-cover" placeholder="blur" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <Link href="/initiatives" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-12 transition group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> View all initiatives
        </Link>
        
        <div className="grid lg:grid-cols-[1fr_350px] gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Program Overview</div>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-foreground">Our Approach & Impact</h2>
            
            <div className="mt-8 space-y-6 text-lg text-foreground/85 leading-relaxed">
              {event.description.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>

            <div className="mt-16 bg-muted/40 rounded-[2rem] p-8 lg:p-10 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">★</span>
                Key Focus Areas
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {event.highlights.map((h: string) => (
                  <li key={h} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-32 space-y-8 order-1 lg:order-2">
            <div className="lg:hidden relative aspect-video rounded-3xl overflow-hidden shadow-elegant mb-8">
               <Image src={event.img} alt={event.title} fill className="object-cover" />
            </div>

            <div className="rounded-3xl bg-card border border-border shadow-elegant overflow-hidden">
              <div className="bg-muted/50 p-6 border-b border-border">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Program Details
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <InfoRow label="Status" value={event.date} />
                <InfoRow label="Coverage Area" value={event.location} />
                <InfoRow label="Contact Email" value={event.contactEmail} />
                <InfoRow label="Helpline" value={event.contactPhone} />
              </div>
            </div>

            <div className="rounded-3xl bg-accent text-accent-foreground p-8 text-center shadow-elegant relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 bg-white/10 rounded-full blur-2xl" />
              <h3 className="font-bold text-2xl mb-3 relative z-10">Support this cause</h3>
              <p className="text-sm text-accent-foreground/90 mb-8 relative z-10 font-medium">Your contribution helps us expand our reach and impact more lives.</p>
              <Link
                href={\`/donate?cause=\${event.slug}\`}
                className="inline-flex w-full items-center justify-center rounded-full bg-background text-foreground px-6 py-3.5 font-bold hover:scale-105 transition-transform duration-300 relative z-10 shadow-sm"
              >
                Donate Now
              </Link>
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
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-bold">{label}</div>
      <div className="mt-1 text-foreground font-semibold leading-relaxed">{value}</div>
    </div>
  );
}
\`;

fs.writeFileSync('app/initiatives/[slug]/page.tsx', content);
