import logo from '@/public/logo.png';

const Logo = () => {
    return (
        <a href="/" className="flex items-center gap-2 sm:gap-3">
            <img src={logo.src} alt="Sarv Sewa Sashktikarn Sangthan logo" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full ring-2 ring-primary/20" />
            <div className="leading-tight">
                <div className="font-display text-xs sm:text-xl font-bold text-primary tracking-tight leading-[1.15] max-w-[160px] sm:max-w-none">Sarv Sewa Sashktikarn Sangthan</div>
                <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground mt-0.5">एक कदम मानवता की ओर</div>
            </div>
        </a>
    );
};

export default Logo;