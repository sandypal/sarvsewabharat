"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

type HeaderProps = {
    title?: string;
};

const Header = ({ title }: HeaderProps) => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { 
            name: "About", 
            href: "/about",
            submenu: [
                { name: "Founder's Message", href: "/founders-message" }
            ]
        },
        { name: "Initiatives", href: "/initiatives" },
        { name: "Events", href: "/events" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
                <Logo />
                
                <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href)) || link.submenu?.some(sub => pathname === sub.href);
                        
                        if (link.submenu) {
                            return (
                                <div key={link.name} className="relative group py-1">
                                    <Link 
                                        href={link.href} 
                                        className={`transition-colors flex items-center gap-1 ${
                                            isActive 
                                                ? "text-primary font-bold" 
                                                : "text-foreground/70 hover:text-foreground"
                                        }`}
                                    >
                                        {link.name}
                                        <ChevronDown className="h-4 w-4" />
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-primary" />
                                        )}
                                    </Link>
                                    <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                                        {link.submenu.map((subItem) => (
                                            <Link 
                                                key={subItem.name} 
                                                href={subItem.href}
                                                className="px-4 py-2 hover:bg-muted text-foreground/80 hover:text-primary transition-colors"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

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

                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <Link href="/contact" className="hidden sm:inline-flex items-center text-sm font-bold text-foreground/80 hover:text-foreground transition">
                        Volunteer
                    </Link>
                    <Link href="/donate" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs sm:px-6 sm:py-2.5 sm:text-sm font-bold hover:scale-105 transition-transform duration-300 shadow-elegant">
                        Donate
                    </Link>
                    <button 
                        className="lg:hidden p-1.5 sm:p-2 text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border/60 flex flex-col px-6 py-6 gap-5 shadow-2xl">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href)) || link.submenu?.some(sub => pathname === sub.href);
                        return (
                            <div key={link.name} className="flex flex-col gap-3">
                                <Link 
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-base font-semibold flex items-center justify-between ${isActive ? "text-primary" : "text-foreground/80"}`}
                                >
                                    {link.name}
                                    {link.submenu && <ChevronDown className="h-4 w-4" />}
                                </Link>
                                {link.submenu && (
                                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-border/40 ml-1">
                                        {link.submenu.map(subItem => {
                                            const isSubActive = pathname === subItem.href;
                                            return (
                                                <Link 
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`text-sm font-medium ${isSubActive ? "text-primary" : "text-foreground/60"}`}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <div className="mt-2 pt-5 border-t border-border/20 flex flex-col gap-4 sm:hidden">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-foreground/80">
                            Volunteer
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;