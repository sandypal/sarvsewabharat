import community from "@/public/community.jpg";
import cricket from "@/public/cricket.jpg";
import marathon from "@/public/marathon.jpg";
import trees from "@/public/trees.jpg";
import blood from "@/public/blood.jpg";
import shikshaGal1 from "@/public/shiksha-gal-1.jpg";
import shikshaGal2 from "@/public/shiksha-gal-2.jpg";
import shikshaGal3 from "@/public/shiksha-gal-3.jpg";
import { StaticImageData } from "next/image";

export type Album = {
    id: string;
    title: string;
    date: string;
    category: string;
    location: string;
    description: string;
    volunteerCount: number;
    coverImage: StaticImageData | string;
    images: (StaticImageData | string)[];
};

export const galleryData: Album[] = [
    {
        id: "cleanliness-drive-2026",
        title: "Cleanliness Drive 2026",
        date: "March 15, 2026",
        category: "Cleanliness Drives",
        location: "Sector 17, Chandigarh",
        description: "Over 150 volunteers came together to clean the central plaza and surrounding areas, collecting over 500kg of waste and spreading awareness about waste segregation.",
        volunteerCount: 154,
        coverImage: community,
        images: [community, trees, marathon],
    },
    {
        id: "blood-donation-camp",
        title: "Mega Blood Donation Camp",
        date: "February 10, 2026",
        category: "Health",
        location: "PGIMER, Chandigarh",
        description: "A successful blood donation drive that collected over 200 units of blood for emergency trauma patients.",
        volunteerCount: 45,
        coverImage: blood,
        images: [blood, community],
    },
    {
        id: "tree-plantation",
        title: "Green City Tree Plantation",
        date: "January 22, 2026",
        category: "Environment",
        location: "Sukhna Lake Park",
        description: "Planting 1,000 indigenous saplings to increase the green cover and fight urban pollution.",
        volunteerCount: 89,
        coverImage: trees,
        images: [trees, community, marathon],
    },
    {
        id: "shiksha-sankalp-dist",
        title: "Shiksha Sankalp Book Distribution",
        date: "December 05, 2025",
        category: "Education",
        location: "Government School, Mohali",
        description: "Distributed free textbooks and winter uniforms to over 500 deserving students.",
        volunteerCount: 32,
        coverImage: shikshaGal1,
        images: [shikshaGal1, shikshaGal2, shikshaGal3],
    },
    {
        id: "operation-sindoor",
        title: "Operation Sindoor Cricket Tournament",
        date: "October 18, 2025",
        category: "Events",
        location: "Sector 16 Stadium",
        description: "Annual community cricket tournament bringing together 32 local teams for a month of sportsmanship.",
        volunteerCount: 120,
        coverImage: cricket,
        images: [cricket, marathon],
    }
];

export const galleryCategories = [
    "All",
    "Community Work",
    "Cleanliness Drives",
    "Education",
    "Environment",
    "Health",
    "Events",
    "Volunteering",
    "Campaigns"
];
