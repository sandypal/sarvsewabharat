const Join = () => {
    return (
        <section id="join" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="rounded-[2rem] bg-card border border-border shadow-elegant p-10 lg:p-16 text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative">
                    <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Join the Movement</div>
                    <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground max-w-2xl mx-auto">
                        Lend your hands. Lift a community.
                    </h2>
                    <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                        Volunteer at the next event, sponsor a sapling, or donate to keep our camps running. Every small act compounds.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <a href="#donate" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary/90 transition shadow-elegant">
                            Donate Now
                        </a>
                        <a href="#" className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition">
                            Volunteer With Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Join;