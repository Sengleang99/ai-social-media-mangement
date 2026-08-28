"use client";

import * as React from "react";
import { BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TIMELINE_OPTIONS, MOCK_GROWTH_DATA } from "./types";

interface GrowthChartProps {
  timeline: string;
  onTimelineChange: (t: string) => void;
}

export function GrowthChart({ timeline, onTimelineChange }: GrowthChartProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const maxTotal = Math.max(...MOCK_GROWTH_DATA.map((d) => d.total));

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-500" />
            <span>Multi-Channel Impressions & Growth</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Real-time organic impressions tracked across all connected channels
          </p>
        </div>

        {/* Timeline Pill Switcher */}
        <div className="p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1 self-start sm:self-auto">
          {TIMELINE_OPTIONS.map((opt) => {
            const isSelected = timeline === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onTimelineChange(opt.id)}
                className={cn(
                  "px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                  isSelected
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs font-bold"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Multi-Segment Bar Chart */}
      <div className="space-y-3 pt-2">
        <div className="h-48 sm:h-56 flex items-end gap-2 sm:gap-4 pt-6 border-b border-zinc-100 dark:border-zinc-800">
          {MOCK_GROWTH_DATA.map((item, idx) => {
            const heightPercent = Math.round((item.total / maxTotal) * 100);
            const isHovered = hoveredIndex === idx;

            // Platform height fractions
            const igHeight = (item.instagram / item.total) * 100;
            const ttHeight = (item.tiktok / item.total) * 100;
            const xHeight = (item.x / item.total) * 100;
            const otherHeight = 100 - igHeight - ttHeight - xHeight;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
              >
                {/* Tooltip on Hover */}
                {isHovered && (
                  <div className="absolute -top-12 z-20 px-3 py-1.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-bold shadow-xl whitespace-nowrap animate-fadeIn flex items-center gap-2 pointer-events-none">
                    <span>{item.date}:</span>
                    <span className="text-emerald-400 dark:text-emerald-600 font-mono">
                      {(item.total / 1000).toFixed(1)}k views
                    </span>
                  </div>
                )}

                {/* Stacked Bar Container */}
                <div
                  className="w-full max-w-[42px] rounded-xl overflow-hidden flex flex-col justify-end transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                  style={{ height: `${heightPercent}%` }}
                >
                  {/* Other (FB / LinkedIn) */}
                  <div
                    style={{ height: `${otherHeight}%` }}
                    className="w-full bg-blue-600"
                    title={`Other: ${item.facebook + item.linkedin}`}
                  />
                  {/* X (Twitter) */}
                  <div
                    style={{ height: `${xHeight}%` }}
                    className="w-full bg-sky-500"
                    title={`X: ${item.x}`}
                  />
                  {/* TikTok */}
                  <div
                    style={{ height: `${ttHeight}%` }}
                    className="w-full bg-rose-500"
                    title={`TikTok: ${item.tiktok}`}
                  />
                  {/* Instagram */}
                  <div
                    style={{ height: `${igHeight}%` }}
                    className="w-full bg-emerald-500"
                    title={`Instagram: ${item.instagram}`}
                  />
                </div>

                <span className="text-[10px] text-zinc-400 font-semibold mt-2 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-zinc-600 dark:text-zinc-400 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-emerald-500" />
            <span>Instagram (42%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-rose-500" />
            <span>TikTok (38%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-sky-500" />
            <span>X / Twitter (11%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-blue-600" />
            <span>FB & LinkedIn (9%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
