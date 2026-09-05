"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import {
  ContentItem,
  INITIAL_CONTENT_ITEMS,
  ContentStats,
  ContentFilters,
  ContentGrid,
  ContentTable,
  ContentRepurposeModal,
} from "@/components/content";

export default function ContentPage() {
  const [items] = React.useState<ContentItem[]>(INITIAL_CONTENT_ITEMS);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusTab, setStatusTab] = React.useState("all");
  const [platformFilter, setPlatformFilter] = React.useState("all");
  const [formatFilter, setFormatFilter] = React.useState("all");
  const [viewMode, setViewMode] = React.useState<"grid" | "table">("grid");

  const [selectedRepurposeItem, setSelectedRepurposeItem] = React.useState<ContentItem | null>(
    null,
  );
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  // Helper toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Copy caption & hashtags
  const handleCopy = (item: ContentItem) => {
    const fullText = `${item.hook}\n\n${item.body}\n\n${item.hashtags.join(" ")}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(item.id);
    showToast("📋 Caption & hashtags copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Compute status counts for badges
  const counts = React.useMemo(() => {
    return {
      all: items.length,
      published: items.filter((i) => i.status === "published").length,
      scheduled: items.filter((i) => i.status === "scheduled").length,
      evergreen: items.filter((i) => i.status === "evergreen").length,
      draft: items.filter((i) => i.status === "draft").length,
    };
  }, [items]);

  // Filter items based on active criteria
  const filteredItems = React.useMemo(() => {
    return items.filter((item) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesHook = item.hook.toLowerCase().includes(q);
        const matchesBody = item.body.toLowerCase().includes(q);
        const matchesTag = item.hashtags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesHook && !matchesBody && !matchesTag) return false;
      }

      // Status tab
      if (statusTab !== "all" && item.status !== statusTab) return false;

      // Platform filter
      if (
        platformFilter !== "all" &&
        !item.platforms.includes(
          platformFilter as "instagram" | "x" | "tiktok" | "facebook" | "linkedin",
        )
      )
        return false;

      // Format filter
      if (formatFilter !== "all" && item.format !== formatFilter) return false;

      return true;
    });
  }, [items, searchQuery, statusTab, platformFilter, formatFilter]);

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-bounce [animation-duration:1s] border border-emerald-500/40">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* KPI Stats Overview */}
      <ContentStats items={items} />

      {/* Header, Search & Filter Toolbar */}
      <ContentFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusTab={statusTab}
        onStatusTabChange={setStatusTab}
        platformFilter={platformFilter}
        onPlatformFilterChange={setPlatformFilter}
        formatFilter={formatFilter}
        onFormatFilterChange={setFormatFilter}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        counts={counts}
      />

      {/* Main Grid or Table Views */}
      {viewMode === "grid" ? (
        <ContentGrid
          items={filteredItems}
          onRepurpose={setSelectedRepurposeItem}
          onCopy={handleCopy}
          copiedId={copiedId}
        />
      ) : (
        <ContentTable
          items={filteredItems}
          onRepurpose={setSelectedRepurposeItem}
          onCopy={handleCopy}
          copiedId={copiedId}
        />
      )}

      {/* 1-Click Repurpose Studio Modal */}
      <ContentRepurposeModal
        item={selectedRepurposeItem}
        onClose={() => setSelectedRepurposeItem(null)}
      />
    </div>
  );
}
