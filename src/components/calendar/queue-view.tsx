"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Sparkles, Send, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { ScheduledPost } from "./types";

interface QueueViewProps {
  posts: ScheduledPost[];
  onSelectPost: (post: ScheduledPost) => void;
  onPublishPost: (postId: string) => void;
  onDeletePost: (postId: string) => void;
}

export function QueueView({ posts, onSelectPost, onPublishPost, onDeletePost }: QueueViewProps) {
  // Sort posts chronologically by date and time
  const sortedPosts = [...posts].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm p-4 sm:p-6 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 dark:border-zinc-800">
        <div>
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
            Upcoming Publishing Pipeline ({sortedPosts.length})
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Chronological queue ready for automatic distribution
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {sortedPosts.map((post) => {
          const isPublished = post.status === "published";
          const isAiQueued = post.status === "ai_queued";

          return (
            <div
              key={post.id}
              className={cn(
                "p-4 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group",
                isPublished
                  ? "bg-zinc-50/50 dark:bg-zinc-950/30 border-zinc-200 dark:border-zinc-800/80 opacity-70"
                  : isAiQueued
                    ? "bg-purple-500/5 border-purple-500/30 hover:border-purple-500/60"
                    : "bg-white dark:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-500/50 shadow-xs",
              )}
            >
              {/* Left Column: Image + Info */}
              <div className="flex items-start gap-3.5 min-w-0">
                {post.imageUrl ? (
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      unoptimized
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
                    <PlatformIcon platform={post.platforms[0]} className="w-6 h-6 text-zinc-500" />
                  </div>
                )}

                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4
                      onClick={() => onSelectPost(post)}
                      className="text-sm font-bold text-zinc-900 dark:text-white truncate hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                    >
                      {post.title}
                    </h4>

                    {/* Status Badge */}
                    <span
                      className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full capitalize",
                        isPublished
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          : isAiQueued
                            ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                      )}
                    >
                      {post.status.replace("_", " ")}
                    </span>

                    {post.isAiGenerated && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-200 dark:border-purple-800/60">
                        <Sparkles className="w-2.5 h-2.5" /> AI Autopilot
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-1">
                    {post.hook}
                  </p>

                  {/* Channel icons & date */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 pt-0.5">
                    <div className="flex items-center gap-1.5">
                      {post.platforms.map((plat) => (
                        <div
                          key={plat}
                          className="w-5 h-5 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center"
                          title={plat}
                        >
                          <PlatformIcon platform={plat} className="w-3 h-3" />
                        </div>
                      ))}
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-mono">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {post.date} at {post.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                {!isPublished && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onPublishPost(post.id)}
                    leftIcon={<Send className="w-3 h-3 fill-current" />}
                  >
                    Publish Now
                  </Button>
                )}

                <Link href={`/create?edit=${post.id}`}>
                  <Button variant="secondary" size="sm" leftIcon={<Edit className="w-3 h-3" />}>
                    Edit
                  </Button>
                </Link>

                <button
                  type="button"
                  onClick={() => onDeletePost(post.id)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
                  title="Remove from queue"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
