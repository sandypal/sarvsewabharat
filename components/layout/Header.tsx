"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type HeaderProps = {
    title?: string;
};

const Header = ({ title }: HeaderProps) => {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Initiatives", href: "/initiatives" },
        { name: "Events", href: "/events" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
            <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                <Logo />
                
                <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                        
                        return (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className={`relative py-1 transition-colors ${
                                    isActive 
                                        ? "text-primary font-bold" 
                                        : "text-foreground/70 hover:text-foreground"
                                }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-primary" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:inline-flex items-center text-sm font-bold text-foreground/80 hover:text-foreground transition">
                        Volunteer
                    </Link>
                    <Link href="/donate" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-bold hover:scale-105 transition-transform duration-300 shadow-elegant">
                        Donate
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;