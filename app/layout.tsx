import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DisableCopyRightClick } from "@/components/DisableCopyRightClick";

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
    default: "Sarv Sewa Sashktikarn Sangthan | NGO in India",
    template: "%s | Sarv Sewa Sashktikarn Sangthan",
  },
  description: "Sarv Sewa Sashktikarn Sangthan is a leading NGO in India dedicated to education, sports, health, and environmental initiatives. Join us in making a difference.",
  keywords: [
    "NGO India",
    "Education NGO",
    "Blood Donation India",
    "Tree Plantation NGO",
    "Women Empowerment",
    "Sarv Sewa Sashktikarn Sangthan",
    "SSSS NGO"
  ],
  authors: [{ name: "Sarv Sewa Sashktikarn Sangthan" }],
  creator: "Sarv Sewa Sashktikarn Sangthan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sarvsewabharat.org",
    siteName: "Sarv Sewa Sashktikarn Sangthan",
    title: "Sarv Sewa Sashktikarn Sangthan | NGO in India",
    description: "Dedicated to empowering communities through education, sports, health, and environmental initiatives across India.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Sarv Sewa Sashktikarn Sangthan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarv Sewa Sashktikarn Sangthan | NGO in India",
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
        <Header title="Sarv Sewa Sashktikarn Sangthan" />
        {children}
        <Footer />
        <DisableCopyRightClick />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NC52FS996Y"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NC52FS996Y');
            `,
          }}
        />
      </body>
    </html>
  );
}
