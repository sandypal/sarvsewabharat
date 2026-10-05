const fs = require('fs');

let content = fs.readFileSync('lib/events-data.ts', 'utf8');

const newShiksha = `  "shiksha-sankalp": {
    slug: "shiksha-sankalp",
    title: "Shiksha Sankalp: One Lakh Students, One Lakh Smiles",
    tag: "National Education Initiative",
    tagline: "A focused education movement helping deserving students continue learning with dignity, confidence, and opportunity.",
    date: "Ongoing",
    location: "Pan-India (28 States, 8 UTs)",
    img: shiksha,
    description: [
      "Shiksha Sankalp is the core education initiative of Sarv Sewa Sashktikarn Sangthan. We support deserving students through higher education fee assistance, scholarships, study material, books, stationery, mentorship, and academic support.",
      "Education with purpose. Impact with dignity. We are committed to ensuring that every deserving child gets access to quality education without financial barriers.",
      "Our Promise: Nurture dreams. Build confidence. Create pathways to opportunity. Every deserving student should be able to keep learning in a national mission rooted in access, inclusion, and social mobility.",
      "We also invite Youth Leaders to become State Education Ambassadors, and corporate partners to join hands for measurable CSR education impact."
    ],
    highlights: [
      "Higher Education & Scholarships",
      "Books, Study Materials & Stationery",
      "Career Guidance & Mentorship",
      "Personality Growth & Life Skills",
      "Rural Empowerment & Peer Support",
      "Fully Compliant: 12A, 80G, CSR-1, NGO Darpan"
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-98551-09159",
  },`;

content = content.replace(/  "shiksha-sankalp": \{[\s\S]*?contactPhone: "\+91-90563-33759",\n  \},/, newShiksha);

fs.writeFileSync('lib/events-data.ts', content);
