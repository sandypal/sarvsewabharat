import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Sarv Sewa Sashaktikaran Sangathan. Your donation funds education, health camps, blood donation drives, and women empowerment programs. 80G tax exemption available.",
  keywords: [
    "Donate NGO India",
    "80G Tax Exemption Donation",
    "Support Education India",
    "Blood Donation Camp India",
    "Women Empowerment Donation",
    "Sarv Sewa Sashaktikaran Sangathan Donate",
  ],
  openGraph: {
    title: "Donate | Sarv Sewa Sashaktikaran Sangathan",
    description:
      "Every rupee you donate becomes a sapling, a blood unit, a scholarship, or a meal. Support our mission today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | Sarv Sewa Sashaktikaran Sangathan",
    description:
      "Every rupee you donate becomes a sapling, a blood unit, a scholarship, or a meal. Support our mission today.",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
