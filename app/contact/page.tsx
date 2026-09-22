"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up backend
    setSubmitted(true);
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
            Have questions about our programs or want to get involved? We'd love to hear from you.
          </p>
        </div>
        <div className="relative h-16 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* CONTACT INFO */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-3xl font-bold mb-6">Get in Touch</h2>
            
            <Card className="border-border shadow-elegant">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-muted-foreground mt-1">+91-90563-33759</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground mt-1">info@sarvsewabharat.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-muted-foreground mt-1">
                      Sarv Sewa Sashaktikaran Sangathan<br />
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-3">
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Message Sent!</h3>
                    <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out. We have received your message and will respond to you shortly.
                    </p>
                    <div className="mt-8">
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91-90563-33759"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 rounded-full text-base font-semibold shadow-elegant">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
        </div>
      </section>
    </div>
  );
}
