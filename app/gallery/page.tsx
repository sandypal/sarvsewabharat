"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryData, galleryCategories, Album } from "@/lib/gallery-data";
import { Search, MapPin, Calendar, Users, X, ChevronLeft, ChevronRight, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function AlbumLightbox({ album, onClose }: { album: Album; onClose: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % album.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + album.images.length) % album.images.length);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: album.title,
                text: album.description,
                url: window.location.href,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 lg:top-6 lg:right-6 z-[60] p-2 bg-background hover:bg-muted text-foreground rounded-full transition shadow-md border border-border"
            >
                <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col lg:flex-row w-full h-full">
                {/* Image Section */}
                <div className="relative flex-1 flex items-center justify-center p-4 lg:p-10" onClick={(e) => e.stopPropagation()}>
                    {album.images.length > 1 && (
                        <button 
                            onClick={prevImage}
                            className="absolute left-4 lg:left-8 z-20 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition hover:scale-110"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                    )}

                    <div className="relative w-full h-full max-h-[70vh] lg:max-h-full">
                        <Image 
                            src={album.images[currentIndex]} 
                            alt={`${album.title} - Image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {album.images.length > 1 && (
                        <button 
                            onClick={nextImage}
                            className="absolute right-4 lg:right-8 z-20 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition hover:scale-110"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    )}

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium tracking-widest backdrop-blur-md">
                        {currentIndex + 1} / {album.images.length}
                    </div>
                </div>

                {/* Info Section */}
                <div className="w-full lg:w-[450px] bg-background flex flex-col shrink-0 h-[40vh] lg:h-full overflow-y-auto">
                    <div className="p-8 lg:p-10 flex-1">
                        <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
                            {album.category}
                        </div>
                        
                        <h2 className="font-display text-3xl font-bold text-foreground mb-4">{album.title}</h2>
                        
                        <div className="space-y-4 mb-8 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 text-primary" /> {album.date}
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-primary" /> {album.location}
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="h-4 w-4 text-primary" /> {album.volunteerCount} Volunteers
                            </div>
                        </div>

                        <div className="w-full h-px bg-border mb-8" />
                        
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            {album.description}
                        </p>
                    </div>

                    <div className="p-8 lg:p-10 border-t border-border bg-muted/20">
                        <Button 
                            onClick={handleShare}
                            className="w-full rounded-full h-12 font-bold shadow-sm gap-2"
                        >
                            <Share2 className="h-4 w-4" /> Share This Impact
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    const featuredAlbum = galleryData[0];
    
    const filteredAlbums = galleryData.filter(album => {
        const matchesCategory = activeFilter === "All" || album.category === activeFilter;
        const matchesSearch = album.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              album.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch && album.id !== featuredAlbum.id;
    });

    return (
        <div className="min-h-screen bg-background pb-20">
            {selectedAlbum && (
                <AlbumLightbox album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
            )}

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
                        Moments That <span className="text-primary">Create Change</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        From small acts to big impact — explore the people, moments, and movements behind our work.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="rounded-full h-14 px-8 text-lg font-bold shadow-elegant group">
                            Explore Our Work
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="rounded-full h-14 px-8 text-lg font-bold border-2">
                            Join the Movement
                        </Button>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 space-y-24">
                
                {/* FEATURED ACTIVITY */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-border flex-1" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Latest Campaign</span>
                        <div className="h-px bg-border flex-1" />
                    </div>

                    <div className="group relative rounded-[2.5rem] overflow-hidden bg-card border border-border shadow-2xl flex flex-col lg:flex-row cursor-pointer transition hover:border-primary/30" onClick={() => setSelectedAlbum(featuredAlbum)}>
                        <div className="relative w-full lg:w-3/5 aspect-[4/3] lg:aspect-auto overflow-hidden">
                            <Image 
                                src={featuredAlbum.coverImage} 
                                alt={featuredAlbum.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 lg:hidden" />
                        </div>
                        
                        <div className="w-full lg:w-2/5 p-8 lg:p-14 flex flex-col justify-center bg-card relative z-10">
                            <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                                {featuredAlbum.category}
                            </div>
                            <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                {featuredAlbum.title}
                            </h3>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed line-clamp-3">
                                {featuredAlbum.description}
                            </p>
                            
                            <div className="space-y-3 mb-10 text-sm font-semibold text-foreground/80">
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-primary" /> {featuredAlbum.date}
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-primary" /> {featuredAlbum.location}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="h-4 w-4 text-primary" /> {featuredAlbum.volunteerCount} Volunteers
                                </div>
                            </div>

                            <Button className="w-full sm:w-auto rounded-full h-12 font-bold shadow-sm mt-auto">
                                View Full Album
                            </Button>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE GALLERY */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                        <h3 className="font-display text-3xl font-bold">Activity Wall</h3>
                        
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input 
                                type="text" 
                                placeholder="Search activities..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex overflow-x-auto pb-4 mb-8 -mx-6 px-6 sm:mx-0 sm:px-0 gap-2 scrollbar-hide">
                        {galleryCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                                    activeFilter === cat 
                                        ? "bg-foreground text-background shadow-md" 
                                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    {filteredAlbums.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredAlbums.map((album) => (
                                <div 
                                    key={album.id} 
                                    onClick={() => setSelectedAlbum(album)}
                                    className="group cursor-pointer rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image 
                                            src={album.coverImage} 
                                            alt={album.title} 
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                View Album
                                            </span>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                            {album.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{album.title}</h4>
                                        <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {album.date}</span>
                                            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {album.location}</span>
                                        </div>
                                        <p className="text-sm text-foreground/70 line-clamp-2 leading-relaxed">
                                            {album.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center bg-muted/30 rounded-3xl border border-dashed border-border">
                            <div className="h-16 w-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                                <Search className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <h3 className="font-display text-xl font-bold mb-2">No activities found</h3>
                            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                            <Button 
                                variant="outline" 
                                className="mt-6 rounded-full font-bold"
                                onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </section>

                {/* YOUTH FOCUSED CTA */}
                <section className="relative rounded-[3rem] overflow-hidden bg-primary text-primary-foreground py-20 px-6 text-center">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-sm shadow-sm border border-white/10">
                            Make an impact
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                            You Could Be In The Next One.
                        </h2>
                        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                            Real change happens when people show up. Join our next activity, meet new people, and be part of something genuinely meaningful.
                        </p>
                        <Link href="/contact">
                            <Button className="rounded-full h-14 px-10 text-lg font-bold bg-background text-foreground hover:bg-background/90 shadow-xl hover:scale-105 transition-transform duration-300">
                                Become a Volunteer
                            </Button>
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
}
