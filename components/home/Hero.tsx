"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 4,
    videoId: "kJ2vDGu_nh8",
    alt: "Sarv Sewa Sashktikarn Sangthan Video",
  },
  {
    id: 1,
    image: "/slide_01.webp",
    alt: "Run for Sindhu Marathon 4.0 with community runners",
  },
  {
    id: 2,
    image: "/slide_02.webp",
    alt: "Global Youth Meet bringing young people together",
  },
  {
    id: 3,
    image: "/slide_03.webp",
    alt: "Sansad Darshan Yatra and the Parliament of India",
  },
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
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[100svh] lg:min-h-[600px] overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          {slide.videoId ? (
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&mute=1&loop=1&playlist=${slide.videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                title={slide.alt}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[100vw] lg:h-[56.25vw] lg:min-h-[100vh] lg:min-w-[177.77vh]"
              />
            </div>
          ) : (
            <Image
              src={slide.image!}
              alt={slide.alt}
              fill
              className="object-cover object-left sm:object-center"
              priority={index === 0}
            />
          )}
          <Link
            href="/donate"
            tabIndex={index === currentSlide ? 0 : -1}
            className="absolute bottom-6 lg:bottom-10 left-1/2 z-20 inline-flex -translate-x-1/2 items-center rounded-full bg-secondary px-5 py-2.5 text-sm lg:px-8 lg:py-4 lg:text-base font-bold text-secondary-foreground shadow-glow transition hover:scale-105 whitespace-nowrap"
          >
            Donate Now
          </Link>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-20 lg:bottom-10 right-6 lg:right-10 flex items-center gap-4 z-20">
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
          className="p-2 lg:p-4 rounded-full bg-black/40 text-white backdrop-blur border border-white/20 hover:bg-white/20 hover:scale-110 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 lg:p-4 rounded-full bg-black/40 text-white backdrop-blur border border-white/20 hover:bg-white/20 hover:scale-110 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
