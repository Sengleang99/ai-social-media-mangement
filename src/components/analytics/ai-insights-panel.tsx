"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_AI_INSIGHTS } from "./types";

export function AiInsightsPanel() {
  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-br from-purple-500/10 via-emerald-500/5 to-zinc-900/5 dark:from-purple-950/30 dark:via-zinc-900 dark:to-zinc-900 border border-purple-500/30 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              AI Growth Intelligence & Audits
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Data-backed growth recommendations tailored to your niche
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MOCK_AI_INSIGHTS.map((insight) => (
          <div
            key={insight.id}
            className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-purple-500/20 dark:border-purple-500/30 shadow-xs flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
                <Lightbulb className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Growth Opportunity
                </span>
              </div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white leading-snug">
                {insight.title}
              </h4>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {insight.description}
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <Link href={`/create?prompt=${encodeURIComponent(insight.actionPrompt)}`}>
                <Button
                  variant="primary"
                  size="sm"
                  isFullWidth
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="bg-purple-600 hover:bg-purple-500 text-white border-purple-500/30"
                >
                  {insight.actionText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
