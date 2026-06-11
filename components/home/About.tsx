import community from "@/public/community.jpg";
import Image from "next/image";

const About = () => {
    return (
        /* ABOUT BAND */
        <section id="about" className="relative">
            <div className="absolute inset-0 bg-band opacity-95" />
            <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center text-primary-foreground">
                <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold">Our Story</div>
                    <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">A decade of taking one step forward — together.</h2>
                    <p className="mt-5 text-white/90 leading-relaxed max-w-xl">
                        Born from a small circle of friends in 2014, Sarv Sewa Sashaktikaran Sangathan has grown into a network of 3,000+ volunteers across 12 districts. We believe sport, service and sustainability are the three roots of a confident society.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                        {[["3,000+", "Volunteers"], ["12", "Districts"], ["10 yrs", "Of Service"]].map(([n, l]) => (
                            <div key={l}>
                                <div className="font-display text-3xl font-bold text-secondary">{n}</div>
                                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <Image src={community} alt="Volunteers distributing supplies in a village" loading="lazy" width={1920} height={1080} className="rounded-3xl shadow-glow ring-1 ring-white/20" />
                </div>
            </div>
        </section>
    );
};

export default About;