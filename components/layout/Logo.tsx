import logo from '@/public/logo.png';

const Logo = () => {
    return (
        <a href="/" className="flex items-center gap-3">
            <img src={logo.src} alt="Sarv Sewa Sashktikarn Sangthan logo" width={48} height={48} className="h-12 w-12 rounded-full ring-2 ring-primary/20" />
            <div className="leading-tight">
                <div className="font-display text-lg sm:text-xl font-bold text-primary tracking-tight">Sarv Sewa Sashktikarn Sangthan</div>
                <div className="text-xs font-semibold text-muted-foreground mt-0.5">एक कदम मानवता की ओर</div>
            </div>
        </a>
    );
};

export default Logo;