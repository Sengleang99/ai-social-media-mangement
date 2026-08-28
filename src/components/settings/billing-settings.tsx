"use client";

import * as React from "react";
import Link from "next/link";
import { CreditCard, Sparkles, Download, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BillingDetails } from "./types";

interface BillingSettingsProps {
  billing: BillingDetails;
}

export function BillingSettingsTab({ billing }: BillingSettingsProps) {
  const usagePercent = Math.round(
    (billing.usageCredits.used / billing.usageCredits.total) * 100
  );

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-6">
      <div className="pb-3 border-b border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-emerald-500" />
            <span>Subscription & Billing Overview</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Manage your Pro plan subscription, payment cards, and tax receipts
          </p>
        </div>

        <Link href="/pricing">
          <Button variant="outline" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
            Compare Plans
          </Button>
        </Link>
      </div>

      {/* Plan Card */}
      <div className="p-5 rounded-2xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-purple-500/10 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-mono uppercase tracking-wider">
              {billing.currentPlan} Plan
            </span>
            <span className="text-xs text-zinc-500">
              ${billing.priceMonthly}/month (Billed {billing.billingCycle})
            </span>
          </div>
          <h4 className="text-sm font-extrabold text-zinc-900 dark:text-white">
            Next renewal date: {billing.nextInvoiceDate}
          </h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Includes unlimited social channels, AI autopilot queue, and hook score predictor.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button variant="primary" size="sm">
            Upgrade Plan
          </Button>
        </div>
      </div>

      {/* AI Usage Credits Progress */}
      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" /> Monthly AI Studio Credits
          </span>
          <span className="font-mono text-zinc-500 font-bold">
            {billing.usageCredits.used.toLocaleString()} / {billing.usageCredits.total.toLocaleString()} credits ({usagePercent}%)
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all"
            style={{ width: `${usagePercent}%` }}
          />
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
            {billing.cardBrand}
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-900 dark:text-white">
              {billing.cardBrand} ending in •••• {billing.cardLast4}
            </p>
            <p className="text-[11px] text-zinc-400 font-mono">
              Expires {billing.cardExpiry}
            </p>
          </div>
        </div>

        <Button variant="outline" size="sm">
          Update Card
        </Button>
      </div>

      {/* Invoices List */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
          Invoice & Payment History:
        </h4>

        <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900">
          {billing.invoices.map((inv) => (
            <div
              key={inv.id}
              className="p-3.5 flex items-center justify-between text-xs hover:bg-zinc-50/60 dark:hover:bg-zinc-800/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white font-mono">
                    {inv.id}
                  </p>
                  <p className="text-[10px] text-zinc-400">{inv.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">
                  {inv.amount}
                </span>

                <button
                  type="button"
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
                  title="Download receipt PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
