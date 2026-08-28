"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  LayoutGrid,
  Columns3,
  ListOrdered,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { CalendarViewMode } from "./types";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  viewMode: CalendarViewMode;
  onViewModeChange: (mode: CalendarViewMode) => void;
  selectedPlatformFilter: string;
  onPlatformFilterChange: (platform: string) => void;
}

const PLATFORM_FILTERS = [
  { id: "all", label: "All Channels" },
  { id: "instagram", label: "Instagram" },
  { id: "x", label: "X (Twitter)" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
];

export function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
  viewMode,
  onViewModeChange,
  selectedPlatformFilter,
  onPlatformFilterChange,
}: CalendarHeaderProps) {
  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-4">
      {/* Top Title & Primary Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Social Content Calendar
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Omnichannel auto-scheduling & peak publishing pipeline
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <Link href="/create">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
            >
              New Post
            </Button>
          </Link>
        </div>
      </div>

      {/* Control Bar: Date Navigator + View Mode Switcher + Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
        {/* Date Navigation */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={onToday}
            className="text-xs font-semibold"
          >
            Today
          </Button>

          <div className="flex items-center gap-1">
            <button
              onClick={onPrevMonth}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
              title="Previous month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNextMonth}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
              title="Next month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white ml-1">
            {monthName}
          </span>
        </div>

        {/* View Mode Switcher + Channel Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Channel Filters */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            {PLATFORM_FILTERS.map((filter) => {
              const active = selectedPlatformFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => onPlatformFilterChange(filter.id)}
                  className={cn(
                    "px-2.5 py-1 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
                    active
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  )}
                >
                  {filter.id !== "all" && (
                    <PlatformIcon platform={filter.id} className="w-3 h-3" />
                  )}
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Buttons */}
          <div className="p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1 ml-auto">
            <button
              type="button"
              onClick={() => onViewModeChange("month")}
              className={cn(
                "p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer",
                viewMode === "month"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs font-bold"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              )}
              title="Month View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Month</span>
            </button>

            <button
              type="button"
              onClick={() => onViewModeChange("week")}
              className={cn(
                "p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer",
                viewMode === "week"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs font-bold"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              )}
              title="Week View"
            >
              <Columns3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Week</span>
            </button>

            <button
              type="button"
              onClick={() => onViewModeChange("queue")}
              className={cn(
                "p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer",
                viewMode === "queue"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs font-bold"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              )}
              title="Queue List View"
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Queue</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
