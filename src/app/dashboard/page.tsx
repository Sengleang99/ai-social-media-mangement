"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Calendar,
  Users,
  Eye,
  ArrowUpRight,
  Clock,
  MoreVertical,
  Plus,
  Zap,
  CheckCircle2,
  Share2,
  RefreshCw,
  SlidersHorizontal,
  Flame,
  Lightbulb,
  ChevronRight,
  Clock3,
  Bot,
  Store,
  MessageSquare,
  ThumbsUp,
  DollarSign,
  Target,
  ShoppingBag,
  Check,
  Building,
  Wand2,
} from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const [businessGoal, setBusinessGoal] = React.useState("sales");
  const [promoPrompt, setPromoPrompt] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [approvedPosts, setApprovedPosts] = React.useState<number[]>([]);

  const handleApprove = (id: number) => {
    setApprovedPosts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Small Business specific KPIs
  const businessStats = [
    {
      label: "Marketing Time Saved",
      value: "18.5 hrs",
      change: "+4.2 hrs",
      isPositive: true,
      subtext: "this month vs manual work",
      icon: Clock3,
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    },
    {
      label: "Customer Inquiries & Clicks",
      value: "428 clicks",
      change: "+34.5%",
      isPositive: true,
      subtext: "leads & store visits",
      icon: Target,
      iconColor: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
    },
    {
      label: "Local Audience Reached",
      value: "54,290",
      change: "+22.8%",
      isPositive: true,
      subtext: "potential local customers",
      icon: Users,
      iconColor: "text-purple-600 dark:text-purple-400 bg-purple-500/10",
    },
    {
      label: "Posts on Autopilot",
      value: "16 Scheduled",
      change: "4 this week",
      isPositive: true,
      subtext: "across 5 social channels",
      icon: Bot,
      iconColor: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
    },
  ];

  // AI-generated suggestions specifically designed for small business owners
  const aiDraftedSuggestions = [
    {
      id: 101,
      goal: "Weekend Promotion",
      title: "🥐 Weekend Fresh Bakes & Coffee Combo Special",
      platforms: ["instagram", "facebook", "tiktok"],
      caption:
        "Nothing beats fresh morning croissants straight from our oven! 🥐✨ This Saturday & Sunday, get a free cold brew with any bakery box of 4. Tag a friend who needs a coffee run! ☕👇",
      suggestedTime: "Friday at 4:30 PM (Peak commute browsing)",
      imageTag: "Fresh baked pastries + artisan latte",
      type: "Photo Carousel + Offer",
      readiness: "98% High Engagement Score",
    },
    {
      id: 102,
      goal: "Customer Review",
      title: "⭐️ Spotlight: 5-Star Community Love",
      platforms: ["instagram", "facebook"],
      caption:
        "“Hands down the coziest spot in town. Their sourdough cinnamon rolls are unmatched!” — Thank you Sarah M. for making our week! ❤️ Stop by this week to try our secret seasonal glaze.",
      suggestedTime: "Wednesday at 11:45 AM (Lunch break peak)",
      imageTag: "Customer review card with bakery background",
      type: "Social Proof Card",
      readiness: "Ready to Publish",
    },
    {
      id: 103,
      goal: "Behind the Scenes",
      title: "🎬 5:00 AM Dough Kneading & Oven Routine",
      platforms: ["tiktok", "instagram"],
      caption:
        "Ever wondered what 5 AM looks like at a small neighborhood bakery? 🥖 Hard work, pure butter, and passion in every loaf. Watch till the end for the crust crunch! 🔊",
      suggestedTime: "Thursday at 8:00 AM (Morning breakfast rush)",
      imageTag: "9:16 Video Script + AI Voiceover",
      type: "Viral Reel Script",
      readiness: "AI Audio & Captions Formatted",
    },
  ];

  const connectedChannels = [
    {
      platform: "instagram",
      handle: "@greenleaf_bakery",
      channelType: "Instagram Business",
      followers: "8.4K",
      status: "Automated",
    },
    {
      platform: "facebook",
      handle: "GreenLeaf Bakery & Cafe",
      channelType: "Facebook Page",
      followers: "12.2K",
      status: "Automated",
    },
    {
      platform: "tiktok",
      handle: "@greenleafbakery",
      channelType: "TikTok Business",
      followers: "15.9K",
      status: "Automated",
    },
    {
      platform: "x",
      handle: "@greenleaf_cafe",
      channelType: "X Account",
      followers: "3.1K",
      status: "Automated",
    },
  ];

  const scheduledTimeline = [
    {
      id: 1,
      platforms: ["instagram", "facebook"],
      title: "Secret Menu: Honey Lavender Sourdough",
      time: "Today at 5:00 PM",
      status: "Autopilot Queued",
      snippet: "Our limited batch Honey Lavender loaf is dropping tomorrow morning at 7 AM...",
    },
    {
      id: 2,
      platforms: ["tiktok", "instagram"],
      title: "How we source organic flour from local farmers",
      time: "Tomorrow at 9:30 AM",
      status: "Autopilot Queued",
      snippet: "Supporting local agriculture matters! Meet John from Valley Farm who supplies our grain...",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Small Business AI Marketing Director Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-zinc-950 via-zinc-900 to-emerald-950 text-white p-6 sm:p-8 shadow-xl border border-zinc-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Header & Business Identity */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2.5">
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your AI Marketing Autopilot is Active</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                GreenLeaf Bakery & Cafe
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
                We manage your social strategy, captions, graphics, and timing so you can focus on running your business—no marketing experience needed.
              </p>
            </div>

            {/* Quick 1-Click Weekly Plan Generator */}
            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                href="/create?mode=week-plan"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                <Wand2 className="w-4 h-4" />
                <span>Generate 7-Day Content Plan</span>
              </Link>
            </div>
          </div>

          {/* AI Content Prompt Composer (Tailored for Small Business Goals) */}
          <div className="bg-zinc-950/70 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-3 sm:p-4 shadow-inner space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="What do you want to promote? (e.g. 'Weekend 15% discount on catering', 'New gluten-free muffin flavor', 'Hiring barista')..."
                  value={promoPrompt}
                  onChange={(e) => setPromoPrompt(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                />
              </div>

              <Link
                href={{
                  pathname: "/create",
                  query: promoPrompt ? { prompt: promoPrompt, goal: businessGoal } : {},
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <Zap className="w-3.5 h-3.5 fill-zinc-950" />
                <span>Create & Schedule</span>
              </Link>
            </div>

            {/* Goal Presets for Small Business */}
            <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/60 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-medium text-zinc-400 shrink-0">
                Quick AI Goals:
              </span>
              {[
                { label: "🥐 Promote New Menu / Item", text: "Announce our new seasonal special menu with photos" },
                { label: "🎟️ Special Weekend Offer", text: "Create a weekend discount offer to boost foot traffic" },
                { label: "🌟 Share Customer Review", text: "Turn a 5-star customer review into an aesthetic testimonial post" },
                { label: "📍 Local Community Event", text: "Invite neighborhood locals to our upcoming workshop" },
              ].map((goal, idx) => (
                <button
                  key={idx}
                  onClick={() => setPromoPrompt(goal.text)}
                  className="text-[11px] text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 px-3 py-1 rounded-lg transition-colors shrink-0 border border-zinc-800"
                >
                  {goal.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Performance KPIs (No confusing marketing jargon) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {businessStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </span>
                <div className={cn("p-2 rounded-xl", stat.iconColor)}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-3">
                <p className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="inline-flex items-center text-xs font-semibold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <ArrowUpRight className="w-3 h-3 mr-0.5" />
                    {stat.change}
                  </span>
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    {stat.subtext}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: AI Ready-to-Approve Content & Business Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Ready-to-Approve AI Content Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    AI Suggested Posts for Your Business
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Ready to Review
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  AI drafted these based on your business type, local peak hours, and brand tone.
                </p>
              </div>

              <button
                onClick={() => setIsGenerating(true)}
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1.5 self-start sm:self-auto"
              >
                <RefreshCw className={cn("w-3.5 h-3.5", isGenerating && "animate-spin")} />
                <span>Generate 3 New Ideas</span>
              </button>
            </div>

            {/* AI Generated Post Cards */}
            <div className="space-y-4">
              {aiDraftedSuggestions.map((post) => {
                const isApproved = approvedPosts.includes(post.id);
                return (
                  <div
                    key={post.id}
                    className={cn(
                      "p-5 rounded-2xl border transition-all duration-200 space-y-3",
                      isApproved
                        ? "border-emerald-500/50 bg-emerald-500/5 dark:bg-emerald-950/20"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-700"
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center -space-x-1">
                          {post.platforms.map((platform, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-2xs text-zinc-700 dark:text-zinc-300"
                            >
                              <PlatformIcon platform={platform} className="w-3.5 h-3.5" />
                            </div>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-zinc-900 dark:text-white">
                          {post.title}
                        </span>
                      </div>

                      <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md self-start sm:self-auto">
                        {post.type}
                      </span>
                    </div>

                    {/* Caption Preview */}
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800">
                      {post.caption}
                    </p>

                    {/* Recommended Time & 1-Click Action */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                        <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Best time: <strong>{post.suggestedTime}</strong></span>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <Link
                          href={`/create?edit=${post.id}`}
                          className="px-3 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          Customize
                        </Link>
                        <button
                          onClick={() => handleApprove(post.id)}
                          className={cn(
                            "px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs",
                            isApproved
                              ? "bg-emerald-600 text-white"
                              : "bg-emerald-500 hover:bg-emerald-600 text-white"
                          )}
                        >
                          {isApproved ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Scheduled for Autopilot</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>1-Click Approve & Schedule</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Autopilot Timeline */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  Publishing Queue (Autopilot)
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Posts that will automatically publish to your connected social channels
                </p>
              </div>

              <Link
                href="/calendar"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>View Full Calendar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {scheduledTimeline.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex items-center -space-x-1 shrink-0">
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
                      <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {item.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">
                      {item.time}
                    </span>
                    <span className="text-[10px] text-zinc-400">Auto-Publish</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Business Profile Memory & Channels */}
        <div className="space-y-6">
          {/* Brand Knowledge & AI Memory */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                    Business Profile & Voice
                  </h4>
                  <p className="text-[10px] text-zinc-400">AI Context Memory</p>
                </div>
              </div>

              <Link
                href="/brand"
                className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Edit Kit
              </Link>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-400">Industry:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Bakery & Cafe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Brand Tone:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Warm, Friendly, Artisanal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Target Audience:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Local Coffee & Pastry Lovers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Primary Goal:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Drive Weekend Store Footfall</span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              💡 Your AI uses this profile to generate captions matching your unique tone and local audience.
            </p>
          </div>

          {/* Connected Social Channels */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Connected Channels
              </h3>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                4 Active
              </span>
            </div>

            <div className="space-y-2.5">
              {connectedChannels.map((channel, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700 flex items-center justify-center text-zinc-800 dark:text-zinc-200 shrink-0">
                      <PlatformIcon platform={channel.platform} className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                        {channel.handle}
                      </p>
                      <p className="text-[10px] text-zinc-400 truncate">
                        {channel.channelType}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white block">
                      {channel.followers}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      ● Active
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-3.5 h-3.5" />
              <span>Connect Google Business or New Channel</span>
            </button>
          </div>

          {/* AI Weekly Social Tip */}
          <div className="p-6 rounded-3xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-zinc-900/5 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-900 border border-emerald-500/20 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                Small Business Growth Tip
              </h4>
            </div>

            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Posts highlighting your <strong>morning prep routine</strong> or <strong>customer favorites</strong> get 3.2x more comments from neighborhood locals than generic stock photos.
            </p>

            <Link
              href="/create?template=behind-the-scenes"
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold text-center block transition-all shadow-sm shadow-emerald-500/20"
            >
              Draft Behind-the-Scenes Reel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
