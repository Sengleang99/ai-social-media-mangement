"use client";

import * as React from "react";
import Image from "next/image";
import {
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreHorizontal,
  ThumbsUp,
  Repeat,
  Volume2,
} from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { PostVariant } from "./types";

interface PlatformFeedPreviewProps {
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
  activePost: PostVariant;
  selectedImage: string;
}

const PLATFORM_TABS = [
  { id: "instagram", label: "Instagram" },
  { id: "x", label: "X (Twitter)" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
];

export function PlatformFeedPreview({
  selectedPlatform,
  onSelectPlatform,
  activePost,
  selectedImage,
}: PlatformFeedPreviewProps) {
  return (
    <div className="space-y-4">
      {/* Platform Tab Navigation */}
      <div className="p-2 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {PLATFORM_TABS.map((tab) => {
          const isSelected = selectedPlatform === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectPlatform(tab.id)}
              className={cn(
                "flex-1 min-w-[100px] py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-all cursor-pointer",
                isSelected
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm border border-zinc-200/80 dark:border-zinc-700"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-white/40"
              )}
            >
              <PlatformIcon platform={tab.id} className="w-3.5 h-3.5" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Feed Mockup Box */}
      <div className="rounded-3xl bg-zinc-100 dark:bg-zinc-950 p-4 sm:p-6 border border-zinc-200/80 dark:border-zinc-800 shadow-lg space-y-4">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span className="font-semibold flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-emerald-500" />
            Live {selectedPlatform.toUpperCase()} Feed Mockup
          </span>
          <span className="text-[11px]">Preview Mode</span>
        </div>

        {/* 1. INSTAGRAM MOCKUP */}
        {selectedPlatform === "instagram" && (
          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 overflow-hidden shadow-md max-w-md mx-auto">
            {/* Header */}
            <div className="p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center font-bold text-xs">
                    GL
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      greenleaf.bakery
                    </span>
                    <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px]">
                      ✓
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400">Main Street • Original Audio</p>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-zinc-400" />
            </div>

            {/* Media Image */}
            <div className="relative aspect-square w-full bg-zinc-950 overflow-hidden">
              <Image
                src={selectedImage}
                alt="Post media"
                unoptimized
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono z-10">
                1/5
              </div>
            </div>

            {/* Action Icons */}
            <div className="p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                  <Heart className="w-5 h-5 hover:text-rose-500 transition-colors cursor-pointer" />
                  <MessageCircle className="w-5 h-5 hover:text-emerald-500 transition-colors cursor-pointer" />
                  <Share2 className="w-5 h-5 hover:text-emerald-500 transition-colors cursor-pointer" />
                </div>
                <Bookmark className="w-5 h-5 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 transition-colors cursor-pointer" />
              </div>

              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                1,428 likes
              </p>

              {/* Caption */}
              <div className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-line">
                <span className="font-bold mr-1.5 text-zinc-900 dark:text-white">
                  greenleaf.bakery
                </span>
                <span className="font-semibold">{activePost.hook}</span>
                <p className="mt-1.5">{activePost.body}</p>
                <p className="mt-2 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
                  {activePost.hashtags.join(" ")}
                </p>
              </div>

              <p className="text-[10px] text-zinc-400 uppercase pt-1">
                2 hours ago · Translate
              </p>
            </div>
          </div>
        )}

        {/* 2. X / TWITTER MOCKUP */}
        {selectedPlatform === "x" && (
          <div className="rounded-2xl bg-white dark:bg-black border border-zinc-200/80 dark:border-zinc-800 p-4 shadow-md max-w-md mx-auto space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-xs">
                  GL
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      GreenLeaf Bakery
                    </span>
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-400 text-white flex items-center justify-center text-[9px]">
                      ✓
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500">@greenleaf_bakes</p>
                </div>
              </div>
              <PlatformIcon platform="x" className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 leading-relaxed whitespace-pre-line">
              <p className="font-semibold">{activePost.hook}</p>
              <p className="mt-2">{activePost.body}</p>
              <p className="mt-2 text-sky-500 font-mono text-xs">
                {activePost.hashtags.join(" ")}
              </p>
            </div>

            {selectedImage && (
              <div className="relative aspect-video max-h-48 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
                  src={selectedImage}
                  alt="Tweet media"
                  unoptimized
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between text-zinc-400 text-xs pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <span className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
                <MessageCircle className="w-4 h-4" /> 48
              </span>
              <span className="flex items-center gap-1 hover:text-emerald-500 cursor-pointer">
                <Repeat className="w-4 h-4" /> 182
              </span>
              <span className="flex items-center gap-1 hover:text-rose-500 cursor-pointer">
                <Heart className="w-4 h-4" /> 624
              </span>
              <span className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
                <Share2 className="w-4 h-4" />
              </span>
            </div>
          </div>
        )}

        {/* 3. TIKTOK MOCKUP */}
        {selectedPlatform === "tiktok" && (
          <div className="rounded-3xl bg-zinc-950 text-white overflow-hidden shadow-xl max-w-xs mx-auto aspect-[9/16] relative flex flex-col justify-between p-4 border border-zinc-800">
            <Image
              src={selectedImage}
              alt="TikTok video bg"
              unoptimized
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

            {/* Top header */}
            <div className="relative z-10 flex items-center justify-between text-xs font-bold">
              <span>Following | For You</span>
              <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px]">
                LIVE
              </span>
            </div>

            {/* Right side floating action column */}
            <div className="absolute right-3 bottom-20 z-10 flex flex-col items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-emerald-500 to-teal-500 border-2 border-white flex items-center justify-center font-bold text-xs text-white shadow-md">
                GL
              </div>
              <div className="flex flex-col items-center">
                <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
                <span className="text-[10px] font-bold">24.5K</span>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="w-7 h-7 text-white" />
                <span className="text-[10px] font-bold">482</span>
              </div>
              <div className="flex flex-col items-center">
                <Bookmark className="w-7 h-7 text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-bold">1.8K</span>
              </div>
              <div className="flex flex-col items-center">
                <Share2 className="w-7 h-7 text-white" />
                <span className="text-[10px] font-bold">Share</span>
              </div>
            </div>

            {/* Bottom caption overlay */}
            <div className="relative z-10 space-y-2 max-w-[80%]">
              <p className="text-xs font-bold text-white">@greenleaf_bakes</p>
              <p className="text-xs text-zinc-100 line-clamp-3 leading-snug">
                {activePost.hook} {activePost.body}
              </p>
              <p className="text-[11px] text-emerald-300 font-mono">
                {activePost.hashtags.join(" ")}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-300 pt-1">
                <Volume2 className="w-3 h-3 animate-bounce" />
                <span className="truncate">GreenLeaf Bakery • Original Morning Audio</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. FACEBOOK MOCKUP */}
        {selectedPlatform === "facebook" && (
          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-4 shadow-md max-w-md mx-auto space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  GL
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">
                    GreenLeaf Bakery & Cafe
                  </p>
                  <p className="text-[10px] text-zinc-400">Just now · 🌍 Public</p>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-line">
              <p className="font-semibold">{activePost.hook}</p>
              <p className="mt-1.5">{activePost.body}</p>
              <p className="mt-2 text-blue-600 dark:text-blue-400 font-mono text-[11px]">
                {activePost.hashtags.join(" ")}
              </p>
            </div>

            {selectedImage && (
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={selectedImage}
                  alt="FB post"
                  unoptimized
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-3.5 h-3.5 text-blue-600 fill-blue-600" /> 84 Likes
              </span>
              <span>19 Comments · 12 Shares</span>
            </div>
          </div>
        )}

        {/* 5. LINKEDIN MOCKUP */}
        {selectedPlatform === "linkedin" && (
          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-4 shadow-md max-w-md mx-auto space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-emerald-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                  GL
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">
                    GreenLeaf Bakery & Foodworks
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    12,400 followers · 1h · Edited
                  </p>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-line">
              <p className="font-bold">{activePost.hook}</p>
              <p className="mt-2">{activePost.body}</p>
              <p className="mt-2 text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">
                {activePost.hashtags.join(" ")}
              </p>
            </div>

            {selectedImage && (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
                  src={selectedImage}
                  alt="LinkedIn media"
                  unoptimized
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                👏 312 Reactions
              </span>
              <span>44 Comments</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
