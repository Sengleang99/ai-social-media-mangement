"use client";

import * as React from "react";
import { Sparkles, MessageSquare, Flame, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandVoiceDNA, VoiceArchetype } from "./types";

interface BrandVoiceDNAProps {
  voiceDNA: BrandVoiceDNA;
  onChange: (updated: BrandVoiceDNA) => void;
}

const ARCHETYPES: {
  id: VoiceArchetype;
  label: string;
  desc: string;
  emoji: string;
}[] = [
  {
    id: "warm_storyteller",
    label: "Warm Storyteller",
    desc: "Authentic, friendly, craft-focused, connecting through morning bakery rituals.",
    emoji: "🥖",
  },
  {
    id: "high_energy",
    label: "High-Energy Viral",
    desc: "Fast-paced, bold hook-driven, trend-savvy, excitement and FOMO triggers.",
    emoji: "⚡",
  },
  {
    id: "educational_expert",
    label: "Artisan Authority",
    desc: "Deep knowledge, sourdough science, fermentation benefits, tips and guides.",
    emoji: "🔬",
  },
  {
    id: "luxury_minimal",
    label: "Minimal & Elegant",
    desc: "Refined, understated, aesthetic-forward, quiet luxury and culinary focus.",
    emoji: "✨",
  },
  {
    id: "playful_witty",
    label: "Playful & Witty",
    desc: "Humorous, meme-ready, neighborhood banters, lighthearted food humor.",
    emoji: "😄",
  },
];

export function BrandVoiceDNASettings({
  voiceDNA,
  onChange,
}: BrandVoiceDNAProps) {
  // Live sample copy calculated from active sliders
  const sampleCopy = React.useMemo(() => {
    if (voiceDNA.archetype === "warm_storyteller") {
      return `🥖 Good morning neighborhood! Our stone deck ovens just reached 460°F. When you slow cold ferment sourdough for 36 hours, you get that deep nutty aroma and satisfying crackle you won't find anywhere else. Swing by before noon for a warm slice with salted butter! ✨`;
    }
    if (voiceDNA.archetype === "high_energy") {
      return `🚨 LISTEN TO THIS CRUST CRUNCH! 🔊 If you haven't tasted 36-hour fermented sourdough straight from our stone deck ovens, you're missing out on the best breakfast in town. Only 24 loaves baked today — RUN don't walk! 🥐🔥`;
    }
    if (voiceDNA.archetype === "educational_expert") {
      return `Why does industrial bread cause bloating while artisan sourdough feels light? The secret is 36-hour slow fermentation: wild lactobacillus bacteria naturally break down complex starches and gluten. True craftsmanship in every loaf.`;
    }
    if (voiceDNA.archetype === "luxury_minimal") {
      return `Heirloom grains. 36 hours of cold fermentation. Hand-shaped at dawn. Experience the art of pure bread craft at GreenLeaf.`;
    }
    return `POV: You told yourself you'd only buy one croissant today... and now you're walking out with three sourdough loaves and two warm cinnamon rolls. No regrets. 🥐😂`;
  }, [voiceDNA.archetype]);

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span>AI Brand Voice & Persona DNA</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Define your tone archetype, slang thresholds, and humor sliders for consistent omnichannel copy
          </p>
        </div>

        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center gap-1 self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5" /> Applied to Studio AI
        </span>
      </div>

      {/* Voice Archetype Selector */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white block">
          Primary Voice Archetype:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ARCHETYPES.map((arch) => {
            const isSelected = voiceDNA.archetype === arch.id;

            return (
              <div
                key={arch.id}
                onClick={() => onChange({ ...voiceDNA, archetype: arch.id })}
                className={cn(
                  "p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2",
                  isSelected
                    ? "border-purple-500 bg-purple-50/40 dark:bg-purple-950/25 ring-1 ring-purple-500/40 shadow-xs"
                    : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-700"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{arch.emoji}</span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                    {arch.label}
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-0.5 leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tone Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Formality Slider */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              Formality Spectrum
            </span>
            <span className="font-mono text-zinc-500">
              {voiceDNA.formality < 30
                ? "Casual & Friendly"
                : voiceDNA.formality < 70
                ? "Balanced"
                : "Formal"}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={voiceDNA.formality}
            onChange={(e) =>
              onChange({ ...voiceDNA, formality: Number(e.target.value) })
            }
            className="w-full accent-purple-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-zinc-400">
            <span>Casual / Warm</span>
            <span>Corporate / Formal</span>
          </div>
        </div>

        {/* Emoji Density Slider */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              Emoji & Visual Accent
            </span>
            <span className="font-mono text-zinc-500">
              {voiceDNA.emojiDensity < 30
                ? "Minimal"
                : voiceDNA.emojiDensity < 70
                ? "Moderate (2-3)"
                : "Vibrant (4+)"}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={voiceDNA.emojiDensity}
            onChange={(e) =>
              onChange({ ...voiceDNA, emojiDensity: Number(e.target.value) })
            }
            className="w-full accent-purple-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-zinc-400">
            <span>No Emojis</span>
            <span>High Emoji Density 🥖✨</span>
          </div>
        </div>

        {/* Craft & Technical Depth Slider */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              Artisan Craft & Story Depth
            </span>
            <span className="font-mono text-zinc-500">
              {voiceDNA.depthLevel < 40 ? "Punchy & Brief" : "In-depth Artisan Story"}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={voiceDNA.depthLevel}
            onChange={(e) =>
              onChange({ ...voiceDNA, depthLevel: Number(e.target.value) })
            }
            className="w-full accent-purple-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-zinc-400">
            <span>Fast Snacking</span>
            <span>Deep Craftsmanship</span>
          </div>
        </div>

        {/* Humor & Banter */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              Humor & Relatability
            </span>
            <span className="font-mono text-zinc-500">
              {voiceDNA.humorLevel < 30 ? "Direct & Informative" : "Witty & Relatable"}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={voiceDNA.humorLevel}
            onChange={(e) =>
              onChange({ ...voiceDNA, humorLevel: Number(e.target.value) })
            }
            className="w-full accent-purple-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-zinc-400">
            <span>Direct</span>
            <span>Witty / Fun</span>
          </div>
        </div>
      </div>

      {/* Live AI Sample Output Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-purple-500/10 via-emerald-500/5 to-zinc-900/10 dark:from-purple-950/30 dark:via-zinc-900 dark:to-zinc-900 border border-purple-500/30 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Live Sample Output Generated by this Persona:</span>
          </span>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <Flame className="w-3 h-3 text-orange-500" /> 98% Brand Alignment
          </span>
        </div>
        <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-white leading-relaxed italic">
          &ldquo;{sampleCopy}&rdquo;
        </p>
      </div>
    </div>
  );
}
