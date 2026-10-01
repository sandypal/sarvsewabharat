const fs = require('fs');

let content = fs.readFileSync('lib/events-data.ts', 'utf8');

const runForSindhuBase = `    tag: "Marathon",
    tagline: "10K Marathon for Education",
    location: "Ludhiana",
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
`;

const events = [
  { slug: "run-for-sindhu-1", title: "Run For Sindhu Marathon 1.0", date: "2023" },
  { slug: "run-for-sindhu-2", title: "Run For Sindhu Marathon 2.0", date: "2024" },
  { slug: "run-for-sindhu-3", title: "Run For Sindhu Marathon 3.0", date: "2025" },
  { slug: "run-for-sindhu-4", title: "Run For Sindhu Marathon 4.0", date: "2026" },
];

let eventsString = '';
for (const e of events) {
  eventsString += `  "${e.slug}": {
    slug: "${e.slug}",
    title: "${e.title}",
    date: "${e.date}",
${runForSindhuBase}    pressReleases: [
      { title: "${e.title} Highlights", date: "Dec ${e.date}", url: "#" }
    ]
  },\n`;
}

// Remove the old run-for-sindhu block
// It starts with `  "run-for-sindhu": {` and ends before `  "sansad-darshan-yatra": {`
content = content.replace(/  "run-for-sindhu": \{[\s\S]*?  "sansad-darshan-yatra": \{/, eventsString + '  "sansad-darshan-yatra": {');

fs.writeFileSync('lib/events-data.ts', content);
