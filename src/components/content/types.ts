export type ContentStatus = "published" | "scheduled" | "draft" | "evergreen";
export type ContentFormat = "carousel" | "reel" | "image" | "thread" | "promo";
export type SocialPlatform = "instagram" | "x" | "tiktok" | "facebook" | "linkedin";

export interface ContentItem {
  id: string;
  title: string;
  hook: string;
  body: string;
  format: ContentFormat;
  status: ContentStatus;
  platforms: SocialPlatform[];
  imageUrl?: string;
  hashtags: string[];
  createdAt: string;
  publishedAt?: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  ctrScore: number;
  engagementRate: string;
}

export const INITIAL_CONTENT_ITEMS: ContentItem[] = [
  {
    id: "cnt-1",
    title: "The 36-Hour Sourdough Secret",
    hook: "The biggest secret to foolproof artisan sourdough isn't yeast... it's patience 🥖✨",
    body: "36-Hour slow cold fermentation baked in stone deck ovens at 460°F for maximum crust crunch. Gentle on digestion, rich in deep nutty flavor.",
    format: "carousel",
    status: "published",
    platforms: ["instagram", "facebook"],
    imageUrl: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80",
    hashtags: ["#ArtisanBakery", "#SourdoughLove", "#FreshBakes", "#StoneOven"],
    createdAt: "2026-08-24",
    publishedAt: "2026-08-26",
    views: 14200,
    likes: 1428,
    comments: 114,
    shares: 86,
    ctrScore: 98,
    engagementRate: "11.4%",
  },
  {
    id: "cnt-2",
    title: "5:00 AM Bakery Routine ASMR",
    hook: "Listen to that CRUST crunch! 🔊 Here is why our 5 AM routine goes viral every week...",
    body: "POV: You walk into the bakery at 7 AM and warm cinnamon rolls just came out of the oven. Flaky layers, melted brown sugar glaze.",
    format: "reel",
    status: "published",
    platforms: ["tiktok", "instagram"],
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    hashtags: ["#BakeryLife", "#FoodTikTok", "#CroissantCrunch", "#ASMR"],
    createdAt: "2026-08-25",
    publishedAt: "2026-08-27",
    views: 38400,
    likes: 4210,
    comments: 382,
    shares: 1120,
    ctrScore: 99,
    engagementRate: "14.8%",
  },
  {
    id: "cnt-3",
    title: "Why Industrial Bread Bloats You",
    hook: "Most bakeries rush their fermentation. We slow ours down to 36 hours. Here's why that changes everything:",
    body: "1/ Commercial bread uses quick yeast + artificial softeners\n2/ Slow cold fermentation breaks down gluten naturally\n3/ Result: zero bloated feeling, crisp crust",
    format: "thread",
    status: "published",
    platforms: ["x", "linkedin"],
    hashtags: ["#buildinpublic", "#smallbusiness", "#craftsmanship"],
    createdAt: "2026-08-25",
    publishedAt: "2026-08-27",
    views: 8900,
    likes: 624,
    comments: 48,
    shares: 182,
    ctrScore: 97,
    engagementRate: "9.6%",
  },
  {
    id: "cnt-4",
    title: "Single-Origin Cold Brew Guide",
    hook: "Why single-origin Ethiopian cold brew pairs exceptionally well with flaky pain au chocolat ☕🥐",
    body: "Steeped for 24 hours at 38°F with notes of bergamot, candied peach, and dark cocoa. The ultimate morning pairing.",
    format: "image",
    status: "scheduled",
    platforms: ["instagram"],
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80",
    hashtags: ["#ColdBrewCoffee", "#SpecialtyCoffee", "#MorningPairing"],
    createdAt: "2026-08-27",
    views: 0,
    likes: 0,
    comments: 0,
    shares: 0,
    ctrScore: 94,
    engagementRate: "Pending",
  },
  {
    id: "cnt-5",
    title: "Weekend 20% Discount Special Promo",
    hook: "🥐 Fresh Out of the Oven! Weekend Community Special at GreenLeaf Bakery & Cafe",
    body: "Good morning neighborhood friends! Starting this Friday through Sunday, we are offering our beloved 'Bakery Box & Cold Brew' combo at 20% off.",
    format: "promo",
    status: "scheduled",
    platforms: ["facebook", "instagram"],
    imageUrl: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80",
    hashtags: ["#CommunityBakery", "#WeekendSpecial", "#SupportLocal"],
    createdAt: "2026-08-28",
    views: 0,
    likes: 0,
    comments: 0,
    shares: 0,
    ctrScore: 95,
    engagementRate: "Pending",
  },
  {
    id: "cnt-6",
    title: "How Small Bakeries Beat Supermarkets",
    hook: "How our small local bakery scaled organic social reach by 4x without spending a dollar on ads.",
    body: "In a world full of mass-produced goods, customers don't just buy bread — they buy craftsmanship, authenticity, and local connection.",
    format: "thread",
    status: "evergreen",
    platforms: ["linkedin"],
    hashtags: ["#SmallBusinessGrowth", "#MarketingStrategy", "#Entrepreneurship"],
    createdAt: "2026-08-20",
    publishedAt: "2026-08-21",
    views: 18600,
    likes: 1240,
    comments: 92,
    shares: 210,
    ctrScore: 96,
    engagementRate: "8.3%",
  },
  {
    id: "cnt-7",
    title: "5-Star Review: Best Cinnamon Rolls in City",
    hook: "'Best cinnamon roll I have had since moving from Paris' — Thank you Sarah M. for the review! ⭐⭐⭐⭐⭐",
    body: "We bake our brioche dough in small 12-roll batches every 45 minutes to guarantee warm fluffiness.",
    format: "image",
    status: "draft",
    platforms: ["instagram", "facebook"],
    hashtags: ["#CustomerLove", "#BriocheRolls", "#LocalFavorites"],
    createdAt: "2026-08-28",
    views: 0,
    likes: 0,
    comments: 0,
    shares: 0,
    ctrScore: 92,
    engagementRate: "Draft",
  },
];
