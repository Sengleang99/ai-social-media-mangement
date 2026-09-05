"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Copy, Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { ContentItem } from "./types";

interface ContentTableProps {
  items: ContentItem[];
  onRepurpose: (item: ContentItem) => void;
  onCopy: (item: ContentItem) => void;
  copiedId: string | null;
}

export function ContentTable({ items, onRepurpose, onCopy, copiedId }: ContentTableProps) {
  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-zinc-50 dark:bg-zinc-950/60 text-zinc-400 font-bold uppercase tracking-wider border-b border-zinc-200/80 dark:border-zinc-800">
            <tr>
              <th className="py-3.5 px-4">Post & Topic</th>
              <th className="py-3.5 px-3">Channels</th>
              <th className="py-3.5 px-3">Format</th>
              <th className="py-3.5 px-3">Status</th>
              <th className="py-3.5 px-3">Hook Score</th>
              <th className="py-3.5 px-3">Engagement</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/80 text-zinc-700 dark:text-zinc-300">
            {items.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-zinc-50/70 dark:hover:bg-zinc-800/30 transition-colors"
              >
                {/* Post info */}
                <td className="py-3 px-4 min-w-[240px]">
                  <div className="flex items-center gap-3">
                    {item.imageUrl ? (
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          unoptimized
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
                        <PlatformIcon
                          platform={item.platforms[0]}
                          className="w-4 h-4 text-zinc-500"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <Link href={`/content/${item.id}`}>
                        <p className="font-bold text-zinc-900 dark:text-white truncate hover:underline">
                          {item.title}
                        </p>
                      </Link>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.hook}</p>
                    </div>
                  </div>
                </td>

                {/* Platforms */}
                <td className="py-3 px-3">
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
                </td>

                {/* Format */}
                <td className="py-3 px-3">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold uppercase">
                    {item.format}
                  </span>
                </td>

                {/* Status */}
                <td className="py-3 px-3">
                  <span
                    className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full capitalize",
                      item.status === "published"
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : item.status === "scheduled"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : item.status === "evergreen"
                            ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500",
                    )}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Hook Score */}
                <td className="py-3 px-3 font-mono font-bold">
                  <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <Flame className="w-3 h-3 text-orange-500" />
                    <span>{item.ctrScore}%</span>
                  </div>
                </td>

                {/* Engagement */}
                <td className="py-3 px-3 font-mono text-[11px]">{item.engagementRate}</td>

                {/* Actions */}
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => onCopy(item)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      title="Copy Caption"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onRepurpose(item)}
                      className="h-7 text-[11px] px-2.5"
                      leftIcon={<Sparkles className="w-3 h-3 text-purple-500" />}
                    >
                      Repurpose
                    </Button>

                    <Link href={`/content/${item.id}`}>
                      <button
                        type="button"
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        title="View Full Analytics"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
