import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarvsewabharat.org"),
  title: {
    default: "Sarv Sewa Sashaktikaran Sangathan | NGO in India",
    template: "%s | Sarv Sewa Sashaktikaran Sangathan",
  },
  description: "Sarv Sewa Sashaktikaran Sangathan is a leading NGO in India dedicated to education, sports, health, and environmental initiatives. Join us in making a difference.",
  keywords: [
    "NGO India",
    "Education NGO",
    "Blood Donation India",
    "Tree Plantation NGO",
    "Women Empowerment",
    "Sarv Sewa Sashaktikaran Sangathan",
    "SSSS NGO"
  ],
  authors: [{ name: "Sarv Sewa Sashaktikaran Sangathan" }],
  creator: "Sarv Sewa Sashaktikaran Sangathan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sarvsewabharat.org",
    siteName: "Sarv Sewa Sashaktikaran Sangathan",
    title: "Sarv Sewa Sashaktikaran Sangathan | NGO in India",
    description: "Dedicated to empowering communities through education, sports, health, and environmental initiatives across India.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Sarv Sewa Sashaktikaran Sangathan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarv Sewa Sashaktikaran Sangathan | NGO in India",
    description: "Dedicated to empowering communities through education, sports, health, and environmental initiatives across India.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header title="Sarv Sewa Sashaktikaran Sangathan" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
