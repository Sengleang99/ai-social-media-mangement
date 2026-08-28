"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Sparkles,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Copy,
  Check,
  Flame,
  Calendar,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { INITIAL_CONTENT_ITEMS } from "@/components/content";

export default function ContentItemDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const item = INITIAL_CONTENT_ITEMS.find((i) => i.id === id) || INITIAL_CONTENT_ITEMS[0];

  const [copied, setCopied] = React.useState(false);
  const [activePlatformTab, setActivePlatformTab] = React.useState(item.platforms[0] || "instagram");

  const handleCopy = () => {
    const text = `${item.hook}\n\n${item.body}\n\n${item.hashtags.join(" ")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-3">
          <Link href="/content">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Content Library
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopy}
            leftIcon={copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          >
            {copied ? "Copied!" : "Copy Post"}
          </Button>

          <Link href={`/create?repurpose=${encodeURIComponent(item.hook)}`}>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Sparkles className="w-3.5 h-3.5" />}
            >
              1-Click Repurpose with AI
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Grid: Left Details & Metrics, Right Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 7 Columns: Metadata & Performance Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          {/* Post Header Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs capitalize border border-emerald-200 dark:border-emerald-800">
                  {item.status}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-xs uppercase tracking-wider">
                  {item.format}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                <span>Created {item.createdAt}</span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white">
              {item.title}
            </h1>

            {/* Hook & Copy Box */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  3-Sec Opening Hook
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-500" /> {item.ctrScore}% CTR
                </span>
              </div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                &ldquo;{item.hook}&rdquo;
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line pt-1 border-t border-zinc-200/60 dark:border-zinc-800/80">
                {item.body}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Analytics Grid */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Omnichannel Distribution Metrics</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 text-center">
                <p className="text-xs text-zinc-400 flex items-center justify-center gap-1">
                  <Eye className="w-3 h-3" /> Total Views
                </p>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white mt-1">
                  {item.views > 0 ? (item.views / 1000).toFixed(1) + "k" : "Pending"}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 text-center">
                <p className="text-xs text-zinc-400 flex items-center justify-center gap-1">
                  <Heart className="w-3 h-3 text-rose-500" /> Likes
                </p>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white mt-1">
                  {item.likes}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 text-center">
                <p className="text-xs text-zinc-400 flex items-center justify-center gap-1">
                  <MessageCircle className="w-3 h-3 text-emerald-500" /> Comments
                </p>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white mt-1">
                  {item.comments}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 text-center">
                <p className="text-xs text-zinc-400 flex items-center justify-center gap-1">
                  <Share2 className="w-3 h-3 text-sky-500" /> Shares
                </p>
                <p className="text-lg font-extrabold text-zinc-900 dark:text-white mt-1">
                  {item.shares}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Visual Asset & Native Mockup */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <span>Target Feed Preview</span>
              </span>

              {/* Platform Switcher */}
              <div className="flex items-center gap-1">
                {item.platforms.map((p) => (
                  <button
                    key={p}
                    onClick={() => setActivePlatformTab(p)}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                      activePlatformTab === p
                        ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border-zinc-900 dark:border-white"
                        : "text-zinc-400 border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <PlatformIcon platform={p} className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Media Card */}
            {item.imageUrl ? (
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  unoptimized
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="p-8 text-center rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-400 text-xs">
                Text Thread / Status Post
              </div>
            )}

            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p className="font-bold text-zinc-900 dark:text-white">{item.hook}</p>
              <p className="mt-1">{item.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
