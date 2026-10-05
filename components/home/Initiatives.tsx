import { initiativesList } from "@/lib/events-data";
import Link from "next/link";
import Image from "next/image";

const initiatives = initiativesList.map((e) => ({
    slug: e.slug,
    title: e.title,
    tag: e.tag,
    date: e.date.split("·")[0].trim().split(",")[0],
    img: e.img,
    copy: e.description[0],
}));


const Initiatives = () => {
    return (

        <section id="initiatives" className="mx-auto max-w-7xl px-6 py-24 lg:py-32 bg-secondary/5 rounded-3xl mb-24" >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Our Programs</div>
                    <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground max-w-2xl">
                        Initiatives that make a lasting impact.
                    </h2>
                </div>
                <p className="max-w-md text-muted-foreground">
                    From the community classrooms of <em>Shiksha Sankalp</em> to women empowerment via <em>Shakti Sankalp</em>, our ongoing causes need your support.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {initiatives.map((e) => (
                    <article key={e.title} className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-elegant hover:-translate-y-1 transition-all duration-500">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image src={e.img} alt={e.title} loading="lazy" width={1280} height={832} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                            <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                                {e.tag}
                            </span>
                            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-primary-foreground">
                                <h3 className="font-display text-2xl font-bold leading-tight">{e.title}</h3>
                                <span className="text-xs font-medium opacity-90">{e.date}</span>
                            </div>
                        </div>
                        <div className="p-7">
                            <p className="text-foreground/75 leading-relaxed">{e.copy}</p>
                            <Link href={`/initiatives/${e.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all">
                                View initiative details
                                <span aria-hidden>→</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section >
    );
};

export default Initiatives;