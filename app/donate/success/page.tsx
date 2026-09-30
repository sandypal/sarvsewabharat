"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Heart, Share2, MessageCircle, Copy } from "lucide-react";
import { Suspense, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function SuccessContent() {
    const searchParams = useSearchParams();
    const txnid = searchParams.get("txnid");
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        setShareUrl(window.location.origin + "/donate");
    }, []);

    const shareMessage = "I just made a donation to support meaningful social initiatives across India! Join me in making a difference today.";

    const handleCopy = () => {
        navigator.clipboard.writeText(`${shareMessage} ${shareUrl}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleWhatsAppShare = () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage + " " + shareUrl)}`;
        window.open(url, '_blank');
    };

    const handleWebShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Support Sarv Sewa Sashktikarn Sangthan',
                    text: shareMessage,
                    url: shareUrl,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            handleCopy();
        }
    };

    return (
        <div className="text-center py-24 px-6 max-w-2xl mx-auto">
            <div className="relative mx-auto h-28 w-28 rounded-full bg-green-50 flex items-center justify-center mb-8 shadow-sm border border-green-100">
                <div className="absolute inset-0 rounded-full animate-ping bg-green-100 opacity-20" />
                <CheckCircle className="h-14 w-14 text-green-600 relative z-10" />
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Thank you for your kindness!
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Your generosity is a lifeline. Whether it provides a scholarship, a unit of blood, or supports grassroots sports, <strong className="text-foreground">your contribution today is changing lives</strong>.
            </p>
            
            {txnid && (
                <div className="mt-8 p-4 bg-muted/40 border border-border/50 rounded-xl text-sm text-foreground/80 font-mono inline-block shadow-sm">
                    Transaction ID: <span className="font-bold text-foreground">{txnid}</span>
                </div>
            )}

            <div className="mt-12 bg-card border border-border shadow-elegant rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-primary/10 rounded-full blur-3xl" />
                
                <h3 className="font-display text-2xl font-bold flex items-center justify-center gap-2 mb-3">
                    <Heart className="h-6 w-6 text-red-500 fill-red-500" /> Inspire Others to Give
                </h3>
                <p className="text-sm text-muted-foreground mb-8">
                    Good deeds grow when shared. Encourage your friends and family to join this movement by sharing your impact!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button 
                        onClick={handleWhatsAppShare}
                        className="w-full sm:w-auto h-12 rounded-full px-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold gap-2"
                    >
                        <MessageCircle className="h-4 w-4" /> Share on WhatsApp
                    </Button>
                    
                    <Button 
                        onClick={handleWebShare}
                        variant="outline"
                        className="w-full sm:w-auto h-12 rounded-full px-6 border-border font-bold gap-2"
                    >
                        <Share2 className="h-4 w-4" /> Share Link
                    </Button>

                    <Button 
                        onClick={handleCopy}
                        variant="secondary"
                        className="w-full sm:w-auto h-12 rounded-full px-6 font-bold gap-2"
                    >
                        <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy Text"}
                    </Button>
                </div>
            </div>

            <div className="mt-12">
                <Link
                    href="/"
                    className="inline-flex items-center rounded-full bg-primary/10 text-primary px-8 py-3.5 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-background">
            <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center font-bold">Loading...</div>}>
                <SuccessContent />
            </Suspense>
        </div>
    );
}
