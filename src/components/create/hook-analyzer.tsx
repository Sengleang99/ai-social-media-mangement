"use client";

import * as React from "react";
import { Flame } from "lucide-react";
import { AlternativeHook } from "./types";

interface HookAnalyzerProps {
  hookScore: number;
  alternativeHooks: AlternativeHook[];
  onSwapHook: (newHook: string, score: number) => void;
}

export function HookAnalyzer({
  hookScore,
  alternativeHooks,
  onSwapHook,
}: HookAnalyzerProps) {
  return (
    <div className="p-4 sm:p-5 rounded-3xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-zinc-900/5 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900 border border-emerald-500/30 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>3-Sec Viral Hook Analyzer</span>
          </h3>
        </div>
        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
          {hookScore}/100 CTR Score
        </span>
      </div>

      <div className="space-y-1.5">
        <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
          1-Click Alternative Hook Variants:
        </p>
        <div className="space-y-1.5">
          {alternativeHooks.map((alt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSwapHook(alt.text, alt.score)}
              className="w-full p-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-500/60 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all text-left flex items-center justify-between gap-3 text-xs text-zinc-800 dark:text-zinc-200 group cursor-pointer"
            >
              <span className="line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-medium">
                &ldquo;{alt.text}&rdquo;
              </span>
              <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                {alt.score}% Score
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
