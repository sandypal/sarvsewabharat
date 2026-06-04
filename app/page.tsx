import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Events from "@/components/home/Events";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Impact />
      <Events />
    </div>
  );
}
