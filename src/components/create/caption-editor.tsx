"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PostVariant } from "./types";

interface CaptionEditorProps {
  selectedPlatform: string;
  activePost: PostVariant;
  onHookChange: (hook: string) => void;
  onBodyChange: (body: string) => void;
  onAddHashtag: (tag: string) => void;
  onRemoveHashtag: (tag: string) => void;
}

export function CaptionEditor({
  selectedPlatform,
  activePost,
  onHookChange,
  onBodyChange,
  onAddHashtag,
  onRemoveHashtag,
}: CaptionEditorProps) {
  const currentTotalChars =
    activePost.hook.length + activePost.body.length + activePost.hashtags.join(" ").length;

  const maxChars =
    selectedPlatform === "x"
      ? 280
      : selectedPlatform === "instagram"
        ? 2200
        : selectedPlatform === "tiktok"
          ? 2200
          : 3000;

  const charPercentage = Math.min(100, Math.round((currentTotalChars / maxChars) * 100));

  return (
    <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
          <span>Fine-Tune Caption for {selectedPlatform.toUpperCase()}</span>
        </label>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-400">
            {currentTotalChars} / {maxChars} chars
          </span>
          <div className="w-12 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all",
                charPercentage > 90 ? "bg-rose-500" : "bg-emerald-500",
              )}
              style={{ width: `${charPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Hook Input */}
      <div className="space-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Opening Hook Line:
        </span>
        <input
          type="text"
          value={activePost.hook}
          onChange={(e) => onHookChange(e.target.value)}
          className="w-full p-2.5 text-xs font-semibold bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
        />
      </div>

      {/* Body Textarea */}
      <div className="space-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
          Post Body:
        </span>
        <textarea
          rows={4}
          value={activePost.body}
          onChange={(e) => onBodyChange(e.target.value)}
          className="w-full p-3 text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 resize-none font-sans"
        />
      </div>

      {/* Active Hashtag Pills */}
      <div className="space-y-1.5 pt-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
          Attached Hashtags (Click to remove / Add suggestions):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {activePost.hashtags.map((tag) => (
            <span
              key={tag}
              onClick={() => onRemoveHashtag(tag)}
              className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 cursor-pointer transition-colors"
            >
              <span>{tag}</span>
              <X className="w-2.5 h-2.5" />
            </span>
          ))}

          {/* Trending suggestion additions */}
          {["#ViralGrowth", "#LocalSpotlight", "#BakeryLife"].map((suggestion) => {
            if (activePost.hashtags.includes(suggestion)) return null;
            return (
              <button
                key={suggestion}
                type="button"
                onClick={() => onAddHashtag(suggestion)}
                className="text-[10px] font-medium px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 border border-dashed border-zinc-300 dark:border-zinc-700 cursor-pointer"
              >
                + {suggestion}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
