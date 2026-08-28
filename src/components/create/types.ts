export interface AlternativeHook {
  text: string;
  score: number;
}

export interface PostVariant {
  hook: string;
  body: string;
  hashtags: string[];
  alternativeHooks: AlternativeHook[];
  hookScore: number;
  peakTime: string;
}

export interface ToneOption {
  id: string;
  label: string;
  desc: string;
}

export interface InspirationPrompt {
  title: string;
  prompt: string;
  tone: string;
}

export interface PresetImage {
  id: string;
  url: string;
  title: string;
}

// Tone Options
export const TONE_OPTIONS: ToneOption[] = [
  { id: "viral", label: "🔥 Viral Growth", desc: "High CTR hooks & curiosity gaps" },
  { id: "story", label: "📖 Relatable Story", desc: "Human storytelling & emotional resonance" },
  { id: "business", label: "🥐 Friendly Local Business", desc: "Warm, welcoming neighborhood vibe" },
  { id: "contrarian", label: "⚡ Contrarian Insight", desc: "Challenge standard industry myths" },
  { id: "educational", label: "💡 5-Step How-To", desc: "Actionable tips with bullet points" },
];

// Quick Inspiration Presets
export const INSPIRATION_PROMPTS: InspirationPrompt[] = [
  {
    title: "🥐 Weekend Fresh Bakes Promo",
    prompt: "Promote a special weekend 20% discount on artisan sourdough and croissants with free cold brew coffee.",
    tone: "business",
  },
  {
    title: "🥖 Behind-the-Scenes 5 AM Kneading",
    prompt: "Share behind-the-scenes 5:00 AM dough kneading routine and explain why 36-hour fermentation makes bread digestible.",
    tone: "story",
  },
  {
    title: "📉 The 'Post 5x a Day' Myth",
    prompt: "Explain why posting 1 high-signal carousel beats posting 5 rushed posts a day in 2026.",
    tone: "viral",
  },
  {
    title: "⭐ 5-Star Customer Spotlight",
    prompt: "Turn a glowing 5-star customer review about our cinnamon rolls into an engaging social proof post.",
    tone: "story",
  },
];

// Preset Media Assets
export const PRESET_IMAGES: PresetImage[] = [
  {
    id: "bakery-tree",
    url: "/images/onboarding_social_tree.jpg",
    title: "Social Growth Infographic",
  },
  {
    id: "croissant",
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    title: "Fresh Baked Croissants",
  },
  {
    id: "coffee",
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80",
    title: "Artisanal Cold Brew Coffee",
  },
  {
    id: "sourdough",
    url: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80",
    title: "Crisp Artisan Sourdough",
  },
];

// Initial Generated Posts Matrix
export const DEFAULT_POSTS: Record<string, PostVariant> = {
  instagram: {
    hook: "The biggest secret to foolproof artisan sourdough isn't yeast... it's patience 🥖✨",
    body: "Here is what happens inside our bakery ovens at 5:00 AM every single morning:\n\n1. 36-Hour Slow Cold Fermentation (gentle on your digestion)\n2. High-Hydration Hand Fold Technique\n3. Baked in stone deck ovens at 460°F for maximum crust crunch\n\nDrop a ❤️ if you can almost smell this loaf through your screen!",
    hashtags: ["#ArtisanBakery", "#SourdoughLove", "#FreshBakes", "#LocalCafe", "#FoodieGram"],
    hookScore: 98,
    peakTime: "Today at 4:45 PM (Peak commute browsing)",
    alternativeHooks: [
      { text: "Why 90% of homemade sourdough fails (and how stone baking fixes it) 👇", score: 96 },
      { text: "Stop buying supermarket sandwich bread until you read this! 🍞🚫", score: 94 },
      { text: "What 5:00 AM looks like at a small neighborhood bakery ✨🥖", score: 91 },
    ],
  },
  x: {
    hook: "Most bakeries rush their fermentation. We slow ours down to 36 hours. Here's why that changes everything:",
    body: "1/ Commercial bread uses quick yeast + artificial softeners\n2/ Slow cold fermentation breaks down gluten naturally\n3/ Result: zero bloated feeling, crisp crust, deep nutty flavor\n\nQuality ingredients + time always beats shortcuts. 🌾🥖",
    hashtags: ["#buildinpublic", "#smallbusiness", "#craftsmanship", "#artisan"],
    hookScore: 97,
    peakTime: "Today at 12:15 PM (Lunch hour peak)",
    alternativeHooks: [
      { text: "The 36-hour sourdough playbook that increased our weekend sales by 3x:", score: 95 },
      { text: "Stop optimizing for volume. Optimize for craftsmanship. Case in point:", score: 92 },
      { text: "Why artisanal bread will never be replaced by industrial automation:", score: 89 },
    ],
  },
  tiktok: {
    hook: "Listen to that CRUST crunch! 🔊 Here is why our 5 AM routine goes viral every week...",
    body: "POV: You walk into the bakery at 7 AM and the warm cinnamon rolls just came out of the oven 🥐🔥\n\nThis weekend only: get a free artisanal cold brew with any bakery box of 4!\n\nTag the friend who owes you a coffee run! ☕👇",
    hashtags: ["#BakeryLife", "#FoodTikTok", "#CroissantCrunch", "#ViralBakes", "#LocalEats"],
    hookScore: 99,
    peakTime: "Tonight at 7:30 PM (Evening leisure scroll)",
    alternativeHooks: [
      { text: "Tell me you love carbs without telling me you love carbs... 🥐🤤", score: 97 },
      { text: "Rating our fresh morning bakes from 1 to 10 (Sourdough edition) 🔥", score: 93 },
      { text: "The secret menu item you must order this Saturday morning 👇", score: 90 },
    ],
  },
  facebook: {
    hook: "🥐 Fresh Out of the Oven! Weekend Community Special at GreenLeaf Bakery & Cafe",
    body: "Good morning neighborhood friends! Starting this Friday through Sunday, we are offering our beloved 'Bakery Box & Cold Brew' combo at 20% off.\n\nEverything is baked from scratch with organic stone-ground flour and 100% natural sourdough culture.\n\n📍 Visit us on Main Street or tap the link to reserve your weekend pickup box!",
    hashtags: ["#CommunityBakery", "#WeekendSpecial", "#SupportLocal", "#FreshCroissants"],
    hookScore: 95,
    peakTime: "Tomorrow at 8:00 AM (Morning breakfast feed)",
    alternativeHooks: [
      { text: "Who needs a warm cinnamon roll & fresh iced latte this weekend? 🙋‍♀️☕", score: 94 },
      { text: "Support your local baker! Special 20% savings for all our Facebook community:", score: 91 },
      { text: "Meet the team behind your morning artisan sourdough bread 🥖❤️", score: 88 },
    ],
  },
  linkedin: {
    hook: "How our small local bakery scaled organic social reach by 4x without spending a dollar on ads.",
    body: "In a world full of mass-produced goods, customers don't just buy bread — they buy craftsmanship, authenticity, and local connection.\n\nHere are 3 principles we applied to our organic multi-channel strategy:\n\n1. Radical Transparency: Show the raw 5 AM process\n2. Omnichannel Formatting: Native short videos on TikTok, high-res photos on IG, community notes on Facebook\n3. Algorithmic Peak Timing: Publishing when our exact customers take their coffee breaks\n\nWhat is your favorite local small business story?",
    hashtags: ["#SmallBusinessGrowth", "#MarketingStrategy", "#Entrepreneurship", "#OrganicReach"],
    hookScore: 96,
    peakTime: "Today at 9:00 AM (Workday kickoff)",
    alternativeHooks: [
      { text: "Craftsmanship as a competitive moat: Lessons from running a modern artisanal bakery.", score: 95 },
      { text: "Why signal-to-noise ratio matters more than post volume in 2026 marketing.", score: 92 },
      { text: "Building an authentic local brand in an era of automated generic content.", score: 90 },
    ],
  },
};
