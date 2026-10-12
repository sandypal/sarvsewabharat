import aarti from "@/public/aarti.webp";
import binakshiMahi from "@/public/Binakshi-Mahi.webp";
import blood from "@/public/blood.jpg";
import dimanshuRana from "@/public/Dimanshu-rana.webp";
import gaurav from "@/public/GAURAV.png";
import gurwinderSingh from "@/public/Gurwinder-singh.webp";
import harmanKamboj from "@/public/Harman-kamboj.webp";
import harshkamalKansal from "@/public/Harshkamal-kansal.webp";
import intership from "@/public/intership.jpg";
import jagchananSingh from "@/public/JAGCHANANSINGH.jpeg";
import jobanSohi from "@/public/joban-sohi.webp";
import jujharSingh from "@/public/Jujhar-singh.webp";
import karanBatti from "@/public/karan-batti.jpg";
import karanSama from "@/public/karan-sama.jpg";
import kohinoor from "@/public/KOHINOOR.jpeg";
import lifeSaversLogo from "@/public/life-savers-logo.jpg";
import run4_1 from "@/public/run4_1.jpg";
import run4_2 from "@/public/run4_2.png";
import run4_3 from "@/public/run4_3.png";
import run4_4 from "@/public/run4_4.png";
import sansad from "@/public/sansad.jpg";
import shakti from "@/public/shakti.png";
import shikshaGal1 from "@/public/shiksha-gal-1.jpg";
import shikshaGal2 from "@/public/shiksha-gal-2.jpg";
import shikshaGal3 from "@/public/shiksha-gal-3.jpg";
import shikshaGal4 from "@/public/shiksha-gal-4.jpg";
import shiksha from "@/public/shiksha.png";
import marathon from "@/public/sindhu.jpg";
import cricket from "@/public/sindoor.jpg";
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
  gallery?: StaticImageData[];
  pressReleases?: { title: string; date: string; url: string }[];
  logo?: any;
  coordinators?: { role: string; name: string; phone: string; photo?: StaticImageData; description?: string }[];
};

export const eventsData: Record<string, EventDetails> = {
  "operation-sindoor-2": {
    slug: "operation-sindoor-2",
    title: "Operation Sindoor 2.0",
    tag: "Cricket",
    tagline: "The Biggest Community Cricket Tournament Returns",
    date: "October 2026",
    location: "Chandigarh",
    img: cricket,
    description: [
      "Operation Sindoor 2.0 is back! Bigger and better. We are bringing the community together once again for an unforgettable cricket tournament.",
      "Join us this October for a month of sportsmanship, thrilling matches, and neighbourhood pride.",
    ],
    highlights: [
      "32 teams from across the state",
      "Live broadcast of all matches",
      "Celebrity guest appearances",
      "Enhanced prize pool and MVP awards",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
    gallery: [cricket, marathon],
    pressReleases: [
      { title: "Operation Sindoor 2.0 Announced", date: "Sep 2026", url: "#" },
    ],
  },

  "operation-sindoor": {
    slug: "operation-sindoor",
    title: "Operation Sindoor Cricket Cup 1.0",
    tag: "Cricket",
    tagline: "Community Cricket Tournament",
    date: "2025",
    location: "Chandigarh",
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
    gallery: [cricket, marathon, sansad],
    pressReleases: [
      { title: "Operation Sindoor 1.0 Concludes", date: "Nov 2025", url: "#" },
    ],
  },
  "run-for-sindhu-1": {
    slug: "run-for-sindhu-1",
    title: "Run For Sindhu Marathon 1.0",
    date: "2023",
    tag: "Marathon",
    tagline: "10K Marathon for Education",
    location: "Chandigarh",
    img: marathon,
    description: [
      "Run for Sindhu is our flagship annual marathon — a sunrise run through city streets in tribute to the resilience and spirit of Sindhu, a young girl whose story inspired our education fund.",
      "Every registration directly sponsors school supplies, uniforms and exam fees for underprivileged children in the Sangthan's adopted schools.",
    ],
    highlights: [
      "10K and a 3K Family Fun Run",
      "Chip-timed race with finisher medal & dri-fit t-shirt",
      "Hydration stations every 2.5 km, medical support on course",
      "Pre-race carb-loading dinner the night before",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
    gallery: [marathon, blood, trees],
    pressReleases: [
      {
        title: "Run For Sindhu Marathon 1.0 Highlights",
        date: "Dec 2023",
        url: "#",
      },
    ],
  },
  "run-for-sindhu-2": {
    slug: "run-for-sindhu-2",
    title: "Run For Sindhu Marathon 2.0",
    date: "2024",
    tag: "Marathon",
    tagline: "10K Marathon for Education",
    location: "Chandigarh",
    img: marathon,
    description: [
      "Run for Sindhu is our flagship annual marathon — a sunrise run through city streets in tribute to the resilience and spirit of Sindhu, a young girl whose story inspired our education fund.",
      "Every registration directly sponsors school supplies, uniforms and exam fees for underprivileged children in the Sangthan's adopted schools.",
    ],
    highlights: [
      "10K and a 3K Family Fun Run",
      "Chip-timed race with finisher medal & dri-fit t-shirt",
      "Hydration stations every 2.5 km, medical support on course",
      "Pre-race carb-loading dinner the night before",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
    gallery: [marathon, blood, trees],
    pressReleases: [
      {
        title: "Run For Sindhu Marathon 2.0 Highlights",
        date: "Dec 2024",
        url: "#",
      },
    ],
  },
  "run-for-sindhu-3": {
    slug: "run-for-sindhu-3",
    title: "Run For Sindhu Marathon 3.0",
    date: "2025",
    tag: "Marathon",
    tagline: "10K Marathon for Education",
    location: "Chandigarh",
    img: marathon,
    description: [
      "Run for Sindhu is our flagship annual marathon — a sunrise run through city streets in tribute to the resilience and spirit of Sindhu, a young girl whose story inspired our education fund.",
      "Every registration directly sponsors school supplies, uniforms and exam fees for underprivileged children in the Sangthan's adopted schools.",
    ],
    highlights: [
      "10K and a 3K Family Fun Run",
      "Chip-timed race with finisher medal & dri-fit t-shirt",
      "Hydration stations every 2.5 km, medical support on course",
      "Pre-race carb-loading dinner the night before",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
    gallery: [marathon, blood, trees],
    pressReleases: [
      {
        title: "Run For Sindhu Marathon 3.0 Highlights",
        date: "Dec 2025",
        url: "#",
      },
    ],
  },
  "run-for-sindhu-4": {
    slug: "run-for-sindhu-4",
    title: "Run For Sindhu Marathon 4.0",
    date: "2026",
    tag: "Marathon",
    tagline: "10K Marathon for Education",
    location: "Chandigarh",
    img: marathon,
    description: [
      "Run for Sindhu is our flagship annual marathon — a sunrise run through city streets in tribute to the resilience and spirit of Sindhu, a young girl whose story inspired our education fund.",
      "Every registration directly sponsors school supplies, uniforms and exam fees for underprivileged children in the Sangthan's adopted schools.",
    ],
    highlights: [
      "10K and a 3K Family Fun Run",
      "Chip-timed race with finisher medal & dri-fit t-shirt",
      "Hydration stations every 2.5 km, medical support on course",
      "Pre-race carb-loading dinner the night before",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
    gallery: [run4_1, run4_2, run4_3, run4_4],
    pressReleases: [
      {
        title: "Run For Sindhu Marathon 4.0 Highlights",
        date: "Dec 2026",
        url: "#",
      },
    ],
  },
  "sansad-darshan-yatra": {
    slug: "sansad-darshan-yatra",
    title: "Sansad Darshan Yatra",
    tag: "Excursion",
    tagline: "A Journey to the Heart of Democracy",
    date: "2024",
    location: "New Delhi",
    img: sansad,
    gallery: [sansad, shiksha],
    description: [
      "Sansad Darshan Yatra is an educational excursion taking youth and community members to witness the vibrant democratic process at the Parliament of India.",
      "This initiative aims to inspire the next generation of leaders by giving them firsthand exposure to the nation's legislative heart.",
    ],
    highlights: [
      "Guided tour of the Parliament building",
      "Interactive sessions with policymakers and leaders",
      "Educational workshops on the Indian Constitution",
      "Travel and accommodation provided for rural youth",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
  },

};

export const initiativesData: Record<string, EventDetails> = {
  "shiksha-sankalp": {
    slug: "shiksha-sankalp",
    title: "Shiksha Sankalp: One Lakh Students, One Lakh Smiles",
    tag: "National Education Initiative",
    tagline:
      "A focused education movement helping deserving students continue learning with dignity, confidence, and opportunity.",
    date: "Ongoing",
    location: "Pan-India (28 States, 8 UTs)",
    img: shiksha,
    description: [
      "Shiksha Sankalp is the core education initiative of Sarv Sewa Sashktikarn Sangthan. We support deserving students through higher education fee assistance, scholarships, study material, books, stationery, mentorship, and academic support.",
      "Education with purpose. Impact with dignity. We are committed to ensuring that every deserving child gets access to quality education without financial barriers.",
      "Our Promise: Nurture dreams. Build confidence. Create pathways to opportunity. Every deserving student should be able to keep learning in a national mission rooted in access, inclusion, and social mobility.",
      "We also invite Youth Leaders to become State Education Ambassadors, and corporate partners to join hands for measurable CSR education impact.",
    ],
    highlights: [
      "Higher Education & Scholarships",
      "Books, Study Materials & Stationery",
      "Career Guidance & Mentorship",
      "Personality Growth & Life Skills",
      "Rural Empowerment & Peer Support",
      "Fully Compliant: 12A, 80G, CSR-1, NGO Darpan",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-98551-09159",
    coordinators: [
      {
        role: "CONVENOR",
        name: "KARAN SAMA",
        phone: "+91 98551 09159",
        photo: karanSama,
        description:
          "A dedicated leader guiding the vision of Shiksha Sankalp and working towards creating meaningful educational opportunities for students. His leadership helps drive the campaign forward with commitment, purpose, and a strong focus on empowering young learners.",
      },
      {
        role: "CO-CONVENOR",
        name: "KARAN BATTI",
        phone: "+91 95927 43434",
        photo: karanBatti,
        description:
          "A committed leader who works alongside the Convenor to transform the vision of Shiksha Sankalp into meaningful action. Through strategic coordination, collaboration, and dedicated execution, he plays a vital role in expanding educational opportunities and creating lasting impact.",
      },
    ],
    gallery: [shikshaGal1, shikshaGal2, shikshaGal3, shikshaGal4],
  },
  "shakti-sankalp": {
    slug: "shakti-sankalp",
    title: "Shakti Sankalp (Women Empowerment & Skill Develoment)",
    tag: "Empowerment",
    tagline: "Empowering Women. Enabling Change. Inspiring Futures.",
    date: "Ongoing",
    location: "Various Locations",
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
    coordinators: [
      {
        role: "CONVENOR",
        name: "MS. AARTI ICHHPUJANI",
        phone: "",
        photo: aarti,
        description:
          "A Panjab University alumna and University Topper, Internationally Certified Youth Facilitator, and former UGC Student Ambassador, she has dedicated over nine years to community service, youth leadership, women’s empowerment and social impact. Recognised as a Youth Icon by the Ministry of Youth Affairs & Sports, Government of India, she has represented India at national and international platforms and received numerous honours, including the prestigious World Record of Excellence, England. She is committed to empowering women to lead with confidence, achieve self-reliance and attain financial independence.",
      },
      {
        role: "CO-CONVENOR",
        name: "BINAKSHI MAHI",
        phone: "",
        photo: binakshiMahi,
        description:
          "Binakshi Mahi is passionate about social development, women’s empowerment, and community engagement. Through her work with different NGOs and within the skill development industry, she is committed to creating opportunities for learning, growth, and self-reliance. She strongly believes in women’s rights, dignity, safety, and equal opportunities, and continues to stand for a society where every woman can live with confidence, independence, and respect.",
      },
    ],
  },
  "sarv-sewa-life-savers": {
    slug: "sarv-sewa-life-savers",
    title: "Sarv Sewa Life Savers",
    tag: "Blood Donation",
    tagline: "Connecting Voluntary Blood Donors with Patients in Urgent Need",
    date: "Ongoing",
    location: "Various Locations",
    img: blood,
    logo: lifeSaversLogo,
    description: [
      "Sarv Sewa Life Savers is an initiative by Sarv Sewa Sashktikarn Sangthan, dedicated to connecting voluntary blood donors with patients who require blood in critical and urgent situations.",
      "Our aim is to ensure that the right donor reaches the right patient at the right time, helping save lives and strengthening the spirit of voluntary blood donation.",
      "Our Mission: Donate Blood • Save Lives • Serve Humanity",
      "We believe that a single blood donation can become a lifeline for someone in need. Through this initiative, we work towards building a responsive network of voluntary donors and making timely blood support accessible to patients and their families.",
    ],
    highlights: [
      "24/7 Voluntary Blood Donation Support",
      "Network of Verified Donors",
      "Emergency Medical Assistance",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-98551-99173",
    coordinators: [
      {
        role: "PUNJAB COORDINATOR",
        name: "JAGCHANAN SINGH",
        phone: "+91 98551 99173",
        photo: jagchananSingh,
        description:
          "Leading the Sarv Sewa Life Savers network across Punjab, dedicated to connecting voluntary blood donors with patients in urgent need and coordinating emergency medical support.",
      },
      {
        role: "CHANDIGARH COORDINATOR",
        name: "KOHINOOR",
        phone: "+91 98159 77922",
        photo: kohinoor,
        description:
          "Coordinating active voluntary donors and hospital outreach across Chandigarh for emergency blood requirements.",
      },
      {
        role: "CO-COORDINATOR",
        name: "JUJHAR SINGH",
        phone: "+91 70090 30826",
        photo: jujharSingh,
        description:
          "Dedicated co-coordinator actively assisting with donor mobilization and urgent blood requests.",
      },
      {
        role: "CO-COORDINATOR",
        name: "ANSH ARORA",
        phone: "+91 83603 00070",
        description:
          "Active co-coordinator supporting helpline management and voluntary blood donation drives.",
      },
      {
        role: "CO-COORDINATOR",
        name: "PREET HANDA",
        phone: "+91 95012 38216",
        description:
          "Committed co-coordinator helping manage donor networks and rapid response coordination.",
      },
      {
        role: "CO-COORDINATOR",
        name: "HARMAN KAMBOJ",
        phone: "+91 62839 09650",
        photo: harmanKamboj,
        description:
          "Committed co-coordinator facilitating emergency donor connections and hospital assistance.",
      },
      {
        role: "CO-COORDINATOR",
        name: "DIMANSHU RANA",
        phone: "+91 62832 68650",
        photo: dimanshuRana,
        description:
          "Dedicated co-coordinator connecting voluntary donors with patients in urgent need across local centers.",
      },
    ],
  },
  "social-work-internship": {
    slug: "social-work-internship",
    title: "Social Work Internship Program",
    tag: "Internship",
    tagline: "Learn • Serve • Lead",
    date: "Ongoing",
    location: "Various Locations",
    img: intership,
    description: [
      "Empowering students with practical training, field exposure, and meaningful opportunities to contribute to society.",
      "Through our Social Work Internship Program, students are encouraged to develop leadership, teamwork, social responsibility, and a strong sense of patriotism while actively participating in community-focused initiatives.",
      "From Learning to Nation Building: Students get opportunities to participate in large-scale social and nation-building programs, including initiatives conducted in collaboration with government institutions and various organizations.",
    ],
    highlights: [
      "Practical Field Exposure",
      "Community Building",
      "Leadership Development",
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90415-40053",
    coordinators: [
      {
        role: "COORDINATOR",
        name: "GOURAV CHOUDHARY",
        phone: "+91 90415 40053",
        photo: gaurav,
        description:
          "Leading the Social Work Internship Program, mentoring student cohorts in community service, fieldwork, and nation-building initiatives.",
      },
      {
        role: "CO-COORDINATOR",
        name: "GURBAAZ SINGH",
        phone: "+91 99145 92081",
        description:
          "Coordinating student engagement, logistics, and field program activities for intern batches.",
      },
      {
        role: "CO-COORDINATOR",
        name: "JOBANPREET SINGH SOHI",
        phone: "+91 75085 09507",
        photo: jobanSohi,
        description:
          "Assisting with student mentorship, community projects, and ground-level program coordination.",
      },
      {
        role: "CO-COORDINATOR",
        name: "HARSHKAMAL KANSAL",
        phone: "+91 77194 33921",
        photo: harshkamalKansal,
        description:
          "Managing internship partner relations, student documentation, and project schedules.",
      },
      {
        role: "CO-COORDINATOR",
        name: "GURVINDER SINGH",
        phone: "+91 90564 76430",
        photo: gurwinderSingh,
        description:
          "Supporting community outreach, social service campaigns, and fieldwork supervision.",
      },
    ],
  },
};

export const eventsList = Object.values(eventsData);
export const initiativesList = Object.values(initiativesData);
