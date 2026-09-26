"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { XCircle } from "lucide-react";
import { Suspense } from "react";

function FailContent() {
    const searchParams = useSearchParams();
    const txnid = searchParams.get("txnid");

    return (
        <div className="text-center py-20 px-6 max-w-lg mx-auto">
            <div className="mx-auto h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <XCircle className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">Payment Failed</h1>
            <p className="mt-4 text-muted-foreground">
                Unfortunately, your payment could not be processed at this time. Please try again or use a different payment method.
            </p>
            {txnid && (
                <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-foreground/80 font-mono">
                    Transaction ID: {txnid}
                </div>
            )}
            <div className="mt-10 flex gap-4 justify-center">
                <Link
                    href="/donate"
                    className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold hover:bg-primary/90 transition shadow-elegant"
                >
                    Try Again
                </Link>
                <Link
                    href="/"
                    className="inline-flex items-center rounded-full border border-border bg-card text-foreground px-8 py-3 text-sm font-semibold hover:border-primary/50 transition"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}

export default function FailPage() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-background">
            <Suspense fallback={<div>Loading...</div>}>
                <FailContent />
            </Suspense>
        </div>
    );
}
