import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Events from "@/components/home/Events";
import Initiatives from "@/components/home/Initiatives";
import About from "@/components/home/About";
import Join from "@/components/home/Join";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Sarv Sewa Sashktikarn Sangthan | NGO India — एक कदम मानवता की ओर",
  },
  description:
    "Sarv Sewa Sashktikarn Sangthan is a registered NGO in India empowering communities through education, sports, health, blood donation drives, women empowerment, and environmental initiatives.",
  keywords: [
    "NGO India",
    "Sarv Sewa Sashktikarn Sangthan",
    "Education NGO India",
    "Blood Donation NGO",
    "Women Empowerment India",
    "Run For Sindhu Marathon",
    "Operation Sindoor Cricket Cup",
    "Shiksha Sankalp",
    "SSSS NGO",
    "Donate to NGO India",
  ],
  openGraph: {
    title: "Sarv Sewa Sashktikarn Sangthan | NGO India — एक कदम मानवता की ओर",
    description:
      "Empowering communities through education, sports, health, and environmental initiatives across India. Join us in making a difference.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarv Sewa Sashktikarn Sangthan | NGO India",
    description:
      "Empowering communities through education, sports, health, and environmental initiatives across India.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Impact />
      <Events />
      <Initiatives />
      <About />
      <Join />
    </div>
  );
}
