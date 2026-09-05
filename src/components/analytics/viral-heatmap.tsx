"use client";

import * as React from "react";
import { Flame, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = ["6 AM", "9 AM", "12 PM", "3 PM", "5 PM", "7 PM", "9 PM", "11 PM"];

// Density Matrix (values 0 - 100)
const HEATMAP_DATA = [
  [15, 60, 45, 30, 85, 75, 40, 20], // Mon
  [20, 75, 55, 40, 95, 90, 60, 25], // Tue (High)
  [10, 55, 60, 35, 80, 85, 45, 15], // Wed
  [25, 80, 70, 50, 90, 85, 55, 30], // Thu
  [30, 70, 65, 60, 98, 92, 80, 50], // Fri (Peak)
  [40, 85, 90, 75, 90, 80, 70, 40], // Sat
  [35, 70, 80, 65, 85, 95, 85, 45], // Sun
];

export function ViralHeatmap() {
  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Audience Engagement Heatmap</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Optimal publishing times calculated from 10,000+ local follower interactions
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> High Peak
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/20" /> Low
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[500px] space-y-2">
          {/* Hour Headers */}
          <div className="grid grid-cols-9 gap-2 text-center text-[10px] font-bold text-zinc-400 uppercase tracking-wider pb-1">
            <div className="text-left pl-1">Day</div>
            {HOURS.map((hr, idx) => (
              <div key={idx}>{hr}</div>
            ))}
          </div>

          {/* Rows */}
          {DAYS.map((day, dIdx) => (
            <div key={dIdx} className="grid grid-cols-9 gap-2 items-center">
              <div className="text-xs font-bold text-zinc-700 dark:text-zinc-300 pl-1">{day}</div>

              {HEATMAP_DATA[dIdx].map((val, hIdx) => {
                const isSuperPeak = val >= 90;
                const isMedium = val >= 60 && val < 90;

                return (
                  <div
                    key={hIdx}
                    className={cn(
                      "h-8 rounded-xl flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer group relative",
                      isSuperPeak
                        ? "bg-emerald-500 text-white shadow-xs"
                        : isMedium
                          ? "bg-emerald-500/30 dark:bg-emerald-500/25 text-emerald-900 dark:text-emerald-300"
                          : "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800",
                    )}
                  >
                    {isSuperPeak && <Flame className="w-3 h-3 text-orange-200" />}

                    {/* Tooltip on hover */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 px-2 py-1 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-[9px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                      {val}% Activity
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap Footer Recommendation */}
      <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">
            🔥 Your #1 golden window is <strong>Fridays at 5:00 PM</strong> (+42% reach multiplier).
          </span>
        </div>
      </div>
    </div>
  );
}
