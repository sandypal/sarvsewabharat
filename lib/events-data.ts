import marathon from "@/public/marathon.jpg";
import cricket from "@/public/cricket.jpg";
import blood from "@/public/blood.jpg";
import trees from "@/public/trees.jpg";
import shiksha from "@/public/shiksha.png";
import shakti from "@/public/shakti.png";
import { StaticImageData } from "next/image";

export type EventDetails = {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  date: string;
  location: string;
  img: StaticImageData;
  description: string[];
  highlights: string[];
  contactEmail: string;
  contactPhone: string;
};

export const eventsData: Record<string, EventDetails> = {
  "run-for-sindhu": {
    slug: "run-for-sindhu",
    title: "Run For Sindhu Marathon",
    tag: "Marathon",
    tagline: "10K & Half Marathon for Education",
    date: "Coming Soon",
    location: "Riverside Promenade, Sector 12, New Delhi",
    img: marathon,
    description: [
      "Run for Sindhu is our flagship annual marathon — a sunrise run through city streets in tribute to the resilience and spirit of Sindhu, a young girl whose story inspired our education fund.",
      "Every registration directly sponsors school supplies, uniforms and exam fees for underprivileged children in the Sangathan's adopted schools.",
    ],
    highlights: [
      "10K, Half Marathon (21.1K) and a 3K Family Fun Run",
      "Chip-timed race with finisher medal & dri-fit t-shirt",
      "Hydration stations every 2.5 km, medical support on course",
      "Pre-race carb-loading dinner the night before",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
  },
  "operation-sindoor": {
    slug: "operation-sindoor",
    title: "Operation Sindoor Cricket Cup",
    tag: "Cricket",
    tagline: "Community Cricket Tournament",
    date: "Coming Soon",
    location: "District Sports Grounds across 12 districts",
    img: cricket,
    description: [
      "Operation Sindoor Cricket Cup is a community-built tape-ball tournament that turns local maidans into festivals of sport, sportsmanship and neighbourhood pride.",
      "Registration includes team kits, umpiring fees and ground charges. Knockouts and finals are streamed live to give every player their moment.",
    ],
    highlights: [
      "16 players per squad, team registration",
      "League + knockout format with district playoffs",
      "Winner's purse + scholarships for MVPs",
      "Free coaching clinic for the youngest 4 teams",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
  },
  "shiksha-sankalp": {
    slug: "shiksha-sankalp",
    title: "Shiksha Sankalp (One Lac Students One Lac Smiles)",
    tag: "Education",
    tagline: "Empowering 1,00,000 Students",
    date: "Coming Soon",
    location: "Various Schools and Educational Centers",
    img: shiksha,
    description: [
      "Shiksha Sankalp is an ambitious project aiming to bring smiles to one lakh students by providing them with necessary educational resources and support.",
      "We believe that education is the most powerful weapon to change the world. This initiative ensures no child is left behind due to lack of resources.",
    ],
    highlights: [
      "Distribution of school bags, books, and stationery",
      "Scholarships for meritorious and needy students",
      "Setting up of digital classrooms in rural areas",
      "Mentorship programs linking students with professionals",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
  },
  "ssss-blood-donation": {
    slug: "ssss-blood-donation",
    title: "SSSS Blood Donation Movement",
    tag: "Blood Camp",
    tagline: "Voluntary Blood Donation Drive",
    date: "Coming Soon",
    location: "Sangathan Community Hall, Lajpat Nagar",
    img: blood,
    description: [
      "Our Blood Donation Movement is a voluntary drive run in partnership with regional hospitals and accredited blood banks. Donors are screened by licensed medical staff.",
      "Collected units are used in trauma care, thalassemia treatment and emergency surgeries to save lives when it matters most.",
    ],
    highlights: [
      "Donors must be 18–65 years, weigh 50+ kg",
      "On-site doctor consultation and hemoglobin test",
      "Donor card valid for priority blood access for a year",
      "Refreshments and post-donation rest area provided",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
  },
  "shakti-sankalp": {
    slug: "shakti-sankalp",
    title: "Shakti Sankalp (Women Empowerment & Skill Develoment)",
    tag: "Empowerment",
    tagline: "Fostering Independence and Skill",
    date: "Coming Soon",
    location: "Community Centers across 5 districts",
    img: shakti,
    description: [
      "Shakti Sankalp focuses on women empowerment and skill development, providing vocational training, financial literacy, and entrepreneurial support.",
      "Our goal is to create a supportive ecosystem where women can learn, grow, and achieve financial independence.",
    ],
    highlights: [
      "Vocational courses in tailoring, crafts, and IT",
      "Financial literacy and micro-finance guidance",
      "Self-defense and confidence-building workshops",
      "Networking events with successful women entrepreneurs",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
  }
};

export const eventsList = Object.values(eventsData);
