export interface GrowthDataPoint {
  date: string;
  total: number;
  instagram: number;
  tiktok: number;
  x: number;
  facebook: number;
  linkedin: number;
}

export interface PlatformMetric {
  platform: "instagram" | "x" | "tiktok" | "facebook" | "linkedin";
  name: string;
  followers: number;
  followerGrowth: string;
  reach: number;
  reachGrowth: string;
  engagementRate: string;
  topFormat: string;
  publishedCount: number;
}

export interface TopPost {
  id: string;
  title: string;
  hook: string;
  platform: "instagram" | "x" | "tiktok" | "facebook" | "linkedin";
  format: string;
  imageUrl?: string;
  publishedDate: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  ctrScore: number;
}

export interface AiInsight {
  id: string;
  type: "opportunity" | "warning" | "win";
  title: string;
  description: string;
  actionText: string;
  actionPrompt: string;
}

export const TIMELINE_OPTIONS = [
  { id: "7d", label: "Last 7 Days" },
  { id: "30d", label: "Last 30 Days" },
  { id: "90d", label: "Last 90 Days" },
  { id: "1y", label: "This Year" },
];

export const MOCK_GROWTH_DATA: GrowthDataPoint[] = [
  {
    date: "Aug 1",
    total: 4200,
    instagram: 1800,
    tiktok: 1600,
    x: 400,
    facebook: 300,
    linkedin: 100,
  },
  {
    date: "Aug 5",
    total: 6800,
    instagram: 2900,
    tiktok: 2600,
    x: 700,
    facebook: 450,
    linkedin: 150,
  },
  {
    date: "Aug 10",
    total: 11400,
    instagram: 4600,
    tiktok: 4800,
    x: 1100,
    facebook: 650,
    linkedin: 250,
  },
  {
    date: "Aug 15",
    total: 16200,
    instagram: 6800,
    tiktok: 6900,
    x: 1400,
    facebook: 800,
    linkedin: 300,
  },
  {
    date: "Aug 20",
    total: 22800,
    instagram: 9400,
    tiktok: 10100,
    x: 1900,
    facebook: 1000,
    linkedin: 400,
  },
  {
    date: "Aug 25",
    total: 29500,
    instagram: 12200,
    tiktok: 13400,
    x: 2300,
    facebook: 1150,
    linkedin: 450,
  },
  {
    date: "Aug 28",
    total: 38400,
    instagram: 15800,
    tiktok: 17800,
    x: 2800,
    facebook: 1400,
    linkedin: 600,
  },
];

export const MOCK_PLATFORM_METRICS: PlatformMetric[] = [
  {
    platform: "instagram",
    name: "Instagram",
    followers: 12400,
    followerGrowth: "+14.2%",
    reach: 54200,
    reachGrowth: "+28.4%",
    engagementRate: "9.8%",
    topFormat: "Carousel",
    publishedCount: 14,
  },
  {
    platform: "tiktok",
    name: "TikTok",
    followers: 18900,
    followerGrowth: "+32.6%",
    reach: 48600,
    reachGrowth: "+45.1%",
    engagementRate: "14.2%",
    topFormat: "9:16 Reel ASMR",
    publishedCount: 18,
  },
  {
    platform: "x",
    name: "X (Twitter)",
    followers: 4300,
    followerGrowth: "+8.5%",
    reach: 14100,
    reachGrowth: "+12.0%",
    engagementRate: "5.6%",
    topFormat: "Insight Thread",
    publishedCount: 12,
  },
  {
    platform: "facebook",
    name: "Facebook",
    followers: 6800,
    followerGrowth: "+4.1%",
    reach: 8200,
    reachGrowth: "+6.8%",
    engagementRate: "4.1%",
    topFormat: "Community Photo",
    publishedCount: 8,
  },
  {
    platform: "linkedin",
    name: "LinkedIn",
    followers: 2400,
    followerGrowth: "+19.0%",
    reach: 3300,
    reachGrowth: "+22.5%",
    engagementRate: "7.8%",
    topFormat: "Founder Story",
    publishedCount: 6,
  },
];

export const MOCK_TOP_POSTS: TopPost[] = [
  {
    id: "post-1",
    title: "5:00 AM Bakery Routine ASMR",
    hook: "Listen to that CRUST crunch! 🔊 Here is why our 5 AM routine goes viral every week...",
    platform: "tiktok",
    format: "Reel / Video",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    publishedDate: "Aug 27, 2026",
    views: 38400,
    likes: 4210,
    comments: 382,
    shares: 1120,
    ctrScore: 99,
  },
  {
    id: "post-2",
    title: "The 36-Hour Sourdough Secret",
    hook: "The biggest secret to foolproof artisan sourdough isn't yeast... it's patience 🥖✨",
    platform: "instagram",
    format: "Carousel",
    imageUrl:
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80",
    publishedDate: "Aug 26, 2026",
    views: 14200,
    likes: 1428,
    comments: 114,
    shares: 86,
    ctrScore: 98,
  },
  {
    id: "post-3",
    title: "How Small Bakeries Beat Supermarkets",
    hook: "How our small local bakery scaled organic social reach by 4x without spending a dollar on ads.",
    platform: "linkedin",
    format: "Insight Post",
    publishedDate: "Aug 21, 2026",
    views: 18600,
    likes: 1240,
    comments: 92,
    shares: 210,
    ctrScore: 96,
  },
  {
    id: "post-4",
    title: "Why Industrial Bread Bloats You",
    hook: "Most bakeries rush their fermentation. We slow ours down to 36 hours. Here's why that changes everything:",
    platform: "x",
    format: "Thread",
    publishedDate: "Aug 27, 2026",
    views: 8900,
    likes: 624,
    comments: 48,
    shares: 182,
    ctrScore: 97,
  },
];

export const MOCK_AI_INSIGHTS: AiInsight[] = [
  {
    id: "ins-1",
    type: "win",
    title: "Carousels with 36-Hour Fermentation Hooks Are Surging",
    description:
      "Your sourdough preparation posts generated 3.4x higher bookmark rates on Instagram and LinkedIn compared to simple photo bakes.",
    actionText: "Draft Next Carousel Episode",
    actionPrompt:
      "Create a 5-slide carousel revealing 3 common sourdough starter mistakes and how to fix them",
  },
  {
    id: "ins-2",
    type: "opportunity",
    title: "Tuesday 4:45 PM Commute Window is Untapped on TikTok",
    description:
      "Follower activity on TikTok spikes by +42% between 4:30 PM - 5:30 PM, but you currently have 0 posts scheduled in this slot.",
    actionText: "Schedule Peak Post",
    actionPrompt:
      "Create an evening bakery closing ASMR reel showing fresh warm baguettes coming out of stone ovens",
  },
  {
    id: "ins-3",
    type: "opportunity",
    title: "X (Twitter) Threads Converting High Click-Throughs",
    description:
      "Your business craftsmanship thread drove 182 reposts. Repurposing it into a LinkedIn newsletter format could unlock +2,000 professional impressions.",
    actionText: "Repurpose Thread to LinkedIn",
    actionPrompt:
      "Repurpose the craft bread versus industrial bread thread into an in-depth founder newsletter post",
  },
];
