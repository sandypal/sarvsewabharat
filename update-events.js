const fs = require('fs');

let content = fs.readFileSync('lib/events-data.ts', 'utf8');

// Update EventDetails type
content = content.replace(
  /contactPhone: string;\n\};/,
  `contactPhone: string;\n  gallery?: StaticImageData[];\n  pressReleases?: { title: string; date: string; url: string }[];\n};`
);

// Update existing events
content = content.replace(
  /"operation-sindoor": \{([^}]*?)title: "Operation Sindoor Cricket Cup"([^}]*?)date: "Coming Soon"([^}]*?)\},/g,
  `"operation-sindoor": {$1title: "Operation Sindoor Cricket Cup 2025"$2date: "2025"$3,
    gallery: [cricket, marathon, sansad],
    pressReleases: [
      { title: "Operation Sindoor 2025 Concludes", date: "Nov 2025", url: "#" }
    ]
  },`
);

content = content.replace(
  /"run-for-sindhu": \{([^}]*?)title: "Run For Sindhu Marathon"([^}]*?)date: "Coming Soon"([^}]*?)\},/g,
  `"run-for-sindhu": {$1title: "Run For Sindhu Marathon 2025"$2date: "2025"$3,
    gallery: [marathon, blood, trees],
    pressReleases: [
      { title: "Thousands Run for Sindhu", date: "Dec 2025", url: "#" }
    ]
  },`
);

content = content.replace(
  /date: "Coming Soon",\n    location: "Coming Soon",\n    img: sansad,/g,
  `date: "2024",\n    location: "New Delhi",\n    img: sansad,\n    gallery: [sansad, shiksha],`
);

content = content.replace(
  /date: "Coming Soon",\n    location: "Coming Soon",\n    img: blood,/g,
  `date: "2023",\n    location: "Ludhiana",\n    img: blood,\n    gallery: [blood, shakti],`
);

// Add Operation Sindoor 2.0
const newEvent = `
  "operation-sindoor-2": {
    slug: "operation-sindoor-2",
    title: "Operation Sindoor 2.0",
    tag: "Cricket",
    tagline: "The Biggest Community Cricket Tournament Returns",
    date: "October 2026",
    location: "Ludhiana, Punjab",
    img: cricket,
    description: [
      "Operation Sindoor 2.0 is back! Bigger and better. We are bringing the community together once again for an unforgettable cricket tournament.",
      "Join us this October for a month of sportsmanship, thrilling matches, and neighbourhood pride."
    ],
    highlights: [
      "32 teams from across the state",
      "Live broadcast of all matches",
      "Celebrity guest appearances",
      "Enhanced prize pool and MVP awards"
    ],
    contactEmail: "info@sarvsewabharat.org",
    contactPhone: "+91-90563-33759",
    gallery: [cricket, marathon],
    pressReleases: [
      { title: "Operation Sindoor 2.0 Announced", date: "Sep 2026", url: "#" }
    ]
  },
`;

content = content.replace(/export const eventsData: Record<string, EventDetails> = {/, `export const eventsData: Record<string, EventDetails> = {${newEvent}`);

fs.writeFileSync('lib/events-data.ts', content);
