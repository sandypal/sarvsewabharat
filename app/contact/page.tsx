"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import BankInfoCard from "@/components/BankInfoCard";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://sarvsewabharat.org/api/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setSubmitted(true);
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-[0.97]" />
        <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_30%,oklch(0.82_0.16_95/0.35),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.18_50/0.3),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 text-primary-foreground text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/85 leading-relaxed">
            Have questions about our programs or want to get involved? We'd love
            to hear from you.
          </p>
        </div>
        <div className="relative h-16 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* CONTACT INFO */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-3xl font-bold mb-6">
              Get in Touch
            </h2>

            <Card className="border-border shadow-elegant">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-muted-foreground mt-1">
                      +91-90563-33759
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground mt-1">
                      info@sarvsewabharat.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-muted-foreground mt-1">
                      Sarv Sewa Sashktikarn Sangthan
                      <br />
                      House No- 708, Street No 18, Ambedkar Nagar,
                      <br />
                      Giaspura, Ludhiana - 141016,
                      <br />
                      Punjab, India
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border">
                  <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="https://twitter.com/sarvsewa4bharat" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/sarvsewa4bharat/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href="https://www.facebook.com/SarvSewaSashaktikaranSangathan" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-3">
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out. We have received your message
                      and will respond to you shortly.
                    </p>
                    <div className="mt-8">
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                          });
                        }}
                        variant="outline"
                        className="rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
                        {error}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91-90563-33759"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        required
                        className="min-h-[150px]"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>
                    <Button
                      disabled={isLoading}
                      type="submit"
                      className="w-full h-12 rounded-full text-base font-semibold shadow-elegant"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* DONATION INFO ROW */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold">Support Our Cause</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Your contributions help us expand our reach and make a bigger impact. You can donate via bank transfer or by scanning the UPI QR code below.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <BankInfoCard />

            <Card className="border-border shadow-elegant h-full">
              <CardHeader className="pb-3 text-center">
                <CardTitle className="font-display text-2xl">Scan to Donate</CardTitle>
                <CardDescription>Scan via any UPI app</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center pb-8 pt-4">
                <div className="bg-white p-4 rounded-3xl w-64 h-64 flex items-center justify-center overflow-hidden border border-border shadow-sm">
                  <img src="/qr-code.jpg.png" alt="Payment QR Code" className="w-full h-full object-contain" />
                </div>
                <Button 
                  onClick={handleShareQR}
                  variant="outline" 
                  className="mt-6 rounded-full w-full max-w-[200px]"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share QR Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
