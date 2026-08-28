"use client";

import * as React from "react";
import { FolderGit2, Eye, Sparkles, TrendingUp } from "lucide-react";
import { ContentItem } from "./types";

interface ContentStatsProps {
  items: ContentItem[];
}

export function ContentStats({ items }: ContentStatsProps) {
  const publishedCount = items.filter((i) => i.status === "published").length;
  const totalViews = items.reduce((acc, item) => acc + item.views, 0);
  const scheduledCount = items.filter((i) => i.status === "scheduled").length;
  const evergreenCount = items.filter((i) => i.status === "evergreen").length;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <FolderGit2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white leading-none">
            {publishedCount + scheduledCount}
          </p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            Active Assets
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
          <Eye className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white leading-none">
            {(totalViews / 1000).toFixed(1)}k
          </p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            Total Impressions
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white leading-none">
            {evergreenCount}
          </p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            Evergreen Repurposable
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white leading-none">
            12.2%
          </p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
            Avg Engagement Rate
          </p>
        </div>
      </div>
    </div>
  );
}
