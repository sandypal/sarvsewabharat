"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
    const searchParams = useSearchParams();
    const txnid = searchParams.get("txnid");

    return (
        <div className="text-center py-20 px-6 max-w-lg mx-auto">
            <div className="mx-auto h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">Payment Successful!</h1>
            <p className="mt-4 text-muted-foreground">
                Thank you for your generous donation. Your transaction was completed successfully.
            </p>
            {txnid && (
                <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-foreground/80 font-mono">
                    Transaction ID: {txnid}
                </div>
            )}
            <div className="mt-10">
                <Link
                    href="/"
                    className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold hover:bg-primary/90 transition shadow-elegant"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-background">
            <Suspense fallback={<div>Loading...</div>}>
                <SuccessContent />
            </Suspense>
        </div>
    );
}
