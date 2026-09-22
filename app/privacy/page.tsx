import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy outlining how Sarv Sewa Sashaktikaran Sangathan collects, uses, and protects your personal data.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/80 space-y-6">
          <p>
            At Sarv Sewa Sashaktikaran Sangathan, we are committed to protecting the privacy and security of our donors, volunteers, and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you visit our website, register for an event, or make a donation, we may collect personal information such as your name, email address, phone number, PAN (for tax receipts), and payment details. We may also collect non-personal data like browser type and IP address.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use your personal information to process donations, issue tax receipts, communicate with you about our programs and events, and improve our website. We do not sell, rent, or trade your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to secure your personal information against unauthorized access, loss, or alteration. All online payment transactions are processed securely through our authorized payment gateways.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, request corrections, or ask us to delete your data. To exercise these rights, please contact us at info@sarvsewabharat.org.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
}
