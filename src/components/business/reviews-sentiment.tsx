"use client";

import * as React from "react";
import Link from "next/link";
import { Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomerReview } from "./types";

interface ReviewsSentimentProps {
  reviews: CustomerReview[];
}

export function ReviewsSentiment({ reviews }: ReviewsSentimentProps) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Customer Reviews & Social Proof
              </h3>
              <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center gap-1">
                4.9 ★ (348 Reviews)
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Synced from Google Maps & Yelp — Turn 5-star reviews into high-converting posts
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>

                <span className="text-[10px] text-zinc-400 font-mono capitalize">
                  {rev.source} · {rev.date}
                </span>
              </div>

              <p className="text-xs text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                &ldquo;{rev.content}&rdquo;
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-900 dark:text-white">
                {rev.author}
              </span>

              <Link
                href={`/create?prompt=${encodeURIComponent(
                  `Turn this 5-star customer review from ${rev.author} into an engaging social proof post: "${rev.content}"`
                )}`}
              >
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Sparkles className="w-3 h-3 text-purple-500" />}
                  className="h-7 text-[11px] px-2"
                >
                  Create Post
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
