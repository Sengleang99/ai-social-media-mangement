"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Wand2, ArrowRight, Copy, Check } from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SAMPLE_PROMPTS = [
  "5 productivity hacks for SaaS founders",
  "Why consistency beats motivation in 2026",
  "How AI transforms social media growth",
  "Common mistakes beginner creators make",
];

const PRESETS: Record<string, Record<string, string>> = {
  instagram: {
    "5 productivity hacks for SaaS founders":
      "Working 14 hours a day isn't a badge of honor. It's a system failure. 💡\n\nSwipe through for 5 high-leverage frameworks that will save you 15+ hours every week:\n\n1. Async-first team comms\n2. Time-block deep work before 11 AM\n3. Automate social distribution with AI\n4. Kill low-impact recurring meetings\n5. Delegate outcomes, not tasks\n\n💬 Drop 'HACKS' in the comments to receive our free Notion workflow template!\n\n#productivity #saasfounder #founderlife #buildinpublic",
    "Why consistency beats motivation in 2026":
      "Motivation gets you started. Systems keep you growing. 📈\n\nWhen motivation fades, your pre-scheduled AI content keeps your brand visible every single day.\n\n✨ Tap save for your next planning session!",
  },
  x: {
    "5 productivity hacks for SaaS founders":
      "5 productivity hacks that will 10x your output without burnout:\n\n1. Never check email before 11 AM\n2. Turn 1 core thought into 5 platform posts with AI\n3. Timebox daily tasks into 45-min sprints\n4. Batch your meetings to Tuesdays & Thursdays only\n5. Review metrics weekly, not hourly\n\nWork smarter, not longer. 🚀",
    "Why consistency beats motivation in 2026":
      "The top 1% of creators aren't 10x more motivated than you.\n\nThey just have a 10x better automation flywheel.\n\nNever start with a blank page.",
  },
  tiktok: {
    "5 productivity hacks for SaaS founders":
      "🎬 Hook (0:00-0:03): 'Stop scrolling if you work more than 8 hours a day and feel like you got nothing done.'\n\n⚡ Body (0:03-0:20): 'Here are 3 quick automation rules top 7-figure founders use to get their time back...'\n\n🎯 CTA (0:20-0:30): 'Comment HACK and I will send you the prompt stack!'",
    "Why consistency beats motivation in 2026":
      "🎬 Hook: 'Here's the honest truth about building an audience in 2026 that no guru will tell you...'",
  },
};

export function InteractiveDemo() {
  const [selectedPlatform, setSelectedPlatform] = React.useState<"instagram" | "x" | "tiktok">("x");
  const [topic, setTopic] = React.useState(SAMPLE_PROMPTS[0]);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const getOutputText = () => {
    const platformPreset = PRESETS[selectedPlatform];
    if (platformPreset && platformPreset[topic]) {
      return platformPreset[topic];
    }
    return `🔥 AI Generated Post for ${selectedPlatform.toUpperCase()}:\n\n"${topic}"\n\n1. Identify your core audience bottleneck\n2. Deliver actionable high-value insights\n3. Leverage AI automation for 10x reach without burnout.\n\nReady to publish with one click! #SocialAI #Growth`;
  };

  const [output, setOutput] = React.useState(getOutputText());

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setOutput(getOutputText());
      setIsGenerating(false);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-emerald-950/20 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
          <Badge variant="emerald" size="sm">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Live Interactive Playground
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Test the AI Engine in Real-Time
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Type any idea or pick a preset to see how SocialAI formats platform-native viral copy instantly.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                1. Select Platform
              </label>
              <div className="flex gap-2">
                {(["x", "instagram", "tiktok"] as const).map((plat) => (
                  <button
                    key={plat}
                    type="button"
                    onClick={() => {
                      setSelectedPlatform(plat);
                      handleGenerate();
                    }}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex-1 justify-center border",
                      selectedPlatform === plat
                        ? "bg-emerald-600 border-emerald-500 text-white shadow-sm"
                        : "bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:text-white"
                    )}
                  >
                    <PlatformIcon platform={plat} className="w-3.5 h-3.5" />
                    <span className="capitalize">{plat === "x" ? "X" : plat}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                2. Enter Topic or Idea
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. 3 lessons from launching a startup..."
                className="w-full h-11 px-3.5 rounded-xl bg-zinc-800/90 border border-zinc-700 text-white placeholder-zinc-500 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>

            <div>
              <span className="text-[11px] text-zinc-400 block mb-1.5 font-medium">Quick suggestions:</span>
              <div className="flex flex-wrap gap-1.5">
                {SAMPLE_PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setTopic(p);
                      handleGenerate();
                    }}
                    className="text-[10px] px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors text-left"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="glow"
                size="md"
                isFullWidth
                onClick={handleGenerate}
                isLoading={isGenerating}
                leftIcon={<Wand2 className="w-4 h-4" />}
              >
                Generate Preview
              </Button>
            </div>
          </div>

          {/* Right Live Output Card */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-900 border border-zinc-800 p-5 flex flex-col justify-between min-h-[300px] shadow-lg">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-zinc-200 capitalize">
                    Live {selectedPlatform} Format
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  leftIcon={copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  className="text-xs text-zinc-400 hover:text-white h-7 px-2"
                >
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>

              <div className="whitespace-pre-line text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {output}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-[11px] text-zinc-400">
                ✨ Ready to schedule automatically
              </span>
              <Link href="/onboarding">
                <Button size="sm" variant="primary" rightIcon={<ArrowRight className="w-3 h-3" />}>
                  Setup Full Automation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default InteractiveDemo;
