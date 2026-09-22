import logo from '@/public/logo.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="border-t border-border bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 lg:pb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo.src} alt="Sarv Sewa Sashaktikaran Sangathan logo" width={44} height={44} className="h-11 w-11 rounded-full ring-2 ring-secondary/40" />
                            <div className="leading-tight">
                                <div className="font-display font-bold text-lg">Sarv Sewa Sashaktikaran Sangathan</div>
                                <div className="text-sm text-white/70">एक कदम मानवता की ओर</div>
                            </div>
                        </div>
                        <p className="text-white/80 max-w-sm mb-6">
                            Dedicated to empowering communities through education, sports, health, and environmental initiatives across India.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 font-display">Quick Links</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li><Link href="/" className="hover:text-white hover:underline transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white hover:underline transition">About Us</Link></li>
                            <li><Link href="/events" className="hover:text-white hover:underline transition">Events</Link></li>
                            <li><Link href="/contact" className="hover:text-white hover:underline transition">Contact Us</Link></li>
                            <li><Link href="/donate" className="hover:text-white hover:underline transition font-semibold text-secondary">Donate</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 font-display">Legal</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li><Link href="/terms" className="hover:text-white hover:underline transition">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-white hover:underline transition">Privacy Policy</Link></li>
                            <li><Link href="/refund" className="hover:text-white hover:underline transition">Refund & Cancellation Policy</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-white/70">
                    <p>© {new Date().getFullYear()} SSSS · Registered Non-Profit</p>
                    <p className="text-xs opacity-80">
                        Website designed, developed and maintained by{' '}
                        <a href="https://hiresandeep.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline font-medium">
                            Icodehub Technologies
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;