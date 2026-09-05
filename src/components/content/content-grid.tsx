"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Copy,
  Check,
  Flame,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { ContentItem } from "./types";

interface ContentGridProps {
  items: ContentItem[];
  onRepurpose: (item: ContentItem) => void;
  onCopy: (item: ContentItem) => void;
  copiedId: string | null;
}

export function ContentGrid({ items, onRepurpose, onCopy, copiedId }: ContentGridProps) {
  if (items.length === 0) {
    return (
      <div className="p-12 text-center rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
        <p className="text-sm font-bold text-zinc-900 dark:text-white">
          No content matches your filter criteria
        </p>
        <p className="text-xs text-zinc-400 max-w-sm mx-auto">
          Try clearing your search query or switching channel filters to view existing social
          assets.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => {
        const isPublished = item.status === "published";
        const isEvergreen = item.status === "evergreen";
        const isScheduled = item.status === "scheduled";

        return (
          <div
            key={item.id}
            className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Top Media or Header */}
            <div>
              {item.imageUrl ? (
                <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    unoptimized
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Format & Status Badges Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                      {item.format}
                    </span>
                    {isEvergreen && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-600/90 text-white text-[10px] font-bold flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Evergreen
                      </span>
                    )}
                  </div>

                  {/* CTR Score Badge */}
                  <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-mono font-bold shadow-xs flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-200" />
                    <span>{item.ctrScore}% CTR</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-wider">
                      {item.format}
                    </span>
                    {isEvergreen && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold">
                        ★ Evergreen
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    {item.ctrScore}% Hook CTR
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 space-y-3">
                {/* Title & Platforms */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {item.platforms.map((plat) => (
                        <div
                          key={plat}
                          className="w-5 h-5 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400"
                          title={plat}
                        >
                          <PlatformIcon platform={plat} className="w-3 h-3" />
                        </div>
                      ))}
                    </div>

                    <span
                      className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full capitalize",
                        isPublished
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          : isScheduled
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500",
                      )}
                    >
                      {item.status}
                    </span>
                  </div>

                  <Link href={`/content/${item.id}`}>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 pt-1">
                      {item.title}
                    </h3>
                  </Link>
                </div>

                {/* Hook & Body Snippet */}
                <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-relaxed">
                  {item.hook}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                  {item.hashtags.slice(0, 3).join(" ")}
                </div>

                {/* Performance Metrics Bar (if published) */}
                {isPublished && (
                  <div className="grid grid-cols-4 gap-1 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 text-center">
                    <div>
                      <p className="text-[9px] text-zinc-400 flex items-center justify-center gap-0.5">
                        <Eye className="w-2.5 h-2.5" /> Views
                      </p>
                      <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                        {(item.views / 1000).toFixed(1)}k
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-zinc-400 flex items-center justify-center gap-0.5">
                        <Heart className="w-2.5 h-2.5" /> Likes
                      </p>
                      <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                        {item.likes}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-zinc-400 flex items-center justify-center gap-0.5">
                        <MessageCircle className="w-2.5 h-2.5" /> Comments
                      </p>
                      <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                        {item.comments}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-zinc-400 flex items-center justify-center gap-0.5">
                        <Share2 className="w-2.5 h-2.5" /> Shares
                      </p>
                      <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                        {item.shares}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-zinc-100 dark:border-zinc-800/60 mt-2">
              <button
                type="button"
                onClick={() => onCopy(item)}
                className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-xs flex items-center gap-1 font-medium"
                title="Copy caption"
              >
                {copiedId === item.id ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span className="text-[11px]">{copiedId === item.id ? "Copied" : "Copy"}</span>
              </button>

              <div className="flex items-center gap-1.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onRepurpose(item)}
                  leftIcon={<Sparkles className="w-3 h-3 text-purple-500" />}
                >
                  Repurpose
                </Button>

                <Link href={`/content/${item.id}`}>
                  <Button variant="ghost" size="sm" className="px-2" title="View Analytics">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
