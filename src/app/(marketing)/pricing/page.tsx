"use client";

import * as React from "react";
import Link from "next/link";
import {
  Check,
  X as CrossIcon,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { TestimonialsSection } from "@/components/marketing/testimonials";
import { FaqSection } from "@/components/marketing/faq";

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
    description: "Ideal for individual creators exploring AI generation & basic manual scheduling.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "1 Brand Profile & AI Voice",
      "30 AI Generated Posts / month",
      "Connect 2 Social Accounts",
      "Standard Calendar & Drafts",
      "Community & Email Support",
    ],
    ctaText: "Get Started Free",
    ctaHref: "/signup",
  },
  {
    id: "pro",
    name: "Pro Creator",
    badge: "Most Popular",
    popular: true,
    description: "For serious creators, founders & marketers aiming for daily multi-platform reach.",
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      "3 Brand Profiles & Distinct AI Voices",
      "Unlimited AI Post Generation",
      "Connect 5 Social Accounts (All Networks)",
      "Peak-Hour Viral Timing & Heatmaps",
      "Auto-Hashtag & Platform Formatting",
      "AI Viral Hook Scoring Engine",
      "Priority 24/7 Support",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/signup",
  },
  {
    id: "agency",
    name: "Agency & Teams",
    badge: "Maximum Power",
    description: "For agencies and high-velocity marketing teams managing multi-client pipelines.",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "Unlimited Brand Profiles & AI Voices",
      "Unlimited AI Generation & Scheduling",
      "Unlimited Social Accounts",
      "5 Team Member Seats & Approvals",
      "Custom Fine-Tuned Brand AI Models",
      "Bulk CSV Import & RSS Automations",
      "Dedicated Account Manager & SLA",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/signup",
  },
];

interface ComparisonCategory {
  category: string;
  features: {
    name: string;
    starter: string | boolean;
    pro: string | boolean;
    agency: string | boolean;
  }[];
}

const COMPARISON_DATA: ComparisonCategory[] = [
  {
    category: "AI Content Engine",
    features: [
      { name: "Monthly AI Post Generations", starter: "30 posts", pro: "Unlimited", agency: "Unlimited" },
      { name: "Unique Brand AI Voices", starter: "1 Profile", pro: "3 Profiles", agency: "Unlimited" },
      { name: "Viral Hook 3-Sec Scoring", starter: false, pro: true, agency: true },
      { name: "Human Authenticity Filter (99.4%)", starter: true, pro: true, agency: true },
      { name: "1-to-5 Platform Auto-Remixer", starter: "Manual", pro: true, agency: true },
      { name: "Custom Fine-Tuned Model Weights", starter: false, pro: false, agency: true },
    ],
  },
  {
    category: "Publishing & Scheduling",
    features: [
      { name: "Connected Social Accounts", starter: "2 Accounts", pro: "5 Accounts", agency: "Unlimited" },
      { name: "Supported Networks (IG, TT, X, FB, YT)", starter: "2 Networks", pro: "All 5 Networks", agency: "All 5 Networks" },
      { name: "Peak-Hour Auto Timing Engine", starter: false, pro: true, agency: true },
      { name: "Drag-and-Drop Visual Calendar", starter: true, pro: true, agency: true },
      { name: "Live Feed Mobile Previews", starter: false, pro: true, agency: true },
      { name: "Bulk CSV & RSS Feed Ingestion", starter: false, pro: false, agency: true },
    ],
  },
  {
    category: "Collaboration & Support",
    features: [
      { name: "Team Member Seats", starter: "1 Seat", pro: "1 Seat", agency: "5 Seats Included" },
      { name: "Client Review & Approval Workflows", starter: false, pro: false, agency: true },
      { name: "Support Channel", starter: "Community", pro: "Priority Email & Chat", agency: "Dedicated 24/7 Manager" },
      { name: "Uptime SLA Guarantee", starter: "99.0%", pro: "99.9%", agency: "99.99%" },
    ],
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <div className="relative overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* 1. Header & Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center relative z-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Simple, Predictable Pricing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Scale Your Reach, <br />
          <span className="text-emerald-600 dark:text-emerald-400">Not Your Workload.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Start for free, test our AI human-voice engine, and upgrade when you are ready to publish across 5 major platforms on total autopilot.
        </p>

        {/* Monthly vs Annual Toggle */}
        <div className="pt-6 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none",
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
            aria-label="Toggle annual billing"
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
              "text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer select-none",
              isAnnual ? "text-zinc-900 dark:text-white font-bold" : "text-zinc-500"
            )}
            onClick={() => setIsAnnual(true)}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              Save 20% + 2 Mo Free
            </span>
          </span>
        </div>
      </div>

      {/* 2. Pricing Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={cn(
                  "rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative",
                  plan.popular
                    ? "bg-white dark:bg-zinc-900 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/15 ring-4 ring-emerald-500/10 md:-translate-y-3"
                    : "bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
                )}
              >
                {/* Popular Badge */}
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
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {plan.name}
                    </h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display */}
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

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider block">
                      Everything in {plan.name}:
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

        {/* Reassurance Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/80 text-center text-xs text-zinc-500 dark:text-zinc-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            100% Encrypted & Safe OAuth 2.0
          </span>
          <span>•</span>
          <span>⚡ Instant Setup in 2 Minutes</span>
          <span>•</span>
          <span>💳 No Credit Card Needed for Starter</span>
          <span>•</span>
          <span>🔄 Cancel or Switch Plans Anytime</span>
        </div>
      </div>

      {/* 3. Detailed Feature Comparison Table */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-zinc-50/70 dark:bg-zinc-900/50 border-y border-zinc-200/70 dark:border-zinc-800/70 relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              FULL FEATURE MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Compare All Plan Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Review every limit and capability to choose the exact plan that fits your content production workflow.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-800/50">
                  <th className="p-4 sm:p-5 font-bold text-zinc-900 dark:text-white w-1/3">
                    Features
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-zinc-900 dark:text-white text-center w-2/9">
                    Free Starter
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-emerald-600 dark:text-emerald-400 text-center w-2/9 bg-emerald-50/50 dark:bg-emerald-950/20">
                    Pro Creator (★)
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-zinc-900 dark:text-white text-center w-2/9">
                    Agency & Teams
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                {COMPARISON_DATA.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-zinc-100/60 dark:bg-zinc-800/30">
                      <td
                        colSpan={4}
                        className="py-3 px-4 sm:px-5 font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, featIdx) => (
                      <tr key={featIdx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-4 sm:p-5 text-zinc-800 dark:text-zinc-200 font-medium">
                          {feat.name}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-zinc-600 dark:text-zinc-400">
                          {typeof feat.starter === "boolean" ? (
                            feat.starter ? (
                              <Check className="w-4 h-4 mx-auto text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <CrossIcon className="w-4 h-4 mx-auto text-zinc-300 dark:text-zinc-600" />
                            )
                          ) : (
                            feat.starter
                          )}
                        </td>
                        <td className="p-4 sm:p-5 text-center font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50/20 dark:bg-emerald-950/10">
                          {typeof feat.pro === "boolean" ? (
                            feat.pro ? (
                              <Check className="w-4 h-4 mx-auto text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
                            ) : (
                              <CrossIcon className="w-4 h-4 mx-auto text-zinc-300 dark:text-zinc-600" />
                            )
                          ) : (
                            feat.pro
                          )}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-zinc-600 dark:text-zinc-400">
                          {typeof feat.agency === "boolean" ? (
                            feat.agency ? (
                              <Check className="w-4 h-4 mx-auto text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <CrossIcon className="w-4 h-4 mx-auto text-zinc-300 dark:text-zinc-600" />
                            )
                          ) : (
                            feat.agency
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Creator Testimonials */}
      <TestimonialsSection />

      {/* 5. Frequently Asked Questions */}
      <FaqSection />

      {/* 6. Conversion CTA Banner */}
      <CtaBanner />
    </div>
  );
}
