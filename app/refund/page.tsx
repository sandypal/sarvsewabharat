import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation policy for donations made to Sarv Sewa Sashaktikaran Sangathan.",
  robots: { index: false, follow: true },
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8">Refund and Cancellation Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/80 space-y-6">
          <p>
            At Sarv Sewa Sashaktikaran Sangathan, we are grateful for your donations and support for our various causes, such as education, sports, tree plantation, and blood donation.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Donation Cancellations</h2>
          <p>
            Donations made to Sarv Sewa Sashaktikaran Sangathan are generally non-refundable. However, we recognize that circumstances may arise where a refund is necessary. If you have made an error in making your donation, please contact us within 7 days.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Refund Requests</h2>
          <p>
            To request a refund, please email us at <strong>info@sarvsewabharat.org</strong> with your transaction details, date of donation, and the reason for your request.
          </p>
          <p>
            Refund requests will be reviewed on a case-by-case basis. We will process any valid refund within 10-15 business days. Approved refunds will be credited back to the original method of payment.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Recurring Donations</h2>
          <p>
            If you have set up a recurring donation, you may cancel it at any time by notifying us or cancelling through your payment provider. Cancellations will apply to future donations and not to those already processed.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Tax Receipts</h2>
          <p>
            If a donation is refunded, the associated 80G tax receipt becomes invalid and must be destroyed. We will notify the relevant tax authorities of the refunded amount where applicable.
          </p>
        </div>
      </div>
    </div>
  );
}
