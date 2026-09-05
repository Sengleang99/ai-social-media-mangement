"use client";

import * as React from "react";
import { Sparkles, Repeat, Sliders } from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { TONE_OPTIONS, INSPIRATION_PROMPTS } from "./types";

interface AiComposerProps {
  topicPrompt: string;
  onTopicPromptChange: (val: string) => void;
  selectedTone: string;
  onSelectTone: (toneId: string) => void;
  activeChannels: string[];
  onToggleChannel: (channelId: string) => void;
  clicheFilter: boolean;
  onToggleClicheFilter: (val: boolean) => void;
  hookOptimizer: boolean;
  onToggleHookOptimizer: (val: boolean) => void;
  autoHashtags: boolean;
  onToggleAutoHashtags: (val: boolean) => void;
  onGenerate?: () => void;
  isGenerating?: boolean;
}

const AVAILABLE_CHANNELS = [
  { id: "instagram", name: "Instagram" },
  { id: "x", name: "X / Twitter" },
  { id: "tiktok", name: "TikTok" },
  { id: "facebook", name: "Facebook" },
  { id: "linkedin", name: "LinkedIn" },
];

export function AiComposer({
  topicPrompt,
  onTopicPromptChange,
  selectedTone,
  onSelectTone,
  activeChannels,
  onToggleChannel,
  clicheFilter,
  onToggleClicheFilter,
  hookOptimizer,
  onToggleHookOptimizer,
  autoHashtags,
  onToggleAutoHashtags,
  onGenerate,
  isGenerating,
}: AiComposerProps) {
  return (
    <div className="space-y-6">
      {/* 1. Core Topic & Inspiration Templates */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>1. Core Topic or Insight</span>
          </label>
          <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Gemini AI Live
          </span>
        </div>

        {/* Prompt Textarea */}
        <div className="relative">
          <textarea
            rows={3}
            value={topicPrompt}
            onChange={(e) => onTopicPromptChange(e.target.value)}
            onKeyDown={(e) => {
              if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                e.preventDefault();
                onGenerate?.();
              }
            }}
            placeholder="What do you want to share? e.g., 'Behind the scenes at 5 AM', '20% off weekend promo'..."
            className="w-full p-4 text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 resize-none shadow-xs"
          />
        </div>

        {/* Action Button Right Under Prompt */}
        {onGenerate && (
          <button
            type="button"
            onClick={onGenerate}
            disabled={isGenerating || !topicPrompt.trim()}
            className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            <Sparkles className={cn("w-4 h-4", isGenerating && "animate-spin")} />
            <span>
              {isGenerating
                ? "Synthesizing Posts with AI..."
                : "✨ Generate Social Posts (Ctrl+Enter)"}
            </span>
          </button>
        )}

        {/* Quick Inspiration Pills */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-semibold text-zinc-400">
            Quick Inspiration Templates:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {INSPIRATION_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  onTopicPromptChange(item.prompt);
                  onSelectTone(item.tone);
                }}
                className="p-2.5 rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-500/40 transition-all text-left group cursor-pointer"
              >
                <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate">
                  {item.title}
                </p>
                <p className="text-[10px] text-zinc-400 line-clamp-1 mt-0.5">{item.prompt}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Target Channels & Tone Selector */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
        {/* Multi-Channel Publisher Selector */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
              <Repeat className="w-3.5 h-3.5 text-sky-500" />
              <span>2. Target Social Channels ({activeChannels.length} Selected)</span>
            </label>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
              Multi-Channel Sync
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {AVAILABLE_CHANNELS.map((channel) => {
              const isActive = activeChannels.includes(channel.id);
              return (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => onToggleChannel(channel.id)}
                  className={cn(
                    "p-2.5 rounded-xl border flex items-center gap-2 transition-all cursor-pointer text-xs font-medium",
                    isActive
                      ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold shadow-xs"
                      : "bg-zinc-50 dark:bg-zinc-800/40 border-zinc-200 dark:border-zinc-800 text-zinc-400 opacity-60 hover:opacity-100",
                  )}
                >
                  <PlatformIcon platform={channel.id} className="w-4 h-4 shrink-0" />
                  <span className="truncate">{channel.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tone Selector */}
        <div className="space-y-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-purple-500" />
            <span>3. Voice & Tone Angle</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {TONE_OPTIONS.map((tone) => (
              <button
                key={tone.id}
                type="button"
                onClick={() => onSelectTone(tone.id)}
                className={cn(
                  "p-3 rounded-2xl border text-left transition-all cursor-pointer",
                  selectedTone === tone.id
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white shadow-sm"
                    : "bg-zinc-50/80 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                )}
              >
                <p className="text-xs font-bold">{tone.label}</p>
                <p
                  className={cn(
                    "text-[10px] mt-0.5 line-clamp-1",
                    selectedTone === tone.id ? "text-zinc-300 dark:text-zinc-600" : "text-zinc-400",
                  )}
                >
                  {tone.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* AI Optimization Feature Switches */}
        <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
            AI Optimization Controls:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <label className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={clicheFilter}
                onChange={(e) => onToggleClicheFilter(e.target.checked)}
                className="w-3.5 h-3.5 rounded text-emerald-600 accent-emerald-600 cursor-pointer"
              />
              <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                No Robot Cliches
              </span>
            </label>

            <label className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hookOptimizer}
                onChange={(e) => onToggleHookOptimizer(e.target.checked)}
                className="w-3.5 h-3.5 rounded text-emerald-600 accent-emerald-600 cursor-pointer"
              />
              <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                3-Sec Hook Boost
              </span>
            </label>

            <label className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={autoHashtags}
                onChange={(e) => onToggleAutoHashtags(e.target.checked)}
                className="w-3.5 h-3.5 rounded text-emerald-600 accent-emerald-600 cursor-pointer"
              />
              <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                Auto-SEO Tags
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
