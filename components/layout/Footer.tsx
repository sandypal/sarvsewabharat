import logo from '@/public/logo.png';

const Footer = () => {
    return (
        <footer className="border-t border-border bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <img src={logo.src} alt="Sarv Sewa Sashaktikaran Sangathan logo" width={44} height={44} className="h-11 w-11 rounded-full ring-2 ring-secondary/40" />
                    <div className="leading-tight">
                        <div className="font-display font-bold">Sarv Sewa Sashaktikaran Sangathan</div>
                        <div className="text-xs text-white/70">एक कदम मानवता की ओर</div>
                    </div>
                </div>
                <p className="text-xs text-white/70">© {new Date().getFullYear()} SSSS · Registered Non-Profit · All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;