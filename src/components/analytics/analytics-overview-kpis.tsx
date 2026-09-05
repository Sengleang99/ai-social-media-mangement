"use client";

import * as React from "react";
import { TrendingUp, Eye, Users, Percent, Clock, Sparkles } from "lucide-react";

export function AnalyticsOverviewKpis() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Total Impressions */}
      <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +24.8%
          </span>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            128.4K
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Total Multi-Channel Reach</p>
        </div>
      </div>

      {/* 2. Total Audience / Followers */}
      <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +18.2%
          </span>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            44.8K
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Connected Community (+1,420 net)
          </p>
        </div>
      </div>

      {/* 3. Omnichannel Engagement Rate */}
      <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Percent className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +2.1%
          </span>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            8.4%
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Avg Engagement Rate (vs 3.2% industry)
          </p>
        </div>
      </div>

      {/* 4. Creator Time Saved by AI */}
      <div className="p-5 rounded-3xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-purple-500/10 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-900 border border-emerald-500/30 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white flex items-center gap-1">
            <Clock className="w-3 h-3" /> AI Autopilot
          </span>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            42.5 hrs
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            Time Saved Generating & Scheduling
          </p>
        </div>
      </div>
    </div>
  );
}
