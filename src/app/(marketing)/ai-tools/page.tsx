"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  Zap, 
  BrainCircuit, 
  Repeat, 
  Clock, 
  Sliders, 
  Database, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  FileText, 
  MessageSquare,
  Flame,
  CheckCircle2,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlatformIcon } from "@/components/ui/social-icons";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { cn } from "@/lib/utils";

interface ToolCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  gradient: string;
}

const AI_TOOLS_LIST: ToolCard[] = [
  {
    id: "remixer",
    title: "1-to-5 Omnichannel Auto-Remixer",
    badge: "Most Popular",
    description: "Write one core idea or rough thought, and AI instantly generates optimized posts for Instagram, TikTok, X, LinkedIn, and YouTube.",
    icon: <Repeat className="w-6 h-6 text-emerald-500" />,
    tags: ["5 Platforms", "Zero Rewriting", "Platform Native"],
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    id: "authenticity",
    title: "Human Authenticity & Cliché Stripper",
    badge: "99.4% Index",
    description: "Our model actively purges robotic AI clichés ('Delve into', 'In today's fast-paced world') and applies natural hooks, pacing, and human storytelling.",
    icon: <BrainCircuit className="w-6 h-6 text-teal-500" />,
    tags: ["No Robot Tone", "High Engagement", "Natural Pacing"],
    gradient: "from-teal-500/10 to-sky-500/5",
  },
  {
    id: "hook-scorer",
    title: "3-Second Viral Hook Analyzer",
    badge: "High CTR",
    description: "AI scores the scroll-stopping power of your opening lines before you publish, offering 3 high-converting alternative hooks.",
    icon: <Flame className="w-6 h-6 text-amber-500" />,
    tags: ["CTR Optimization", "A/B Hook Variants", "Scroll-Stopper"],
    gradient: "from-amber-500/10 to-rose-500/5",
  },
  {
    id: "voice-cloning",
    title: "Custom Brand Voice Training",
    badge: "Personalized",
    description: "Train the AI on your past top-performing content, newsletters, or blog. The AI adopts your exact humor, formatting, and vocabulary.",
    icon: <Sliders className="w-6 h-6 text-purple-500" />,
    tags: ["Multiple Personas", "Supabase Embeddings", "Zero Hallucinations"],
    gradient: "from-purple-500/10 to-indigo-500/5",
  },
  {
    id: "peak-timing",
    title: "Algorithmic Peak-Hour Auto-Timing",
    badge: "Auto-Calculated",
    description: "AI continuously tracks when your exact followers on Instagram, TikTok, and X are most active, publishing precisely at the viral window.",
    icon: <Clock className="w-6 h-6 text-sky-500" />,
    tags: ["+42% Reach", "Live Feed Sync", "Timezone Smart"],
    gradient: "from-sky-500/10 to-blue-500/5",
  },
  {
    id: "carousel-builder",
    title: "Visual Carousel & Thread Architect",
    badge: "Multi-Slide",
    description: "Converts long-form insights into swipeable 7-slide Instagram carousels and high-retention Twitter/X threads with seamless slide continuity.",
    icon: <Layers className="w-6 h-6 text-rose-500" />,
    tags: ["Swipeable Slides", "Thread Pacing", "Call to Action"],
    gradient: "from-rose-500/10 to-orange-500/5",
  },
];

const SAMPLE_OUTPUTS: Record<string, { hook: string; body: string; tags: string; score: number }> = {
  instagram: {
    hook: "The biggest lie in creator growth is 'post 5 times a day' 📉",
    body: "Here is what actually happened when I scaled back from 35 posts/week to 7 high-signal carousels:\n\n1. Engagement rate increased by +340%\n2. Inbound DM leads grew 4x\n3. Creator burnout dropped to ZERO.\n\nSave this for your next weekly content batch!",
    tags: "#CreatorEconomy #SocialGrowth #ContentStrategy #GrowthHacks",
    score: 98,
  },
  tiktok: {
    hook: "Stop writing social media posts manually in 2026. Here's why 👇",
    body: "POV: You spend 4 hours drafting captions across 5 apps when an AI pipeline can auto-remix your best thought into platform-native formats in 15 seconds.\n\nWatch till the end to see the workflow!",
    tags: "#SocialMediaTips #CreatorHacks #Automation #MarketingTips",
    score: 96,
  },
  x: {
    hook: "90% of creators fail because of inconsistency, not lack of talent.",
    body: "The 1-to-5 content distribution playbook I used to reach 1.4M impressions last month:\n\n1/ Core Idea (1 rough note)\n2/ X Thread (7 micro-lessons)\n3/ IG Carousel (Visual slides)\n4/ LinkedIn Post (Business framing)\n5/ TikTok / Short (30s hook)\n\nSystem > Motivation.",
    tags: "#buildinpublic #growth #contentstrategy",
    score: 99,
  },
  linkedin: {
    hook: "We cut our social media team's scheduling time from 15 hours to 45 minutes.",
    body: "In 2026, content volume alone no longer drives organic distribution. Algorithms now heavily reward signal-to-noise ratio and high-retention storytelling.\n\nHere are the 3 structural changes we implemented across our multi-channel pipeline:\n\n• Established dynamic peak-hour publishing\n• Stripped all generic AI fluff for brand voice authenticity\n• Automated cross-platform formatting\n\nWhat is your biggest content bottleneck this quarter?",
    tags: "#MarketingLeadership #GrowthStrategy #SocialMediaMarketing",
    score: 97,
  },
  youtube: {
    hook: "The 60-Second Social Media Automation System (Full Tutorial)",
    body: "Learn the exact 1-to-5 distribution workflow to turn one idea into 5 viral video scripts and posts across Instagram, TikTok, X, and YouTube Shorts in seconds.\n\nSubscribe for more creator automation systems!",
    tags: "#Shorts #CreatorTools #AIforBusiness #YouTubeGrowth",
    score: 95,
  },
};

export default function AiToolsPage() {
  const [selectedPlatform, setSelectedPlatform] = React.useState("x");
  const [selectedTone, setSelectedTone] = React.useState("Viral Growth");
  const [topicInput, setTopicInput] = React.useState("How to scale from 0 to 100k followers without burnout");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const activeOutput = SAMPLE_OUTPUTS[selectedPlatform] || SAMPLE_OUTPUTS.x;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${activeOutput.hook}\n\n${activeOutput.body}\n\n${activeOutput.tags}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Ambient background lighting */}
      <div className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center relative z-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <BrainCircuit className="w-3.5 h-3.5 text-emerald-500" />
          <span>Advanced AI & Supabase Engine</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          AI Tools Engineered for <br />
          <span className="text-emerald-600 dark:text-emerald-400">Authentic Human Reach.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Say goodbye to robotic AI spam. SocialAI uses fine-tuned LLM models and vector voice profiles to craft viral hooks, auto-format for 5 platforms, and auto-schedule at algorithmic peaks.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
          <a href="#playground">
            <Button variant="primary" size="lg" rightIcon={<Zap className="w-4 h-4" />}>
              Test Live Playground
            </Button>
          </a>
          <Link href="/signup">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free 14-Day Trial
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Interactive Live AI Playground */}
      <section id="playground" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 shadow-2xl shadow-zinc-950/5 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                  Interactive AI Content Generator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Select a channel and tone to preview live AI generation and viral hook scoring.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-500">Latency:</span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
                ⚡ ~320ms (GPT-4o)
              </span>
            </div>
          </div>

          {/* Playground Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Controls */}
            <div className="space-y-5">
              {/* Platform Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Target Social Platform:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { id: "x", label: "X" },
                    { id: "instagram", label: "Instagram" },
                    { id: "tiktok", label: "TikTok" },
                    { id: "linkedin", label: "LinkedIn" },
                    { id: "youtube", label: "YouTube" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlatform(p.id)}
                      className={cn(
                        "p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-medium cursor-pointer",
                        selectedPlatform === p.id
                          ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold shadow-xs"
                          : "bg-zinc-50 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      )}
                    >
                      <PlatformIcon platform={p.id} className="w-4 h-4" />
                      <span className="text-[11px] truncate w-full text-center">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tone / Angle Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Content Angle / Tone:
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Viral Growth", "Storytelling & Hook", "Educational Teardown", "Contrarian Thought"].map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer",
                        selectedTone === tone
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                          : "bg-zinc-50 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Core Idea or Topic:
                </label>
                <textarea
                  rows={3}
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  placeholder="Enter your topic, blog snippet, or rough thought..."
                  className="w-full p-3.5 text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 resize-none"
                />

                {/* Quick chip suggestions */}
                <div className="flex items-center gap-1.5 pt-1 overflow-x-auto text-[11px] text-zinc-500">
                  <span className="shrink-0 font-medium">Try:</span>
                  {[
                    "AI tools for designers",
                    "3-step creator monetization",
                    "Why most SaaS fail on social",
                  ].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setTopicInput(chip)}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:text-emerald-300 border border-zinc-200/60 dark:border-zinc-700/60 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button
                type="button"
                variant="primary"
                size="lg"
                isFullWidth
                isLoading={isGenerating}
                onClick={handleGenerate}
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Regenerate AI Post
              </Button>
            </div>

            {/* Right Generated Preview */}
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <PlatformIcon platform={selectedPlatform} className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-white capitalize">
                        {selectedPlatform} Output
                      </h4>
                      <p className="text-[10px] text-zinc-500">Auto-tailored format</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      Hook Score: {activeOutput.score}/100
                    </span>
                  </div>
                </div>

                {/* Generated Content Body */}
                <div className="space-y-3 font-sans text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-line">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-500/30 font-semibold text-zinc-900 dark:text-white shadow-xs">
                    {activeOutput.hook}
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800">
                    {activeOutput.body}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                    {activeOutput.tags}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer shadow-xs transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Post"}</span>
                </button>

                <Link href="/signup">
                  <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Schedule on 5 Channels
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full AI Tools Suite Bento */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            INTELLIGENT TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            6 Specialized AI Tools Built for Social Scale
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every tool is purpose-built to eliminate manual creator grind, increase algorithmic reach, and protect your genuine brand voice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_TOOLS_LIST.map((tool) => (
            <div
              key={tool.id}
              className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Supabase + OpenAI Modern Architecture Callout */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-zinc-900 text-white relative z-10 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              ENTERPRISE-GRADE INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Powered by Supabase Realtime & OpenAI GPT-4o
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Experience ultra-fast generation speeds, end-to-end vector embeddings for your brand voice, and encrypted token management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Supabase pgvector</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stores your creator brand voice in vector embeddings to ensure the AI never forgets your authentic style.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Sub-Second Generation</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Streaming response pipeline outputs viral post iterations in under 400 milliseconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Row-Level Security</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Your draft content and social credentials are encrypted with Supabase RLS and token rotation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Realtime Sync</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Live queue synchronization across mobile and desktop dashboards with zero lag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Conversion Banner */}
      <CtaBanner />
    </div>
  );
}
