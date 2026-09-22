"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Heart, CheckCircle, IndianRupee, ShieldCheck } from "lucide-react";

const presets = [500, 1000, 2500, 5000, 10000];
const causes = [
    { value: "run-for-sindhu", label: "Run For Sindhu Marathon" },
    { value: "operation-sindoor", label: "Operation Sindoor Cricket Cup" },
    { value: "shiksha-sankalp", label: "Shiksha Sankalp (One Lac Students One Lac Smiles)" },
    { value: "ssss-blood-donation", label: "SSSS Blood Donation Movement" },
    { value: "shakti-sankalp", label: "Shakti Sankalp (Women Empowerment & Skill Develoment)" },
];

export default function DonatePage() {
    const [amount, setAmount] = useState<number | "custom">(1000);
    const [customAmount, setCustomAmount] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pan: "",
        cause: "run-for-sindhu",
        message: "",
    });

    const finalAmount = amount === "custom" ? Number(customAmount) || 0 : amount;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Wire to payment gateway or server function when ready.
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-hero opacity-[0.97]" />
                <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_30%,oklch(0.82_0.16_95/0.35),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.18_50/0.3),transparent_50%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 text-primary-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-white/25">
                        <Heart className="h-3.5 w-3.5 text-secondary" /> Give Today
                    </span>
                    <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl">
                        Your generosity is the root of every good thing we do.
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">
                        Every rupee you donate becomes a sapling, a blood unit, a scholarship, or a meal for someone in need. Fill in the form below and we will share the payment details with you right away.
                    </p>
                </div>
                <div className="relative h-16 bg-gradient-to-b from-transparent to-background" />
            </section>

            {/* FORM SECTION */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* MAIN FORM */}
                    <div className="lg:col-span-3">
                        <Card className="shadow-elegant border-border">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl">Make a Donation</CardTitle>
                                <CardDescription>
                                    Choose an amount and tell us a little about yourself. We will reach out with secure payment options.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                            <CheckCircle className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="font-display text-2xl font-bold text-foreground">Thank you, {formData.name || "friend"}!</h3>
                                        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                                            We have received your pledge of <span className="font-semibold text-foreground">₹{finalAmount.toLocaleString("en-IN")}</span>. Our team will contact you shortly at {formData.email || "the provided contact"} with payment instructions and a receipt.
                                        </p>
                                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                                            <Link
                                                href="/"
                                                className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition shadow-elegant"
                                            >
                                                Back to Home
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setSubmitted(false);
                                                    setFormData({ name: "", email: "", phone: "", pan: "", cause: "run-for-sindhu", message: "" });
                                                    setAmount(1000);
                                                    setCustomAmount("");
                                                }}
                                                className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                                            >
                                                Donate Again
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* AMOUNT */}
                                        <div className="space-y-3">
                                            <Label className="text-base font-semibold">Select donation amount</Label>
                                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                                {presets.map((p) => (
                                                    <button
                                                        key={p}
                                                        type="button"
                                                        onClick={() => setAmount(p)}
                                                        className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${amount === p
                                                            ? "bg-primary text-primary-foreground border-primary"
                                                            : "bg-card border-border text-foreground hover:border-primary/50"
                                                            }`}
                                                    >
                                                        ₹{p.toLocaleString("en-IN")}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-3 pt-1">
                                                <button
                                                    type="button"
                                                    onClick={() => setAmount("custom")}
                                                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${amount === "custom"
                                                        ? "bg-primary text-primary-foreground border-primary"
                                                        : "bg-card border-border text-foreground hover:border-primary/50"
                                                        }`}
                                                >
                                                    Custom
                                                </button>
                                                {amount === "custom" && (
                                                    <div className="relative flex-1 max-w-[16rem]">
                                                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                        <Input
                                                            type="number"
                                                            min={1}
                                                            required
                                                            placeholder="Enter amount"
                                                            value={customAmount}
                                                            onChange={(e) => setCustomAmount(e.target.value)}
                                                            className="pl-9"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* DONOR DETAILS */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full name</Label>
                                                <Input
                                                    id="name"
                                                    required
                                                    maxLength={100}
                                                    placeholder="Your full name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    maxLength={255}
                                                    placeholder="you@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone number</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    required
                                                    minLength={10}
                                                    maxLength={15}
                                                    placeholder="+91 98765 43210"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="pan">PAN number (for 80G receipt)</Label>
                                                <Input
                                                    id="pan"
                                                    maxLength={10}
                                                    placeholder="ABCDE1234F"
                                                    value={formData.pan}
                                                    onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="cause">I want to support</Label>
                                            <Select
                                                value={formData.cause}
                                                onValueChange={(value) => setFormData({ ...formData, cause: value })}
                                            >
                                                <SelectTrigger id="cause" className="w-full">
                                                    <SelectValue placeholder="Select a cause" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {causes.map((c) => (
                                                        <SelectItem key={c.value} value={c.value}>
                                                            {c.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message (optional)</Label>
                                            <Textarea
                                                id="message"
                                                maxLength={500}
                                                placeholder="Why are you donating? Any message for the team?"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <Button
                                                type="submit"
                                                className="w-full h-12 rounded-full text-base font-semibold shadow-elegant"
                                            >
                                                Pledge ₹{finalAmount > 0 ? finalAmount.toLocaleString("en-IN") : "—"}
                                            </Button>
                                            <p className="mt-3 text-xs text-muted-foreground text-center">
                                                You will receive UPI / bank transfer details and an 80G receipt via email.
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* SIDEBAR INFO */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-primary/20 bg-primary/[0.03]">
                            <CardHeader>
                                <CardTitle className="font-display text-xl flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-primary" /> Secure & Transparent
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm text-foreground/80">
                                <p>
                                    <strong className="text-foreground">80G tax benefit:</strong> All donations are eligible for tax exemption under applicable Indian charity laws. Please provide a valid PAN.
                                </p>
                                <p>
                                    <strong className="text-foreground">No hidden fees:</strong> 100% of your contribution is directed to the programme or cause you choose.
                                </p>
                                <p>
                                    <strong className="text-foreground">Receipts:</strong> You will receive a digital receipt within 48 hours of payment confirmation.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="font-display text-xl">What your donation does</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { amount: "₹500", impact: "Plants 5 native saplings through Vriksh Bandhan" },
                                    { amount: "₹1,000", impact: "Sponsors a child’s sports kit for Run for Sindhu" },
                                    { amount: "₹5,000", impact: "Funds a mini blood donation camp in one village" },
                                    { amount: "₹10,000", impact: "Supports a rural cricket tournament for 200+ youth" },
                                ].map((item) => (
                                    <div key={item.amount} className="flex gap-4 items-start">
                                        <div className="shrink-0 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary">
                                            {item.amount}
                                        </div>
                                        <p className="text-sm text-foreground/80 leading-snug">{item.impact}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <div className="rounded-2xl bg-band p-6 text-primary-foreground text-center">
                            <div className="text-xs uppercase tracking-[0.18em] opacity-90">Prefer to talk?</div>
                            <div className="mt-2 font-display text-2xl font-bold">+91-90563-33759</div>
                            <p className="mt-2 text-sm opacity-90">info@sarvsewabharat.org</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
