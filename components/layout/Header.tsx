import Logo from "./Logo";

type HeaderProps = {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
            <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                <Logo />
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
                    <a href="/events" className="hover:text-primary transition">Events</a>
                    <a href="#impact" className="hover:text-primary transition">Impact</a>
                    <a href="#about" className="hover:text-primary transition">About</a>
                    <a href="#join" className="hover:text-primary transition">Volunteer</a>
                </nav>
                <a href="#donate" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition shadow-elegant">
                    Donate
                </a>
            </div>
        </header>
    );
};

export default Header;