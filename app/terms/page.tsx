import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Sarv Sewa Sashaktikaran Sangathan website and making donations.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/80 space-y-6">
          <p>
            Welcome to the Sarv Sewa Sashaktikaran Sangathan website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Sarv Sewa Sashaktikaran Sangathan's relationship with you in relation to this website.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            The term 'Sarv Sewa Sashaktikaran Sangathan' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website. By accessing or using this website in any manner, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use of Content</h2>
          <p>
            The content of the pages of this website is for your general information and use only. It is subject to change without notice. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Donations</h2>
          <p>
            When you make a donation on this website, you confirm that the funds are your own and are being given voluntarily. We will provide an 80G tax receipt for donations where a valid PAN is provided, subject to applicable Indian laws.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Privacy</h2>
          <p>
            Your use of this website is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Governing Law</h2>
          <p>
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
          </p>
        </div>
      </div>
    </div>
  );
}
