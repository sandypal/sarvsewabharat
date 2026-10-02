"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryLightbox({ images }: { images: any[] }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="mt-16">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8">Event Gallery</h3>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((img: any, idx: number) => (
                    <div 
                        key={idx} 
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm cursor-pointer group bg-white/50"
                        onClick={() => setSelectedIndex(idx)}
                    >
                        <Image 
                            src={img} 
                            alt={`Gallery image ${idx + 1}`} 
                            fill 
                            className="object-cover group-hover:scale-105 transition duration-500" 
                            placeholder="blur" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-widest text-sm uppercase transition duration-300 drop-shadow-md">
                                View
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Overlay */}
            {selectedIndex !== null && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition p-2 bg-black/50 rounded-full"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <button 
                        className="absolute left-4 sm:left-10 text-white/70 hover:text-white hover:scale-110 transition p-3 bg-white/10 hover:bg-white/20 rounded-full"
                        onClick={handlePrev}
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>

                    <div 
                        className="relative w-full max-w-5xl aspect-[16/9] sm:aspect-auto sm:h-[80vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            src={images[selectedIndex]} 
                            alt={`Gallery fullscreen ${selectedIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <button 
                        className="absolute right-4 sm:right-10 text-white/70 hover:text-white hover:scale-110 transition p-3 bg-white/10 hover:bg-white/20 rounded-full"
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-medium text-sm tracking-widest">
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
}
