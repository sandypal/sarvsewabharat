import logo from '@/public/logo.png';

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-hero opacity-[0.97]" />
            <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_30%,oklch(0.82_0.16_95/0.35),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.18_50/0.3),transparent_50%)]" />
            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
                <div className="text-primary-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-white/25">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Ek Kadam Manavta Ki Or
                    </span>
                    <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
                        Service is the seed.<br />
                        <span className="text-secondary">Society is the shade.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
                        We are a volunteer-led movement organising marathons, cricket tournaments, blood donation camps and tree plantation drives — turning everyday people into a force for change.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <a href="#events" className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold hover:translate-y-[-2px] transition shadow-glow">
                            Explore Our Events
                        </a>
                        <a href="#join" className="inline-flex items-center rounded-full bg-white/10 text-white ring-1 ring-white/30 px-7 py-3.5 font-semibold hover:bg-white/20 transition">
                            Become a Volunteer
                        </a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full" />
                    <img src={logo.src} alt="" width={520} height={520} className="relative w-[78%] max-w-[460px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]" />
                </div>
            </div>
            <div className="relative h-16 bg-gradient-to-b from-transparent to-background" />
        </section>
    );
};

export default Hero;