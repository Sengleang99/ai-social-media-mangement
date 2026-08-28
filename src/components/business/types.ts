export interface BusinessProfile {
  name: string;
  tagline: string;
  industry: string;
  businessType: string;
  website: string;
  phone: string;
  email: string;
  address: string;
  operatingHours: string;
  foundedYear: number;
  story: string;
  idealCustomer: string;
}

export interface ConnectedAccount {
  id: string;
  platform: "instagram" | "x" | "tiktok" | "facebook" | "linkedin" | "google";
  name: string;
  handle: string;
  status: "connected" | "disconnected" | "action_needed";
  followers: number;
  lastSync: string;
}

export interface KnowledgeSnippet {
  id: string;
  category: "product" | "brand_voice" | "location" | "faq";
  title: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Marketing Lead" | "Creator" | "Store Manager";
  avatar: string;
  status: "active" | "invited";
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: "google" | "yelp" | "facebook";
  content: string;
  sentiment: "positive" | "neutral" | "negative";
}

export const INITIAL_BUSINESS_PROFILE: BusinessProfile = {
  name: "GreenLeaf Bakery & Cafe",
  tagline: "Authentic 36-Hour Fermented Artisan Sourdough & Specialty Cold Brew",
  industry: "Food & Beverage / Artisan Bakery",
  businessType: "Local Brick & Mortar + Online Pre-orders",
  website: "https://greenleafbakery.com",
  phone: "+1 (555) 234-5678",
  email: "hello@greenleafbakery.com",
  address: "142 Main Street, Downtown Arts District",
  operatingHours: "Tue - Sun: 6:30 AM - 4:00 PM (Closed Mondays)",
  foundedYear: 2021,
  story: "Founded by two passionate bakers obsessed with slow fermentation and locally milled heirloom grains.",
  idealCustomer: "Neighborhood foodies, quality-conscious coffee lovers, and health-focused sourdough enthusiasts.",
};

export const INITIAL_CONNECTED_ACCOUNTS: ConnectedAccount[] = [
  {
    id: "acc-1",
    platform: "instagram",
    name: "GreenLeaf Bakery Official",
    handle: "@greenleaf.bakery",
    status: "connected",
    followers: 12400,
    lastSync: "2 mins ago",
  },
  {
    id: "acc-2",
    platform: "tiktok",
    name: "GreenLeaf Bakes ASMR",
    handle: "@greenleaf_bakes",
    status: "connected",
    followers: 18900,
    lastSync: "10 mins ago",
  },
  {
    id: "acc-3",
    platform: "x",
    name: "GreenLeaf Bakery",
    handle: "@greenleaf_bakes",
    status: "connected",
    followers: 4300,
    lastSync: "15 mins ago",
  },
  {
    id: "acc-4",
    platform: "facebook",
    name: "GreenLeaf Bakery & Cafe",
    handle: "greenleafbakerycafe",
    status: "connected",
    followers: 6800,
    lastSync: "1 hour ago",
  },
  {
    id: "acc-5",
    platform: "linkedin",
    name: "GreenLeaf Bakery & Foodworks",
    handle: "greenleaf-foodworks",
    status: "connected",
    followers: 2400,
    lastSync: "3 hours ago",
  },
  {
    id: "acc-6",
    platform: "google",
    name: "GreenLeaf Bakery on Google Maps",
    handle: "GreenLeaf Bakery Main St",
    status: "connected",
    followers: 348,
    lastSync: "Live 4.9★",
  },
];

export const INITIAL_KNOWLEDGE_SNIPPETS: KnowledgeSnippet[] = [
  {
    id: "ks-1",
    category: "product",
    title: "36-Hour Cold Fermentation Method",
    content: "We never use commercial chemical yeast. Every loaf ferments for 36 hours at 38°F, making our sourdough easily digestible for gluten-sensitive patrons.",
  },
  {
    id: "ks-2",
    category: "brand_voice",
    title: "Neighborhood Warmth & Craftsmanship",
    content: "Our voice is warm, educational, authentic, and proud of our 5:00 AM baking craft without sounding corporate or robotic.",
  },
  {
    id: "ks-3",
    category: "location",
    title: "Free Customer Parking & Patio",
    content: "Located right next to the historic town clock tower. Free 2-hour customer parking behind the bakery with outdoor dog-friendly seating.",
  },
  {
    id: "ks-4",
    category: "faq",
    title: "Weekend Pre-Order Cutoff",
    content: "Weekend bakery boxes must be reserved on our website by Friday 5:00 PM for Saturday/Sunday morning pickups.",
  },
];

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "Sarah Jenkins",
    email: "sarah@greenleafbakery.com",
    role: "Owner",
    avatar: "SJ",
    status: "active",
  },
  {
    id: "tm-2",
    name: "Marcus Vance",
    email: "marcus@greenleafbakery.com",
    role: "Marketing Lead",
    avatar: "MV",
    status: "active",
  },
  {
    id: "tm-3",
    name: "Elena Rostova",
    email: "elena@greenleafbakery.com",
    role: "Creator",
    avatar: "ER",
    status: "active",
  },
];

export const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Claire D.",
    rating: 5,
    date: "Yesterday",
    source: "google",
    content: "Best cinnamon rolls and sourdough in the state. You can taste the 36-hour fermentation difference. The staff makes you feel like family every morning!",
    sentiment: "positive",
  },
  {
    id: "rev-2",
    author: "David K.",
    rating: 5,
    date: "3 days ago",
    source: "yelp",
    content: "The cold brew paired with the flaky almond croissant is legitimately life-changing. 10/10 recommendation for weekend mornings.",
    sentiment: "positive",
  },
  {
    id: "rev-3",
    author: "Maya Lin",
    rating: 5,
    date: "1 week ago",
    source: "google",
    content: "Ordered a 12-pack bakery box for our office breakfast and everyone was raving about the crunch on the baguettes!",
    sentiment: "positive",
  },
];
