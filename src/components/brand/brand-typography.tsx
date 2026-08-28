"use client";

import * as React from "react";
import { Type, Sparkles } from "lucide-react";
import { BrandFont } from "./types";

interface BrandTypographyProps {
  fonts: BrandFont[];
}

export function BrandTypography({ fonts }: BrandTypographyProps) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Type className="w-4 h-4 text-emerald-500" />
            <span>Brand Typography & Carousel Styling</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Font pairings rendered automatically on AI carousel templates and image captions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fonts.map((font) => (
          <div
            key={font.role}
            className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 capitalize">
                {font.role} Font
              </span>
              <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                {font.fontFamily}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
              <p
                className={`text-zinc-900 dark:text-white leading-snug ${
                  font.role === "heading"
                    ? "text-base sm:text-lg font-extrabold"
                    : "text-xs sm:text-sm font-medium"
                }`}
              >
                {font.previewText}
              </p>
            </div>

            <div className="flex flex-wrap gap-1 text-[10px] text-zinc-400 font-mono">
              {font.weights.map((w) => (
                <span
                  key={w}
                  className="px-2 py-0.5 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Visual Design Style Preset */}
      <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-zinc-800 dark:text-zinc-200">
            Selected Visual Theme: <strong>Artisan Modern Organic</strong> (warm grain, rich typography, rounded 24px cards).
          </span>
        </div>
      </div>
    </div>
  );
}
