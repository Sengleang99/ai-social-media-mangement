"use client";

import * as React from "react";
import { CreditCard, CheckCircle2 } from "lucide-react";
import {
  INITIAL_USAGE_ITEMS,
  INITIAL_INVOICES,
  CurrentPlanCard,
  CreditUsageBreakdown,
  PlanComparisonGrid,
  PaymentMethods,
  InvoiceHistory,
} from "@/components/billing";

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");
  const [usageItems, setUsageItems] = React.useState(INITIAL_USAGE_ITEMS);
  const [invoices] = React.useState(INITIAL_INVOICES);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpgradeClick = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  const handleSelectPlan = (planId: string) => {
    if (planId === "pro") {
      showToast("You are already active on the Pro plan.");
      return;
    }
    showToast(`🚀 Selected ${planId.toUpperCase()} tier! Processing checkout...`);
  };

  const handleTopUpCredits = () => {
    setUsageItems((prev) =>
      prev.map((item) => (item.id === "credits" ? { ...item, total: item.total + 2500 } : item)),
    );
    showToast("⚡ Booster pack (+2,500 AI credits) activated!");
  };

  const handleDownloadInvoice = (id: string) => {
    showToast(`📄 Downloading tax invoice ${id} as PDF...`);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-bounce [animation-duration:1s] border border-emerald-500/40">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Billing, Plans & Credit Quotas
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Manage your Pro subscription, add booster credits, and download tax statements
            </p>
          </div>
        </div>
      </div>

      {/* 1. Active Plan Banner */}
      <CurrentPlanCard
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
        onUpgradeClick={handleUpgradeClick}
      />

      {/* 2. Live Feature Quotas & Credit Breakdown */}
      <CreditUsageBreakdown usageItems={usageItems} onTopUpCredits={handleTopUpCredits} />

      {/* 3. Tier Comparison Grid */}
      <PlanComparisonGrid billingCycle={billingCycle} onSelectPlan={handleSelectPlan} />

      {/* 4. Payment Methods & Tax Details */}
      <PaymentMethods />

      {/* 5. Invoicing & Statement History */}
      <InvoiceHistory invoices={invoices} onDownloadInvoice={handleDownloadInvoice} />
    </div>
  );
}
