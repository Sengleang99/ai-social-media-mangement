"use client";

import * as React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BILLING_PLANS } from "./types";

interface PlanComparisonGridProps {
  billingCycle: "monthly" | "yearly";
  onSelectPlan: (planId: string) => void;
}

export function PlanComparisonGrid({
  billingCycle,
  onSelectPlan,
}: PlanComparisonGridProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-bold text-zinc-900 dark:text-white">
          Available Subscription Tiers
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Scale your omnichannel presence with increased AI limits and dedicated models
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {BILLING_PLANS.map((plan) => {
          const isPro = plan.id === "pro";
          const price =
            billingCycle === "yearly" ? plan.priceYearly : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-6 ${
                isPro
                  ? "bg-white dark:bg-zinc-900 border-emerald-500/80 shadow-md ring-2 ring-emerald-500/20"
                  : "bg-white dark:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:border-zinc-300"
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                      {plan.name}
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                      {plan.description}
                    </p>
                  </div>

                  {plan.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        isPro
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                          : "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-zinc-500">
                      / month {billingCycle === "yearly" && "(billed annually)"}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  {plan.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Button
                  variant={isPro ? "outline" : "primary"}
                  size="md"
                  isFullWidth
                  onClick={() => onSelectPlan(plan.id)}
                  leftIcon={!isPro ? <Sparkles className="w-3.5 h-3.5" /> : undefined}
                >
                  {isPro ? "Current Plan" : `Upgrade to ${plan.name}`}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
