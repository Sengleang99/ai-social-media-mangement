"use client";

import * as React from "react";
import { TrendingUp, Users, Eye, Sparkles } from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { MOCK_PLATFORM_METRICS } from "./types";

export function PlatformBreakdown() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Connected Platform Performance
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Channel breakdown with audience growth and engagement rates
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_PLATFORM_METRICS.map((plat) => (
          <div
            key={plat.platform}
            className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-500/40 transition-all space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                  <PlatformIcon platform={plat.platform} className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{plat.name}</h4>
                  <span className="text-[10px] text-zinc-400">
                    {plat.publishedCount} Posts This Month
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 font-mono">
                <TrendingUp className="w-3 h-3" /> {plat.reachGrowth}
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80">
              <div>
                <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Followers
                </p>
                <p className="text-sm font-extrabold text-zinc-900 dark:text-white mt-0.5">
                  {(plat.followers / 1000).toFixed(1)}k
                </p>
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  {plat.followerGrowth}
                </span>
              </div>

              <div>
                <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Reach
                </p>
                <p className="text-sm font-extrabold text-zinc-900 dark:text-white mt-0.5">
                  {(plat.reach / 1000).toFixed(1)}k
                </p>
                <span className="text-[9px] text-zinc-400 font-semibold">
                  {plat.engagementRate} Eng.
                </span>
              </div>
            </div>

            {/* Top Format */}
            <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-[11px] text-zinc-400">Top Format:</span>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {plat.topFormat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
