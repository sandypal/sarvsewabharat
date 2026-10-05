const fs = require('fs');

let content = fs.readFileSync('app/events/page.tsx', 'utf8');

const eventCardComponent = `
function EventCard({ event }: { event: any }) {
  return (
    <article className="group relative rounded-3xl bg-card border border-border shadow-elegant overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
      <div className="aspect-[16/10] overflow-hidden relative shrink-0">
        <Image
          src={event.img}
          alt={event.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
        />
      </div>
      <div className="p-7 lg:p-8 flex flex-col grow">
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

        <div className="mt-auto pt-6">
          <Link
            href={\`/events/\${event.slug}\`}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition shadow-elegant"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
`;

content = content.replace(/\{\/\* EVENTS GRID \*\/\}[\s\S]*?\{\/\* CTA \*\/\}/, `
      {/* EVENTS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground border-b pb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {eventsList.filter(e => e.date.includes("2026")).map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground border-b pb-4">Past Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsList.filter(e => !e.date.includes("2026")).map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

      {/* CTA */}`);

content += eventCardComponent;

fs.writeFileSync('app/events/page.tsx', content);
