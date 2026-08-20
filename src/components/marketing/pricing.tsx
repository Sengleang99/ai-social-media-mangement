"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Sparkles, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Free Starter",
    description: "Perfect for testing the AI generator and exploring basic scheduling.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "1 Brand Profile & Voice",
      "30 AI Generated Posts / month",
      "Connect 2 Social Accounts",
      "Standard Drafts & Calendar",
      "Community Support",
    ],
    ctaText: "Get Started Free",
    ctaHref: "/signup",
  },
  {
    id: "pro",
    name: "Pro Creator",
    badge: "Most Popular",
    popular: true,
    description: "For serious creators & founders scaling daily cross-platform reach.",
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      "3 Brand Profiles & Distinct AI Voices",
      "Unlimited AI Post Generation",
      "Connect 5 Social Accounts (All Networks)",
      "Smart Viral Timing & Visual Heatmap",
      "Auto-Hashtag & Platform Formatting",
      "Priority Support",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/signup",
  },
  {
    id: "agency",
    name: "Agency & Teams",
    badge: "Maximum Power",
    description: "For agencies, marketing teams, and creators managing multiple brands.",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "Unlimited Brand Profiles & AI Voices",
      "Unlimited Post Generation & Scheduling",
      "Unlimited Social Accounts",
      "Team Collaboration & Approval Workflows",
      "Custom AI Fine-Tuning & RSS Feeds",
      "Dedicated Account Manager",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/signup",
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-white/60 dark:bg-zinc-950/60">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header (Matching Design System) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-emerald-400 uppercase">
            PRICING PLANS?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Simple & Transparent Pricing.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Start for free, test the AI engine, and upgrade when you are ready to scale your social media presence on total autopilot.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={cn(
                "text-xs sm:text-sm font-medium transition-colors cursor-pointer",
                !isAnnual ? "text-zinc-900 dark:text-white font-bold" : "text-zinc-500"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual((prev) => !prev)}
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer",
                isAnnual ? "bg-emerald-600" : "bg-zinc-300 dark:bg-zinc-700"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-xs",
                  isAnnual ? "translate-x-6" : "translate-x-0"
                )}
              />
            </button>

            <span
              className={cn(
                "text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer",
                isAnnual ? "text-zinc-900 dark:text-white font-bold" : "text-zinc-500"
              )}
              onClick={() => setIsAnnual(true)}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={cn(
                  "rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative",
                  plan.popular
                    ? "bg-white dark:bg-zinc-900 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 ring-4 ring-emerald-500/10 md:-translate-y-2"
                    : "bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
                )}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-md shadow-emerald-500/25 uppercase tracking-wide flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white font-mono">
                        ${price}
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">
                        / month {isAnnual && price > 0 ? "(billed annually)" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider block">
                      Included features:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                        <div className="p-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Button */}
                <div className="pt-2">
                  <Link href={plan.ctaHref}>
                    <Button
                      variant={plan.popular ? "primary" : "secondary"}
                      size="lg"
                      isFullWidth
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {plan.ctaText}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-6 text-center text-xs text-zinc-500 dark:text-zinc-400 flex flex-wrap items-center justify-center gap-6">
          <span>🔒 100% Encrypted & Secure OAuth 2.0</span>
          <span>⚡ Instant Setup in 2 Minutes</span>
          <span>💳 No Credit Card Needed for Starter</span>
          <span>🔄 Cancel or Switch Plans Anytime</span>
        </div>
      </div>
    </section>
  );
}
export default PricingSection;
