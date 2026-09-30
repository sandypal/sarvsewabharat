"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Heart, CheckCircle, IndianRupee, ShieldCheck, ArrowRight, Building2, MapPin, Mail, Phone } from "lucide-react";

const presets = [500, 1000, 2500, 5000, 10000];
const causes = [
    { value: "run-for-sindhu", label: "Run For Sindhu Marathon" },
    { value: "operation-sindoor", label: "Operation Sindoor Cricket Cup" },
    { value: "shiksha-sankalp", label: "Shiksha Sankalp (One Lac Students One Lac Smiles)" },
    { value: "ssss-blood-donation", label: "SSSS Blood Donation Movement" },
    { value: "shakti-sankalp", label: "Shakti Sankalp (Women Empowerment & Skill Develoment)" },
    { value: "sansad-darshan-yatra", label: "Sansad Darshan Yatra" },
];

const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

function DonateFormContent() {
    const searchParams = useSearchParams();
    const causeParam = searchParams.get("cause");

    const [amount, setAmount] = useState<number | "custom">(1000);
    const [customAmount, setCustomAmount] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pan: "",
        city: "",
        state: "",
        cause: causeParam || "run-for-sindhu",
        message: "",
    });

    useEffect(() => {
        if (causeParam) {
            setFormData(prev => ({ ...prev, cause: causeParam }));
        }
    }, [causeParam]);

    const finalAmount = amount === "custom" ? Number(customAmount) || 0 : amount;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const apiUrl = "https://sarvsewabharat.org/api/api/payment/initiate";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    pan: formData.pan,
                    city: formData.city,
                    state: formData.state,
                    cause: formData.cause,
                    message: formData.message,
                    amount: finalAmount
                }),
            });

            const data = await response.json();

            if (data.status === "success" && data.payment_url) {
                window.location.href = data.payment_url;
            } else {
                console.error("Initiation Failed", data);
                alert("Payment initiation failed. Please try again. " + (data.message || ""));
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Payment Error:", error);
            alert("Unable to connect to the payment server. Is MAMP running?");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            {/* HERO */}
            <section className="relative overflow-hidden bg-primary pt-24 pb-48 lg:pt-32 lg:pb-56">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="relative mx-auto max-w-6xl px-6 text-center z-10 text-primary-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] shadow-sm mb-6">
                        <Heart className="h-3.5 w-3.5" /> Support Our Mission
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] max-w-4xl mx-auto">
                        Your generosity is the root of every good thing we do.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/85 leading-relaxed font-medium">
                        Every rupee you donate becomes a sapling, a blood unit, a scholarship, or a meal for someone in need.
                    </p>
                </div>
            </section>

            {/* FORM CONTAINER - Floating up into Hero */}
            <section className="mx-auto max-w-6xl px-6 relative z-20 -mt-32 lg:-mt-40">
                <div className="rounded-[2.5rem] bg-card border border-border shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    
                    {/* LEFT SIDE: FORM */}
                    <div className="flex-1 p-8 lg:p-14 bg-card">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <CheckCircle className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="font-display text-3xl font-bold text-foreground">Thank you, {formData.name || "friend"}!</h3>
                                <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
                                    We have received your pledge of <span className="font-bold text-foreground">₹{finalAmount.toLocaleString("en-IN")}</span>. Our team will contact you shortly at {formData.email || "the provided contact"}.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ name: "", email: "", phone: "", pan: "", city: "", state: "", cause: "run-for-sindhu", message: "" });
                                            setAmount(1000);
                                            setCustomAmount("");
                                        }}
                                        className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-bold hover:bg-primary/90 transition shadow-elegant"
                                    >
                                        Donate Again
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                
                                {/* TAX BENEFITS HORIZONTAL CARDS */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-muted/30 rounded-xl p-4 border border-border/50 flex flex-col gap-2 shadow-sm">
                                        <div className="h-6 w-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="text-xs font-semibold leading-relaxed">
                                            Eligible for <strong className="text-foreground">80G tax exemption</strong>
                                        </div>
                                    </div>
                                    <div className="bg-muted/30 rounded-xl p-4 border border-border/50 flex flex-col gap-2 shadow-sm">
                                        <div className="h-6 w-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="text-xs font-semibold leading-relaxed">
                                            <strong className="text-foreground">100%</strong> supports your chosen cause
                                        </div>
                                    </div>
                                    <div className="bg-muted/30 rounded-xl p-4 border border-border/50 flex flex-col gap-2 shadow-sm">
                                        <div className="h-6 w-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="text-xs font-semibold leading-relaxed">
                                            Digital receipt sent instantly
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b pb-4">
                                        <h2 className="font-display text-2xl font-bold">1. Select Amount</h2>
                                    </div>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                        {presets.map((p) => (
                                            <button
                                                key={p}
                                                type="button"
                                                onClick={() => setAmount(p)}
                                                className={`rounded-2xl border-2 px-2 py-4 text-sm font-bold transition-all duration-300 ${amount === p
                                                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]"
                                                    : "bg-background border-border text-foreground hover:border-primary/40 hover:bg-muted/50"
                                                    }`}
                                            >
                                                ₹{p.toLocaleString("en-IN")}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setAmount("custom")}
                                            className={`shrink-0 rounded-2xl border-2 px-6 py-4 text-sm font-bold transition-all duration-300 ${amount === "custom"
                                                ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]"
                                                : "bg-background border-border text-foreground hover:border-primary/40 hover:bg-muted/50"
                                                }`}
                                        >
                                            Custom
                                        </button>
                                        <div className={`relative flex-1 max-w-[20rem] transition-all duration-500 overflow-hidden ${amount === "custom" ? "opacity-100 max-w-[20rem]" : "opacity-0 max-w-0"}`}>
                                            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <Input
                                                type="number"
                                                min={1}
                                                required={amount === "custom"}
                                                placeholder="Enter amount"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                className="pl-11 h-14 rounded-2xl text-lg font-bold bg-background border-2 focus-visible:ring-primary/20"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b pb-4">
                                        <h2 className="font-display text-2xl font-bold">2. Your Details</h2>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-muted-foreground font-semibold">Full name</Label>
                                            <Input
                                                id="name"
                                                required
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="h-12 bg-muted/30 border-border/60 focus-visible:border-primary focus-visible:ring-primary/20 shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-muted-foreground font-semibold">Email address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="h-12 bg-muted/30 border-border/60 focus-visible:border-primary focus-visible:ring-primary/20 shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-muted-foreground font-semibold">Phone number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="h-12 bg-muted/30 border-border/60 focus-visible:border-primary focus-visible:ring-primary/20 shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pan" className="text-muted-foreground font-semibold">PAN number (for 80G)</Label>
                                            <Input
                                                id="pan"
                                                placeholder="ABCDE1234F"
                                                value={formData.pan}
                                                onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                                                className="h-12 bg-muted/30 border-border/60 focus-visible:border-primary focus-visible:ring-primary/20 uppercase shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="city" className="text-muted-foreground font-semibold">City</Label>
                                            <Input
                                                id="city"
                                                placeholder="Your city"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                className="h-12 bg-muted/30 border-border/60 focus-visible:border-primary focus-visible:ring-primary/20 shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="state" className="text-muted-foreground font-semibold">State</Label>
                                            <Select
                                                value={formData.state}
                                                onValueChange={(value) => setFormData({ ...formData, state: value })}
                                            >
                                                <SelectTrigger id="state" className="h-12 bg-muted/30 border-border/60 focus:ring-primary/20 focus:border-primary shadow-sm">
                                                    <SelectValue placeholder="Select state" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {indianStates.map((state) => (
                                                        <SelectItem key={state} value={state} className="font-medium cursor-pointer">
                                                            {state}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="cause" className="text-muted-foreground font-semibold">I want to support</Label>
                                        <Select
                                            value={formData.cause}
                                            onValueChange={(value) => setFormData({ ...formData, cause: value })}
                                        >
                                            <SelectTrigger id="cause" className="h-12 bg-muted/30 border-border/60 focus:ring-primary/20 focus:border-primary shadow-sm">
                                                <SelectValue placeholder="Select a cause" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {causes.map((c) => (
                                                    <SelectItem key={c.value} value={c.value} className="font-medium cursor-pointer">
                                                        {c.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-muted-foreground font-semibold">Message (optional)</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Why are you donating? Any message for the team?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="min-h-[100px] bg-muted/30 border-border/60 focus-visible:border-primary focus-visible:ring-primary/20 resize-none shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-16 rounded-2xl text-lg font-bold shadow-elegant group relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {isLoading ? "Initiating Secure Payment..." : `Donate ₹${finalAmount > 0 ? finalAmount.toLocaleString("en-IN") : "—"}`}
                                            {!isLoading && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                                        </span>
                                    </Button>
                                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground font-semibold">
                                        <ShieldCheck className="h-4 w-4 text-green-500" />
                                        You will be securely redirected to Easebuzz to complete your donation.
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* RIGHT SIDE: INFO & OFFLINE DONATION */}
                    <div className="w-full lg:w-[400px] bg-background border-l border-border p-8 lg:p-10 flex flex-col gap-10 shrink-0">
                        
                        {/* BANK CARD UI */}
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4 flex items-center gap-2">
                                <Building2 className="h-4 w-4" /> Offline Donations
                            </div>
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/90 p-6 text-primary-foreground shadow-lg border border-primary/20">
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 h-32 w-32 rounded-full bg-black/10 blur-2xl" />
                                
                                <div className="relative z-10 flex items-center justify-between mb-8">
                                    <div className="font-bold text-lg tracking-wide">Bank Transfer</div>
                                    <div className="text-xs font-medium px-2 py-1 bg-white/20 rounded-md backdrop-blur-sm">Au Small Finance</div>
                                </div>
                                
                                <div className="relative z-10 space-y-5">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.1em] text-primary-foreground/70 font-semibold mb-1">Account Name</div>
                                        <div className="font-bold text-sm tracking-wide">SARV SEWA SASHKTIKARN SANGTHAN</div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-[0.1em] text-primary-foreground/70 font-semibold mb-1">Account Number</div>
                                            <div className="font-mono text-sm font-bold tracking-widest bg-black/10 px-2 py-1 rounded inline-block">1821239219918931</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-[0.1em] text-primary-foreground/70 font-semibold mb-1">IFSC Code</div>
                                            <div className="font-mono text-sm font-bold tracking-widest bg-black/10 px-2 py-1 rounded inline-block">AUBL000239</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IMPACT */}
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4 flex items-center gap-2">
                                <Heart className="h-4 w-4" /> What your donation does
                            </div>
                            <div className="space-y-3">
                                {[
                                    { text: "Sponsors educational resources and scholarships for underprivileged students.", link: "/events/shiksha-sankalp", label: "Shiksha Sankalp" },
                                    { text: "Supports grassroots sports and community engagement through local tournaments.", link: "/events/run-for-sindhu", label: "Run for Sindhu" },
                                    { text: "Facilitates life-saving blood donation camps and critical trauma care support.", link: "/events/ssss-blood-donation", label: "Blood Donation" },
                                    { text: "Funds women's empowerment initiatives and vital skill development programs.", link: "/events/shakti-sankalp", label: "Shakti Sankalp" },
                                    { text: "Enables educational youth excursions to experience our democratic institutions.", link: "/events/sansad-darshan-yatra", label: "Sansad Yatra" },
                                ].map((impact, idx) => (
                                    <div key={idx} className="group flex gap-4 items-start p-3.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted transition-colors shadow-sm">
                                        <div className="shrink-0 mt-0.5 h-2 w-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                                        <div className="text-sm text-foreground/80 leading-snug">
                                            {impact.text} <br />
                                            <Link href={impact.link} className="inline-flex font-semibold text-primary hover:text-primary/80 transition-colors mt-1">
                                                Learn about {impact.label} <ArrowRight className="h-4 w-4 ml-1 mt-[1px]" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div className="mt-auto pt-8 border-t border-border">
                            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4">Need Help?</div>
                            <div className="flex items-center gap-3 text-sm font-semibold mb-3 hover:text-primary transition-colors">
                                <Phone className="h-4 w-4 text-primary" /> +91 90563 33759
                            </div>
                            <div className="flex items-center gap-3 text-sm font-semibold hover:text-primary transition-colors">
                                <Mail className="h-4 w-4 text-primary" /> info@sarvsewabharat.org
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function DonatePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background text-foreground font-semibold">Loading...</div>}>
            <DonateFormContent />
        </Suspense>
    );
}
