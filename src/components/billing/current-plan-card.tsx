"use client";

import * as React from "react";
import { Sparkles, Calendar, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CurrentPlanCardProps {
  billingCycle: "monthly" | "yearly";
  onBillingCycleChange: (cycle: "monthly" | "yearly") => void;
  onUpgradeClick: () => void;
}

export function CurrentPlanCard({
  billingCycle,
  onBillingCycleChange,
  onUpgradeClick,
}: CurrentPlanCardProps) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-purple-500/10 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-900 border border-emerald-500/30 shadow-xs space-y-6">
      {/* Top Banner Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
              Pro Plan
            </span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Active & Verified
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white">
            $49<span className="text-sm font-normal text-zinc-500">/month</span>
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Next renewal on <strong>September 28, 2026</strong> via Visa ending in{" "}
            <strong>4242</strong>
          </p>
        </div>

        {/* Billing Cycle Switcher */}
        <div className="p-1 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => onBillingCycleChange("monthly")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-xs"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => onBillingCycleChange("yearly")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              billingCycle === "yearly"
                ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-xs"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-500 text-white text-[9px] font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plan Highlights & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-700 dark:text-zinc-300">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            5,000 AI Credits / mo
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-500" />
            15 Social Channels
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
            Autopilot Heatmap Queue
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={onUpgradeClick}
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Upgrade Tier
          </Button>
        </div>
      </div>
    </div>
  );
}
