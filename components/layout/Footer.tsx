"use client";

import logo from "@/public/logo.png";
import Link from "next/link";
import { Share2 } from "lucide-react";

const Footer = () => {
  const handleShareQR = async () => {
    try {
      const response = await fetch('/qr-code.jpg.png');
      const blob = await response.blob();
      const file = new File([blob], 'sarvsewa-donate-qr.png', { type: blob.type });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Donate to Sarv Sewa Sashktikarn Sangthan',
          text: 'Scan this QR code to donate and support our initiatives.',
          files: [file],
        });
      } else if (navigator.share) {
        await navigator.share({
          title: 'Donate to Sarv Sewa Sashktikarn Sangthan',
          text: 'Scan this QR code to donate and support our initiatives.',
          url: window.location.origin + '/qr-code.jpg.png',
        });
      } else {
        alert("Sharing is not supported on your browser.");
      }
    } catch (error) {
      console.error("Error sharing QR code:", error);
    }
  };

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 pb-12 lg:pb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo.src}
                alt="Sarv Sewa Sashktikarn Sangthan logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full ring-2 ring-secondary/40"
              />
              <div className="leading-tight">
                <div className="font-display font-bold text-lg">
                  Sarv Sewa Sashktikarn Sangthan
                </div>
                <div className="text-sm text-white/70">एक कदम मानवता की ओर</div>
              </div>
            </div>
            <p className="text-white/80 max-w-sm mb-4">
              Dedicated to empowering communities through education, sports,
              health, and environmental initiatives across India.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              House No- 708, Street No 18, Ambedkar Nagar,
              <br />
              Giaspura, Ludhiana - 141016, Punjab, India
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/sarvsewa4bharat" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://www.instagram.com/sarvsewa4bharat/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/SarvSewaSashaktikaranSangathan" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Quick Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:underline transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white hover:underline transition"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:underline transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-white hover:underline transition font-semibold text-secondary"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Legal</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white hover:underline transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white hover:underline transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-white hover:underline transition"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Scan to Donate</h4>
            <div className="bg-white p-3 rounded-2xl w-40 h-40 flex items-center justify-center overflow-hidden mb-3">
              <img src="/qr-code.jpg.png" alt="Payment QR Code" className="w-full h-full object-contain" />
            </div>
            <button 
              onClick={handleShareQR}
              className="flex items-center justify-center w-40 py-2 text-sm font-medium rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <Share2 className="mr-2 h-4 w-4" /> Share QR
            </button>
            <p className="text-white/70 text-xs mt-3 text-center w-40">Scan via any UPI app</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-white/70">
          <p>© {new Date().getFullYear()} SSSS · Registered Non-Profit</p>
          <p className="text-xs opacity-80">
            Website designed, developed and maintained by{" "}
            <a
              href="https://hiresandeep.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline font-medium"
            >
              Icodehub Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
