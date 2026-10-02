"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import community from "@/public/community.jpg";
import blood from "@/public/blood.jpg";
import shikshaGal1 from "@/public/shiksha-gal-1.jpg";
import marathon from "@/public/marathon.jpg";

const slides = [
    {
        id: 1,
        image: community,
        tag: "Ek Kadam Manavta Ki Or",
        headline: "Empowering Lives,\nBuilding the Nation.",
        subtitle: "Join our movement to bring education, health, and empowerment to every corner of society. Service is the seed. Society is the shade.",
        primaryCTA: "Become a Volunteer",
        primaryLink: "/contact",
        secondaryCTA: "Explore Our Work",
        secondaryLink: "/gallery",
    },
    {
        id: 2,
        image: shikshaGal1,
        tag: "Shiksha Sankalp",
        headline: "One Lakh Students,\nOne Lakh Smiles.",
        subtitle: "Removing financial barriers so every deserving child can continue their education with dignity and confidence.",
        primaryCTA: "Donate for Education",
        primaryLink: "/donate?cause=shiksha-sankalp",
        secondaryCTA: "Learn More",
        secondaryLink: "/initiatives/shiksha-sankalp",
    },
    {
        id: 3,
        image: blood,
        tag: "Mega Blood Donation Camp",
        headline: "Donate Blood.\nSave a Life Today.",
        subtitle: "A responsive network connecting voluntary blood donors with patients in urgent critical need.",
        primaryCTA: "Join the Donor Network",
        primaryLink: "/contact",
        secondaryCTA: "View Initiative",
        secondaryLink: "/initiatives/sarv-sewa-life-savers",
    },
    {
        id: 4,
        image: marathon,
        tag: "Grassroots Action",
        headline: "Driving Change\nfrom the Ground Up.",
        subtitle: "From rural sports tournaments to environmental cleanliness drives, we believe in the power of community action.",
        primaryCTA: "View Gallery",
        primaryLink: "/gallery",
        secondaryCTA: "View Campaigns",
        secondaryLink: "/events/run-for-sindhu",
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-black">
            
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                >
                    <Image 
                        src={slide.image} 
                        alt={slide.headline}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>
            ))}

            {/* Slider Content */}
            <div className="relative mx-auto max-w-7xl px-6 h-full flex flex-col justify-center">
                <div className="max-w-3xl mt-20">
                    {slides.map((slide, index) => (
                        <div 
                            key={`content-${slide.id}`}
                            className={`transition-all duration-700 ease-out absolute ${index === currentSlide ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-8 invisible absolute z-0"}`}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-white/25 text-white mb-6">
                                <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {slide.tag}
                            </span>
                            
                            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white whitespace-pre-line drop-shadow-md">
                                {slide.headline}
                            </h1>
                            
                            <p className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed drop-shadow">
                                {slide.subtitle}
                            </p>
                            
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link 
                                    href={slide.primaryLink} 
                                    className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-8 py-4 font-bold hover:scale-105 transition shadow-glow text-base"
                                >
                                    {slide.primaryCTA}
                                </Link>
                                <Link 
                                    href={slide.secondaryLink} 
                                    className="inline-flex items-center rounded-full bg-black/40 text-white backdrop-blur border border-white/30 px-8 py-4 font-bold hover:bg-white/20 transition text-base"
                                >
                                    {slide.secondaryCTA}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-10 right-6 lg:right-10 flex items-center gap-4 z-20">
                <div className="flex gap-2 mr-6 hidden sm:flex">
                    {slides.map((_, idx) => (
                        <button 
                            key={`dot-${idx}`}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/40 hover:bg-white/70"}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
                
                <button 
                    onClick={prevSlide}
                    className="p-3 lg:p-4 rounded-full bg-black/40 text-white backdrop-blur border border-white/20 hover:bg-white/20 hover:scale-110 transition"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                    onClick={nextSlide}
                    className="p-3 lg:p-4 rounded-full bg-black/40 text-white backdrop-blur border border-white/20 hover:bg-white/20 hover:scale-110 transition"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>
        </section>
    );
};

export default Hero;