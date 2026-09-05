export type CalendarViewMode = "month" | "week" | "queue";

export type PostStatus = "scheduled" | "published" | "draft" | "ai_queued";

export interface ScheduledPost {
  id: string;
  title: string;
  hook: string;
  body: string;
  platforms: ("instagram" | "x" | "tiktok" | "facebook" | "linkedin")[];
  date: string; // YYYY-MM-DD
  time: string; // e.g. "04:45 PM"
  status: PostStatus;
  imageUrl?: string;
  hashtags: string[];
  isAiGenerated?: boolean;
}

export const INITIAL_SCHEDULED_POSTS: ScheduledPost[] = [
  {
    id: "post-1",
    title: "Weekend Sourdough Promo",
    hook: "The biggest secret to foolproof artisan sourdough isn't yeast... it's patience 🥖✨",
    body: "36-Hour slow cold fermentation baked in stone deck ovens at 460°F for maximum crust crunch. 20% off this weekend!",
    platforms: ["instagram", "facebook"],
    date: "2026-08-28",
    time: "04:45 PM",
    status: "scheduled",
    imageUrl:
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80",
    hashtags: ["#ArtisanBakery", "#SourdoughLove", "#FreshBakes"],
    isAiGenerated: true,
  },
  {
    id: "post-2",
    title: "Behind-the-Scenes 5 AM Kneading",
    hook: "Listen to that CRUST crunch! 🔊 Here is why our 5 AM routine goes viral every week...",
    body: "POV: You walk into the bakery at 7 AM and the warm cinnamon rolls just came out of the oven.",
    platforms: ["tiktok", "instagram"],
    date: "2026-08-29",
    time: "07:30 PM",
    status: "scheduled",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    hashtags: ["#BakeryLife", "#FoodTikTok", "#CroissantCrunch"],
    isAiGenerated: true,
  },
  {
    id: "post-3",
    title: "Industrial vs Craft Bread Breakdown",
    hook: "Most bakeries rush their fermentation. We slow ours down to 36 hours. Here's why that changes everything:",
    body: "Commercial bread uses quick yeast + artificial softeners. Slow cold fermentation breaks down gluten naturally.",
    platforms: ["x", "linkedin"],
    date: "2026-08-30",
    time: "12:15 PM",
    status: "scheduled",
    hashtags: ["#smallbusiness", "#craftsmanship", "#artisan"],
    isAiGenerated: true,
  },
  {
    id: "post-4",
    title: "Cold Brew Tasting Notes",
    hook: "Why single-origin Ethiopian cold brew pairs exceptionally well with flaky pain au chocolat ☕🥐",
    body: "Steeped for 24 hours at 38°F with notes of bergamot, candied peach, and dark cocoa.",
    platforms: ["instagram"],
    date: "2026-08-26",
    time: "09:00 AM",
    status: "published",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80",
    hashtags: ["#ColdBrewCoffee", "#SpecialtyCoffee", "#MorningPairing"],
    isAiGenerated: false,
  },
  {
    id: "post-5",
    title: "5-Star Customer Spotlight",
    hook: "'Best cinnamon roll I have had since moving from Paris' — Thank you Sarah M. for the review! ⭐⭐⭐⭐⭐",
    body: "We bake our brioche dough in small 12-roll batches every 45 minutes to guarantee warm fluffiness.",
    platforms: ["facebook", "instagram"],
    date: "2026-08-31",
    time: "05:00 PM",
    status: "ai_queued",
    hashtags: ["#CustomerLove", "#BriocheRolls", "#LocalFavorites"],
    isAiGenerated: true,
  },
  {
    id: "post-6",
    title: "Scaling Organic Reach on Local Small Biz",
    hook: "How our small local bakery scaled organic social reach by 4x without spending a dollar on ads.",
    body: "In a world full of mass-produced goods, customers don't just buy bread — they buy craftsmanship, authenticity, and local connection.",
    platforms: ["linkedin"],
    date: "2026-09-02",
    time: "08:30 AM",
    status: "draft",
    hashtags: ["#SmallBusinessGrowth", "#MarketingStrategy"],
    isAiGenerated: true,
  },
];
