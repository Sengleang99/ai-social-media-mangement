"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Eye, Heart, MessageCircle, Share2, Flame, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { MOCK_TOP_POSTS } from "./types";

export function TopPostsLeaderboard() {
  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Top Performing Viral Content</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Posts with the highest conversion and engagement velocity
          </p>
        </div>

        <Link href="/content">
          <Button variant="ghost" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
            View Library
          </Button>
        </Link>
      </div>

      <div className="space-y-3">
        {MOCK_TOP_POSTS.map((post, idx) => (
          <div
            key={post.id}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          >
            {/* Rank + Media + Info */}
            <div className="flex items-center gap-3.5 min-w-0">
              <span className="w-6 text-sm font-extrabold text-zinc-400 dark:text-zinc-600 font-mono">
                #{idx + 1}
              </span>

              {post.imageUrl ? (
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    unoptimized
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
                  <PlatformIcon platform={post.platform} className="w-5 h-5 text-zinc-500" />
                </div>
              )}

              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <PlatformIcon platform={post.platform} className="w-3 h-3" />
                  </span>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                    {post.title}
                  </p>
                </div>
                <p className="text-[11px] text-zinc-500 line-clamp-1">{post.hook}</p>
                <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono pt-0.5">
                  <span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 font-bold">
                    <Eye className="w-3 h-3 text-blue-500" /> {(post.views / 1000).toFixed(1)}k
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-500" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-emerald-500" /> {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Share2 className="w-3 h-3 text-sky-500" /> {post.shares}
                  </span>
                </div>
              </div>
            </div>

            {/* CTR Score + Repurpose Action */}
            <div className="flex items-center gap-3 self-end md:self-center shrink-0">
              <div className="text-right">
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  {post.ctrScore}% CTR
                </span>
                <p className="text-[9px] text-zinc-400">Viral Velocity</p>
              </div>

              <Link href={`/create?repurpose=${encodeURIComponent(post.hook)}`}>
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Sparkles className="w-3.5 h-3.5 text-purple-500" />}
                >
                  Repurpose
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
