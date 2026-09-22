import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sarv Sewa Sashaktikaran Sangathan. Call us at +91-90563-33759 or email info@sarvsewabharat.org. We are based in New Delhi, India.",
  keywords: [
    "Contact SSSS",
    "NGO India Contact",
    "Sarv Sewa Sashaktikaran Sangathan Contact",
    "NGO New Delhi",
  ],
  openGraph: {
    title: "Contact Us | Sarv Sewa Sashaktikaran Sangathan",
    description:
      "Have questions or want to get involved? Reach out to us — call, email, or fill in our contact form.",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Sarv Sewa Sashaktikaran Sangathan",
    description:
      "Have questions or want to get involved? Reach out to us — call, email, or fill in our contact form.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
