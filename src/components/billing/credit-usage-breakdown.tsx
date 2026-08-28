"use client";

import * as React from "react";
import { Sparkles, Plus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreditUsageItem } from "./types";

interface CreditUsageBreakdownProps {
  usageItems: CreditUsageItem[];
  onTopUpCredits: () => void;
}

export function CreditUsageBreakdown({
  usageItems,
  onTopUpCredits,
}: CreditUsageBreakdownProps) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Monthly Usage & Feature Quotas</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Current billing cycle consumption resets on September 28, 2026
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onTopUpCredits}
          leftIcon={<Plus className="w-3.5 h-3.5" />}
        >
          Add Booster Pack
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {usageItems.map((item) => {
          const percent = Math.min(100, Math.round((item.used / item.total) * 100));

          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2.5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-900 dark:text-white">
                  {item.name}
                </span>
                <span className="font-mono text-zinc-500 font-bold">
                  {item.used.toLocaleString()} / {item.total.toLocaleString()} {item.unit}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400">
                <span>{percent}% consumed</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {(item.total - item.used).toLocaleString()} remaining
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Credit Info Banner */}
      <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span className="text-zinc-800 dark:text-zinc-200">
            Unused AI studio credits roll over automatically for up to 60 days on the Pro plan.
          </span>
        </div>
      </div>
    </div>
  );
}
