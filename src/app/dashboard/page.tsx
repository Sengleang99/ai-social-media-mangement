"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Clock,
  Zap,
  CheckCircle2,
  RefreshCw,
  Flame,
  Lightbulb,
  ChevronRight,
  Bot,
  Check,
  Copy,
  BarChart3,
  History,
} from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [promoPrompt, setPromoPrompt] = React.useState("");
  const [selectedFormat, setSelectedFormat] = React.useState("carousel");
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>([
    "instagram",
    "facebook",
  ]);
  const [approvedPosts, setApprovedPosts] = React.useState<number[]>([]);
  const [copiedId, setCopiedId] = React.useState<number | null>(null);
  const [isGenerating, setIsGenerating] = React.useState(false);

  const togglePlatform = (p: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p],
    );
  };

  const handleApprove = (id: number) => {
    setApprovedPosts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // 1. Quick Goal Presets for "Create Content"
  const quickGoals = [
    {
      label: "🥐 Give me an idea",
      text: "I want to increase sales this week with a fresh special promotion",
    },
    {
      label: "🎟️ Plan my week",
      text: "I want to plan 5 engaging posts for my local customers this week",
    },
    {
      label: "🌟 Create promotion",
      text: "Create a 20% weekend discount offer for our top product",
    },
    {
      label: "📍 Promote a product",
      text: "Highlight our new seasonal artisanal item with high quality caption and hashtags",
    },
  ];

  // 2. AI Recommendation: Ready-made suggestions to 1-Click Approve
  const aiRecommendations = [
    {
      id: 201,
      tag: "Best Time Recommendation",
      title: "🥐 Weekend Fresh Bakes & Coffee Combo Special",
      platforms: ["instagram", "facebook", "tiktok"],
      caption:
        "Nothing beats fresh morning croissants straight from our oven! 🥐✨ This Saturday & Sunday, get a free cold brew with any bakery box of 4. Tag a friend who needs a coffee run! ☕👇 #LocalBakery #WeekendTreat",
      suggestedTime: "Today at 4:30 PM (Peak commute browsing)",
      reason: "Post on Friday evening to drive +40% higher weekend foot traffic.",
      type: "Photo Carousel + Offer",
      readiness: "98% Engagement Match",
    },
    {
      id: 202,
      tag: "Social Proof Recommendation",
      title: "⭐️ Spotlight: 5-Star Community Review",
      platforms: ["instagram", "facebook"],
      caption:
        "“Hands down the coziest bakery in town. Their sourdough cinnamon rolls are unmatched!” — Thank you Sarah M. for the kind words! ❤️ Stop by this week to try our seasonal batch.",
      suggestedTime: "Tomorrow at 11:45 AM (Lunch break peak)",
      reason: "Testimonials build 3x higher trust with neighborhood customers.",
      type: "Testimonial Card",
      readiness: "Ready to Publish",
    },
  ];

  // 3. Upcoming Scheduled Posts
  const upcomingPosts = [
    {
      id: 301,
      platforms: ["instagram", "facebook"],
      title: "Secret Menu: Honey Lavender Sourdough Drop",
      time: "Today, 5:00 PM",
      status: "Autopilot Queued",
      snippet:
        "Our limited batch Honey Lavender loaf is dropping tomorrow morning at 7 AM. Pre-order link in bio! 🍯🌾",
      format: "Carousel (5 slides)",
    },
    {
      id: 302,
      platforms: ["tiktok", "instagram"],
      title: "Behind the Scenes: 5:00 AM Dough Kneading Routine",
      time: "Tomorrow, 8:30 AM",
      status: "Autopilot Queued",
      snippet:
        "Ever wondered what 5 AM looks like at a small neighborhood bakery? Watch the crust crunch! 🥖🔊",
      format: "Short Reel 9:16",
    },
    {
      id: 303,
      platforms: ["x", "facebook"],
      title: "Weekly Baking Tip: How to keep sourdough crust crisp",
      time: "Sunday, 10:00 AM",
      status: "Scheduled",
      snippet:
        "Never store artisanal bread in plastic! Here are our head baker's top 3 storage secrets 🥖💡",
      format: "Tip + Graphic",
    },
  ];

  // 4. Content Performance Analytics
  const topPerformingPosts = [
    {
      id: 401,
      platform: "instagram",
      title: "Behind-the-scenes: Making 200 Cinnamon Buns from Scratch",
      postedAt: "2 days ago",
      views: "18.4K",
      engagement: "7.8%",
      leads: "42 Inquiries",
      badge: "Top Performer 🔥",
    },
    {
      id: 402,
      platform: "facebook",
      title: "Weekend Flash Special: Free iced matcha with morning box",
      postedAt: "4 days ago",
      views: "12.1K",
      engagement: "6.2%",
      leads: "86 Redemptions",
      badge: "High ROI 💰",
    },
    {
      id: 403,
      platform: "tiktok",
      title: "The crunch test: Fresh sourdough out of the 450°F oven",
      postedAt: "6 days ago",
      views: "34.8K",
      engagement: "9.4%",
      leads: "24 DMs",
      badge: "Viral Reach 🚀",
    },
  ];

  // 5. Recent Content & AI Usage History
  const recentContentHistory = [
    {
      id: 501,
      title: "Artisan Sourdough Care Guide",
      channel: "instagram",
      format: "Caption + Hashtags",
      date: "Generated 2 hrs ago",
      tokens: "240 words",
      status: "Scheduled",
    },
    {
      id: 502,
      title: "Weekend Croissant Promo Banner",
      channel: "facebook",
      format: "AI Promo Graphic",
      date: "Generated 5 hrs ago",
      tokens: "1 Image",
      status: "Published",
    },
    {
      id: 503,
      title: "Morning Routine Video Hook",
      channel: "tiktok",
      format: "Viral Reel Script",
      date: "Generated Yesterday",
      tokens: "180 words",
      status: "Draft",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Welcome & Business Overview Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-zinc-950 via-zinc-900 to-emerald-950 text-white p-6 sm:p-8 shadow-xl border border-zinc-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
              <Bot className="w-3.5 h-3.5 text-emerald-400" />
              <span>AI Social Marketing Autopilot</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              GreenLeaf Bakery & Cafe
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Your autonomous AI marketing partner: Plan, create, schedule, and analyze your social
              growth without needing a marketing expert.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/calendar"
              className="px-4 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-zinc-400" />
              <span>Full Calendar</span>
            </Link>
            <Link
              href="/create"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-zinc-950" />
              <span>Open AI Studio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 1: CREATE CONTENT (AI Prompt Composer & Format Selector) */}
      <section className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                1. Create Content with AI
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Type what you want to promote, or pick a 1-click goal below
              </p>
            </div>
          </div>

          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full hidden sm:inline-block">
            Auto-Formats for all Channels
          </span>
        </div>

        {/* Input Bar */}
        <div className="bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-3 sm:p-4 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="text"
              placeholder="What do you want to share? (e.g., '20% off all catering this weekend', 'New almond croissant recipe')..."
              value={promoPrompt}
              onChange={(e) => setPromoPrompt(e.target.value)}
              className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none"
            />

            <Link
              href={{
                pathname: "/create",
                query: promoPrompt
                  ? { prompt: promoPrompt, format: selectedFormat }
                  : { format: selectedFormat },
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm shadow-emerald-500/20"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Generate Content</span>
            </Link>
          </div>

          {/* Quick AI Goal Pills */}
          <div className="flex items-center gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/80 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-semibold text-zinc-400 shrink-0">
              Quick AI Goals:
            </span>
            {quickGoals.map((goal, idx) => (
              <button
                key={idx}
                onClick={() => setPromoPrompt(goal.text)}
                className="text-[11px] text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-white dark:bg-zinc-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 px-3 py-1.5 rounded-xl transition-colors shrink-0 border border-zinc-200 dark:border-zinc-800 font-medium"
              >
                {goal.label}
              </button>
            ))}
          </div>

          {/* Platform & Format Selectors */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-[11px]">Publish to:</span>
              {["instagram", "facebook", "tiktok", "x"].map((plat) => {
                const active = selectedPlatforms.includes(plat);
                return (
                  <button
                    key={plat}
                    onClick={() => togglePlatform(plat)}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all",
                      active
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-semibold"
                        : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-400 opacity-60",
                    )}
                  >
                    <PlatformIcon platform={plat} className="w-3 h-3" />
                    <span className="capitalize">{plat}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-zinc-400 text-[11px]">Format:</span>
              {[
                { id: "carousel", label: "Carousel" },
                { id: "reel", label: "Reel Script" },
                { id: "promo", label: "Promo Card" },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors",
                    selectedFormat === fmt.id
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold"
                      : "bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                  )}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2-COLUMN MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT 2 COLUMNS: AI RECOMMENDATIONS & UPCOMING POSTS */}
        <div className="lg:col-span-2 space-y-6">
          {/* SECTION 2: AI RECOMMENDATIONS (Smart Suggestions & 1-Click Approve) */}
          <section className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                    2. AI Recommendations for Your Business
                  </h2>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 pl-9">
                  High-converting posts drafted by AI based on local peak browsing hours.
                </p>
              </div>

              <button
                onClick={() => setIsGenerating(true)}
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
              >
                <RefreshCw className={cn("w-3.5 h-3.5", isGenerating && "animate-spin")} />
                <span>Refresh Ideas</span>
              </button>
            </div>

            <div className="space-y-4">
              {aiRecommendations.map((post) => {
                const isApproved = approvedPosts.includes(post.id);
                return (
                  <div
                    key={post.id}
                    className={cn(
                      "p-5 rounded-2xl border transition-all duration-200 space-y-3",
                      isApproved
                        ? "border-emerald-500/60 bg-emerald-500/5 dark:bg-emerald-950/20"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-700",
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center -space-x-1">
                          {post.platforms.map((platform, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300"
                            >
                              <PlatformIcon platform={platform} className="w-3.5 h-3.5" />
                            </div>
                          ))}
                        </div>
                        <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                          {post.title}
                        </h3>
                      </div>

                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 self-start sm:self-auto">
                        {post.tag}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-700 dark:text-zinc-300 bg-white/70 dark:bg-zinc-900/70 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 leading-relaxed">
                      {post.caption}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs">
                      <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                        <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>{post.suggestedTime}</span>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <Link
                          href={`/create?edit=${post.id}`}
                          className="px-3 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                        >
                          Customize
                        </Link>
                        <Button
                          variant={isApproved ? "secondary" : "primary"}
                          size="sm"
                          onClick={() => handleApprove(post.id)}
                          leftIcon={
                            isApproved ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            )
                          }
                        >
                          {isApproved ? "Scheduled for Autopilot" : "1-Click Approve & Schedule"}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 3: UPCOMING POST (Scheduled Queue & Autopilot Timeline) */}
          <section className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                    3. Upcoming Posts
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Content queued to automatically publish to your channels
                  </p>
                </div>
              </div>

              <Link
                href="/calendar"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Full Calendar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingPosts.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="flex items-center -space-x-1 shrink-0 mt-0.5">
                      {item.platforms.map((platform, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300"
                        >
                          <PlatformIcon platform={platform} className="w-3.5 h-3.5" />
                        </div>
                      ))}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                          {item.title}
                        </p>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {item.format}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                        {item.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-zinc-100 dark:border-zinc-800">
                    <div className="text-left sm:text-right">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">
                        {item.time}
                      </span>
                      <span className="text-[10px] font-medium text-zinc-400">{item.status}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button className="px-2.5 py-1 rounded-lg text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT 1 COLUMN: CONTENT PERFORMANCE & RECENT CONTENT AI USAGE */}
        <div className="space-y-6">
          {/* SECTION 4: CONTENT PERFORMANCE (Analytics & Best Performing Posts) */}
          <section className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                  4. Content Performance
                </h2>
              </div>
              <Link
                href="/analytics"
                className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Full Metrics
              </Link>
            </div>

            {/* Quick KPI stats */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
                <p className="text-[10px] text-zinc-400">Monthly Local Reach</p>
                <p className="text-base font-bold text-zinc-900 dark:text-white mt-0.5">54.2K</p>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  +22.8% this month
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
                <p className="text-[10px] text-zinc-400">Customer Leads / DMs</p>
                <p className="text-base font-bold text-zinc-900 dark:text-white mt-0.5">428</p>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  +34.5% leads
                </span>
              </div>
            </div>

            {/* Top Posts */}
            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span>Top Converting Posts</span>
              </p>

              {topPerformingPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-950/40 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <PlatformIcon platform={post.platform} className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                        {post.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                      {post.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-zinc-100 dark:border-zinc-800/60">
                    <span>{post.views} views</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {post.leads}
                    </span>
                    <Link
                      href={{ pathname: "/create", query: { repurpose: post.title } }}
                      className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Re-create with AI →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: RECENT CONTENT & AI USAGE (Credits + History) */}
          <section className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <History className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                  5. Recent Content & AI Usage
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-zinc-400">18.5h saved</span>
            </div>

            {/* AI Credit Usage Bar */}
            <div className="p-3.5 rounded-2xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-zinc-900/5 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900 border border-emerald-500/20 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                  <span>Monthly AI Credit Usage</span>
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  8,450 / 10,000 words
                </span>
              </div>

              <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-emerald-500 to-teal-400 rounded-full"
                  style={{ width: "84.5%" }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] text-zinc-400 pt-0.5">
                <span>38 Captions & Graphics Created</span>
                <Link
                  href="/billing"
                  className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  Upgrade Limit
                </Link>
              </div>
            </div>

            {/* Recent Generation History */}
            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                Recent AI Generations
              </p>

              {recentContentHistory.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-950/40 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-zinc-900 dark:text-white truncate">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 mt-0.5">
                      <span>{item.format}</span>
                      <span>·</span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(item.id, item.title)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
                    title="Copy snippet"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
