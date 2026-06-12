import marathon from "@/public/marathon.jpg";
import cricket from "@/public/cricket.jpg";
import blood from "@/public/blood.jpg";
import trees from "@/public/trees.jpg";
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
    title: "Run for Sindhu",
    tag: "Marathon",
    tagline: "10K & Half Marathon for Education",
    date: "Sunday, 19 October 2026 · 5:30 AM",
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
    contactEmail: "runforsindhu@sangathan.org",
    contactPhone: "+91 98100 11122",
  },
  "sangathan-premier-cup": {
    slug: "sangathan-premier-cup",
    title: "Sangathan Premier Cup",
    tag: "Cricket",
    tagline: "Inter-District Tape-Ball Tournament",
    date: "1 December 2026 — 18 January 2027",
    location: "District Sports Grounds across 12 districts",
    img: cricket,
    description: [
      "Sixty-four teams. Six weeks. One trophy. The Sangathan Premier Cup is a community-built tape-ball tournament that turns local maidans into festivals of sport, sportsmanship and neighbourhood pride.",
      "Registration includes team kits, umpiring fees and ground charges. Knockouts and finals are streamed live to give every player their moment.",
    ],
    highlights: [
      "16 players per squad, ₹2,400 team registration",
      "League + knockout format with district playoffs",
      "Winner's purse of ₹1,00,000 + scholarships for MVPs",
      "Free coaching clinic for the youngest 4 teams",
    ],
    contactEmail: "cricket@sangathan.org",
    contactPhone: "+91 98100 33344",
  },
  "raktdaan-mahotsav": {
    slug: "raktdaan-mahotsav",
    title: "Raktdaan Mahotsav",
    tag: "Blood Camp",
    tagline: "Voluntary Blood Donation Drive",
    date: "Every quarter · Next camp: 14 July 2026, 9 AM – 4 PM",
    location: "Sangathan Community Hall, Lajpat Nagar",
    img: blood,
    description: [
      "Raktdaan Mahotsav is our quarterly voluntary blood donation drive run in partnership with regional hospitals and accredited blood banks. Donors are screened by licensed medical staff and receive light refreshments, a certificate and a donor card.",
      "Over 12,000 units have been collected since 2017 — used in trauma care, thalassemia treatment and emergency surgeries.",
    ],
    highlights: [
      "Donors must be 18–65 years, weigh 50+ kg",
      "On-site doctor consultation and hemoglobin test",
      "Donor card valid for priority blood access for a year",
      "Refreshments and post-donation rest area provided",
    ],
    contactEmail: "raktdaan@sangathan.org",
    contactPhone: "+91 98100 55566",
  },
  "vriksh-bandhan": {
    slug: "vriksh-bandhan",
    title: "Vriksh Bandhan",
    tag: "Plantation",
    tagline: "Tree Plantation Drive",
    date: "Every Saturday through monsoon · July – September 2026",
    location: "Schools, panchayats & roadside greenbelts (12 districts)",
    img: trees,
    description: [
      "Vriksh Bandhan literally translates to ‘bond with a tree’. Volunteers plant native saplings — neem, peepal, jamun, gulmohar — and adopt them for the first year, watering and protecting each one until it can stand on its own.",
      "We have crossed 1 lakh saplings planted across schools, panchayats and roadside greenbelts, with a 78% survival rate after twelve months.",
    ],
    highlights: [
      "Saplings, tools and gloves provided on-site",
      "Each volunteer gets a geo-tagged tree to track growth",
      "Family-friendly — kids 8+ welcome with a guardian",
      "Tea, snacks and a sapling to take home",
    ],
    contactEmail: "vriksh@sangathan.org",
    contactPhone: "+91 98100 77788",
  },
};

export const eventsList = Object.values(eventsData);
