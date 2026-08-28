"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  LayoutGrid,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";

interface ContentFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusTab: string;
  onStatusTabChange: (status: string) => void;
  platformFilter: string;
  onPlatformFilterChange: (p: string) => void;
  formatFilter: string;
  onFormatFilterChange: (f: string) => void;
  viewMode: "grid" | "table";
  onViewModeChange: (mode: "grid" | "table") => void;
  counts: Record<string, number>;
}

const STATUS_TABS = [
  { id: "all", label: "All Posts" },
  { id: "published", label: "Published" },
  { id: "scheduled", label: "Scheduled" },
  { id: "evergreen", label: "Evergreen" },
  { id: "draft", label: "Drafts" },
];

const PLATFORM_FILTERS = [
  { id: "all", label: "All Channels" },
  { id: "instagram", label: "Instagram" },
  { id: "x", label: "X" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
];

const FORMAT_FILTERS = [
  { id: "all", label: "All Formats" },
  { id: "carousel", label: "Carousel" },
  { id: "reel", label: "Reel / Video" },
  { id: "image", label: "Photo Post" },
  { id: "thread", label: "Thread" },
  { id: "promo", label: "Promo Card" },
];

export function ContentFilters({
  searchQuery,
  onSearchChange,
  statusTab,
  onStatusTabChange,
  platformFilter,
  onPlatformFilterChange,
  formatFilter,
  onFormatFilterChange,
  viewMode,
  onViewModeChange,
  counts,
}: ContentFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Content Library & Assets
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Search, analyze, and 1-click repurpose all multi-channel social media assets
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/create">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Create Content
            </Button>
          </Link>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-3 sm:p-4 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-3">
        {/* Search Bar + View Toggle */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search posts by topic, hook, body, or hashtag..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <div className="p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1">
              <button
                type="button"
                onClick={() => onViewModeChange("grid")}
                className={cn(
                  "p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer",
                  viewMode === "grid"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs font-bold"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                )}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cards</span>
              </button>

              <button
                type="button"
                onClick={() => onViewModeChange("table")}
                className={cn(
                  "p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer",
                  viewMode === "table"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs font-bold"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                )}
                title="Table View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex items-center gap-1 border-b border-zinc-100 dark:border-zinc-800/80 pb-2 overflow-x-auto no-scrollbar">
          {STATUS_TABS.map((tab) => {
            const active = statusTab === tab.id;
            const count = counts[tab.id] ?? 0;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onStatusTabChange(tab.id)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
                  active
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded-full font-mono",
                    active
                      ? "bg-white/20 dark:bg-black/20"
                      : "bg-zinc-200/70 dark:bg-zinc-800"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Channel & Format Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          {/* Channels Filter */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <span className="text-[11px] text-zinc-400 font-semibold mr-1 shrink-0">
              Channel:
            </span>
            {PLATFORM_FILTERS.map((pf) => {
              const active = platformFilter === pf.id;
              return (
                <button
                  key={pf.id}
                  onClick={() => onPlatformFilterChange(pf.id)}
                  className={cn(
                    "px-2.5 py-1 rounded-xl text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
                    active
                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500 font-bold shadow-2xs"
                      : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent"
                  )}
                >
                  {pf.id !== "all" && (
                    <PlatformIcon platform={pf.id} className="w-3 h-3" />
                  )}
                  <span>{pf.label}</span>
                </button>
              );
            })}
          </div>

          {/* Formats Filter */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <SlidersHorizontal className="w-3 h-3 text-zinc-400 mr-1 shrink-0" />
            <select
              value={formatFilter}
              onChange={(e) => onFormatFilterChange(e.target.value)}
              className="text-[11px] font-semibold bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-2.5 py-1 text-zinc-700 dark:text-zinc-300 focus:outline-none"
            >
              {FORMAT_FILTERS.map((fmt) => (
                <option key={fmt.id} value={fmt.id}>
                  {fmt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
