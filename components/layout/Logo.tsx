import logo from '@/public/logo.png';

const Logo = () => {
    return (
        <a href="/" className="flex items-center gap-3">
            <img src={logo.src} alt="Sarv Sewa Sashaktikaran Sangathan logo" width={48} height={48} className="h-12 w-12 rounded-full ring-2 ring-primary/20" />
            <div className="leading-tight">
                <div className="font-display text-lg font-bold text-primary">Sarv Sewa Sashaktikaran</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Sangathan · Since 2014</div>
            </div>
        </a>
    );
};

export default Logo;