export const site = {
  name: "MeditreTravel",
  tagline: "Custom Mediterranean Journeys",
  description:
    "Tailor-made travel experiences in Greece, Turkey, and Italy designed around culture, nature, history, food, wine, and authentic local life.",
  url: "https://meditretravel.com",
  ogImage: "/images/og-meditretravel.svg",
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const destinationNav = [
  { label: "Greece", href: "/destinations/greece" },
  { label: "Turkey", href: "/destinations/turkey" },
  { label: "Italy", href: "/destinations/italy" },
];

export const tourNav = [
  { label: "Greece Tours", href: "/tours/greece" },
  { label: "Turkey Tours", href: "/tours/turkey" },
  { label: "Italy Tours", href: "/tours/italy" },
];

export const destinations = [
  {
    slug: "greece",
    name: "Greece",
    title: "Greece — Ionian Island Experiences",
    description:
      "Discover Kefalonia, Ithaka, Zakynthos, and nearby Ionian islands through dramatic coastlines, quiet villages, local wine, mythology, and secluded beaches.",
    href: "/destinations/greece",
    ctaLabel: "Explore Greece",
    image: "/images/greece.svg",
    alt: "Sunlit Ionian coastline in Greece",
  },
  {
    slug: "turkey",
    name: "Turkey",
    title: "Turkey — Culture, History & Landscapes",
    description:
      "Experience Turkey beyond the ordinary, from Cappadocia and Göbekli Tepe to Ani, Lake Van, Mount Ararat, Eastern Anatolia, and the cuisine of the southeast.",
    href: "/destinations/turkey",
    ctaLabel: "Explore Turkey",
    image: "/images/turkey.svg",
    alt: "Golden landscapes and ancient stone in Turkey",
  },
  {
    slug: "italy",
    name: "Italy",
    title: "Italy — Northern Elegance",
    description:
      "Explore Friuli Venezia Giulia, Venice, Trieste, vineyards, countryside, coastal cafés, and the refined cultural blend of Northern Italy.",
    href: "/destinations/italy",
    ctaLabel: "Explore Italy",
    image: "/images/italy.svg",
    alt: "Northern Italian coastline with warm light",
  },
];

export const whyUs = [
  {
    title: "Deep local knowledge",
    description:
      "Travel ideas rooted in firsthand experience, regional nuance, and the kind of details that turn a good trip into a memorable one.",
  },
  {
    title: "Personalized itineraries, not generic packages",
    description:
      "Every journey is designed around your pace, interests, and priorities instead of forcing you into a fixed template.",
  },
  {
    title: "Hidden gems and authentic experiences",
    description:
      "We focus on quiet beaches, local tavernas, family wineries, and cultural places that are often missed by typical tour operators.",
  },
  {
    title: "Support from planning to travel",
    description:
      "From the first conversation to the final itinerary, we help shape a trip that feels seamless, thoughtful, and easy to enjoy.",
  },
];

export const experiences = [
  { title: "Cultural & Historical Tours", description: "Archaeology, heritage, and places where history still feels present." },
  { title: "Food & Wine Experiences", description: "Local cuisine, vineyards, tastings, and regional specialties." },
  { title: "Nature & Scenic Landscapes", description: "Coastlines, mountains, valleys, lakes, and open scenery." },
  { title: "Private Custom Trips", description: "Flexible journeys for couples, families, and small groups." },
  { title: "Island & Coastal Escapes", description: "Slow days by the sea, island hopping, and quiet bays." },
  { title: "Slow Travel", description: "More time in fewer places, with room to breathe and explore properly." },
];

export const processSteps = [
  "Share your travel style, dates, and interests.",
  "We design a personalized itinerary.",
  "Refine the plan and travel with confidence.",
];

export const tourCategories = [
  {
    title: "Greece Tours",
    description:
      "Island escapes, Ionian beaches, wine experiences, Ithaka, Zakynthos, and mainland culture.",
    href: "/tours/greece",
    ctaLabel: "View Greece Tours",
    image: "/images/greece.svg",
    alt: "Mediterranean water and whitewashed hillside in Greece",
  },
  {
    title: "Turkey Tours",
    description:
      "Eastern Turkey heritage, Cappadocia landscapes, religious history, and southeastern food journeys.",
    href: "/tours/turkey",
    ctaLabel: "View Turkey Tours",
    image: "/images/turkey.svg",
    alt: "Layered canyons and stone formations in Turkey",
  },
  {
    title: "Italy Tours",
    description:
      "Friuli wine, Venice, Trieste, northern Italian culture, cuisine, and hidden regional beauty.",
    href: "/tours/italy",
    ctaLabel: "View Italy Tours",
    image: "/images/italy.svg",
    alt: "Elegant northern Italian landscape by the sea",
  },
];

export const destinationPageContent = {
  greece: [
    {
      title: "Kefalonia Beaches",
      description: "Myrtos, Fteri, Petani, Antisamos, and hidden coastal spots with striking sea views.",
    },
    {
      title: "Island Hopping",
      description: "Ithaka, Zakynthos, Lefkada, and quieter island experiences with room to explore slowly.",
    },
    {
      title: "Food & Wine",
      description: "Robola wine, seafood, local tavernas, village cuisine, and long Mediterranean meals.",
    },
    {
      title: "Culture & Mythology",
      description: "Ancient stories, local traditions, and authentic island life beyond the obvious stops.",
    },
  ],
  turkey: [
    {
      title: "Cappadocia Landscapes",
      description: "Hot air balloons, cave hotels, volcanic valleys, underground cities, and ancient churches.",
    },
    {
      title: "Ancient Civilizations",
      description: "Göbekli Tepe, Ani ruins, early Christian heritage, and Eastern Anatolian history.",
    },
    {
      title: "Eastern Turkey & Lake Van",
      description: "Mount Ararat, Lake Van, Akdamar Island, and wide-open scenery far from the crowds.",
    },
    {
      title: "Cuisine of the Southeast",
      description: "Gaziantep, kebabs, Antioch spices, Syriac wine, and deeply regional food traditions.",
    },
  ],
  italy: [
    {
      title: "Venice & Culture",
      description: "Historic architecture, canals, artistic heritage, and timeless northern Italian atmosphere.",
    },
    {
      title: "Friuli Countryside & Wine",
      description: "Vineyards, rolling hills, boutique wineries, and refined rural landscapes.",
    },
    {
      title: "Trieste & Coastal Life",
      description: "Austro-Italian charm, sea views, cafés, and a city that feels elegant without trying too hard.",
    },
    {
      title: "Northern Italy Beyond the Crowds",
      description: "Less touristy, more regional, and full of authentic local flavor.",
    },
  ],
} as const;

export const tourPageContent = {
  greece: [
    {
      title: "Ionian Island Escape",
      description: "A relaxed route focused on beaches, small ports, and scenic ferry connections.",
    },
    {
      title: "Kefalonia Food & Wine Journey",
      description: "A slower itinerary centered on vineyards, tavernas, and coastal dinners.",
    },
    {
      title: "Ithaka & Mythology Slow Travel",
      description: "Quiet island days layered with mythology, walks, and authentic village life.",
    },
    {
      title: "Zakynthos Coastal Experience",
      description: "Clifftop viewpoints, hidden bays, and easygoing coastal exploration.",
    },
  ],
  turkey: [
    {
      title: "Cappadocia & Eastern Anatolia Journey",
      description: "Cave landscapes, heritage stops, and a broader eastern route that feels cinematic.",
    },
    {
      title: "Göbekli Tepe and Ancient Civilizations Route",
      description: "A history-forward trip built around archaeology and early civilization sites.",
    },
    {
      title: "Lake Van & Mount Ararat Discovery",
      description: "Wide horizons, remote scenery, and a strong sense of place.",
    },
    {
      title: "Southeast Turkey Food & Culture Tour",
      description: "Markets, regional dishes, and cultural depth in one of the country’s most interesting corners.",
    },
  ],
  italy: [
    {
      title: "Friuli Wine & Countryside Escape",
      description: "A refined route through wineries, countryside roads, and quiet regional towns.",
    },
    {
      title: "Venice, Trieste & Northern Culture",
      description: "A cultured itinerary balancing iconic cities with local atmosphere.",
    },
    {
      title: "Coastal Cafés and Hidden Villages",
      description: "A gentle trip built around sea views, relaxed meals, and small-town stops.",
    },
    {
      title: "Northern Italy Slow Travel Experience",
      description: "More time in fewer places, with an emphasis on comfort, food, and authentic rhythm.",
    },
  ],
} as const;

export const aboutHighlights = [
  "Deep regional expertise",
  "Tailor-made itineraries",
  "Hidden gems and authenticity",
  "Personal support",
];

export const focusRegions = [
  {
    title: "Greece",
    description: "Ionian Islands, Kefalonia, Ithaka, Zakynthos, and nearby coastal routes.",
  },
  {
    title: "Turkey",
    description: "Cappadocia, Eastern Turkey, Göbekli Tepe, Lake Van, and Mount Ararat.",
  },
  {
    title: "Italy",
    description: "Friuli Venezia Giulia, the Venice region, and Trieste.",
  },
];

export const blogPosts = [
  "Best Hidden Beaches in Kefalonia",
  "Why Eastern Turkey Belongs on Your Travel List",
  "A Slow Travel Guide to Friuli Venezia Giulia",
  "How to Plan a Custom Mediterranean Itinerary",
];

export const contactOptions = {
  destinations: [
    { label: "Greece", value: "greece" },
    { label: "Turkey", value: "turkey" },
    { label: "Italy", value: "italy" },
    { label: "Multi-country", value: "multi-country" },
    { label: "Not sure yet", value: "not-sure-yet" },
  ],
  travelers: [
    { label: "1–2", value: "1-2" },
    { label: "3–5", value: "3-5" },
    { label: "6+", value: "6+" },
  ],
  experiences: [
    { label: "Cultural heritage/history", value: "cultural-heritage-history" },
    { label: "Food & wine", value: "food-wine" },
    { label: "Private custom itinerary", value: "private-custom-itinerary" },
    { label: "Island/coastal travel", value: "island-coastal-travel" },
    { label: "Hidden gems", value: "hidden-gems" },
    { label: "Relaxed slow travel", value: "relaxed-slow-travel" },
  ],
  budgets: [
    { label: "Under €1,500", value: "under-1500" },
    { label: "€1,500–€3,000", value: "1500-3000" },
    { label: "€3,000–€5,000", value: "3000-5000" },
    { label: "€5,000+", value: "5000-plus" },
  ],
};