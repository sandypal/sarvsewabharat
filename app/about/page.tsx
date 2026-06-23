import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import community from "@/public/community.jpg";

export const metadata: Metadata = {
  title: "About Us — Sarv Sewa Sashaktikaran Sangathan",
  description: "Learn about Sarv Sewa Sashaktikaran Sangathan — our story, mission, values and the volunteers powering a decade of community service across India.",
  openGraph: {
    title: "About Us — Sarv Sewa Sashaktikaran Sangathan",
    description: "A decade of service. 3,000+ volunteers. One mission — a stronger, kinder, greener Bharat.",
  },
};

const values = [
  {
    title: "Seva",
    desc: "Service above self. Every action we take is rooted in the belief that giving back is the highest form of gratitude.",
  },
  {
    title: "Sangathan",
    desc: "Strength in unity. We bring together people from every background, knowing that collective effort outlasts individual effort.",
  },
  {
    title: "Sustainability",
    desc: "Plant for the future. Our environmental programmes are designed not just to green the land, but to change mindsets.",
  },
  {
    title: "Integrity",
    desc: "Transparency in every rupee and every drop of blood. We are accountable to the communities we serve.",
  },
];

const timeline = [
  { year: "2014", title: "The First Step", desc: "A circle of college friends in Delhi decides to organise a small blood donation camp. 47 donors show up. The seed is planted." },
  { year: "2016", title: "Run for Sindhu", desc: "Inspired by a young girl's fight for education, the first marathon is organised. 300 runners raise enough to sponsor a full year of school for 120 children." },
  { year: "2018", title: "District Expansion", desc: "The Sangathan grows beyond the capital, setting up volunteer chapters in 6 neighbouring districts." },
  { year: "2020", title: "Pandemic Response", desc: "When COVID-19 hits, volunteers pivot to distribute ration kits, run plasma donation drives and set up oxygen langars." },
  { year: "2023", title: "1 Lakh Trees", desc: "Vriksh Bandhan crosses the milestone of 1,00,000 saplings planted across schools, panchayats and highways." },
  { year: "2024", title: "A Decade of Service", desc: "10 years, 240+ events, 3,000+ volunteers and over 1,20,000 lives touched. The journey continues." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-[0.97]" />
        <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_30%,oklch(0.82_0.16_95/0.35),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.18_50/0.3),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Our Story
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-4xl">
            A decade of taking one step forward — <span className="text-secondary">together.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            Born from a small circle of friends in 2014, Sarv Sewa Sashaktikaran Sangathan has grown into a network of 3,000+ volunteers across 12 districts. We believe sport, service and sustainability are the three roots of a confident society.
          </p>
        </div>
        <div className="relative h-16 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src={community}
              alt="Volunteers distributing supplies in a village"
              loading="lazy"
              width={1920}
              height={1080}
              className="rounded-3xl shadow-elegant ring-1 ring-border"
            />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-elegant hidden lg:block max-w-[16rem]">
              <div className="font-display text-3xl font-bold text-primary">10+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years of Service</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Why We Exist</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
              Mission & Vision
            </h2>
            <div className="mt-8 space-y-6 text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-foreground">Our Mission:</strong> To mobilise everyday citizens into volunteer-led action for health, education, environment and community welfare — creating a culture where service is a way of life, not an exception.
              </p>
              <p>
                <strong className="text-foreground">Our Vision:</strong> A Bharat where every district has a circle of neighbours who run together, plant together, donate together and celebrate together — proving that the smallest acts of kindness, repeated at scale, can transform a nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative">
        <div className="absolute inset-0 bg-band opacity-95" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 text-primary-foreground">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">What Guides Us</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">Our Core Values</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-7 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="font-display text-2xl font-bold text-secondary">{v.title}</div>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">The Journey</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">Milestones</h2>
        </div>
        <div className="mt-14 max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border lg:left-1/2 lg:-ml-px" />
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex flex-col lg:flex-row gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2 lg:text-right">
                <div className={`pl-12 lg:pl-0 ${i % 2 === 0 ? "lg:pr-12" : "lg:pr-0 lg:pl-12 lg:text-left"}`}>
                  <div className="font-display text-3xl font-bold text-primary">{item.year}</div>
                  <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="absolute left-4 top-1 lg:left-1/2 lg:-ml-2">
                <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-card shadow-elegant border border-border overflow-hidden">
          {[
            { n: "1,20,000+", l: "Lives Touched" },
            { n: "1 Lakh", l: "Trees Planted" },
            { n: "12,000+", l: "Blood Units Collected" },
            { n: "240+", l: "Events Hosted" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`p-8 text-center ${i !== 0 ? "lg:border-l border-border" : ""} ${i % 2 === 1 ? "border-l border-border lg:border-l" : ""}`}
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <div className="rounded-[2rem] bg-card border border-border shadow-elegant p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Join the Movement</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground max-w-2xl mx-auto">
              Be part of the next chapter.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Whether you run, plant, donate or simply show up — there is a place for you in this Sangathan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/#join"
                className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary/90 transition shadow-elegant"
              >
                Volunteer With Us
              </Link>
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
