"use client";

import * as React from "react";
import { CreditCard, Plus, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PaymentMethods() {
  const [showAddCard, setShowAddCard] = React.useState(false);
  const [savedTax, setSavedTax] = React.useState(false);
  const [taxId, setTaxId] = React.useState("US-EIN-98421890");

  const handleSaveTax = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedTax(true);
    setTimeout(() => setSavedTax(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Payment Method Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-emerald-500" />
            <span>Saved Payment Method</span>
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAddCard((p) => !p)}
            leftIcon={<Plus className="w-3.5 h-3.5" />}
          >
            Add New Card
          </Button>
        </div>

        {/* Active Card */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center tracking-wider shadow-xs">
              VISA
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                Visa ending in •••• 4242
              </p>
              <p className="text-[11px] text-zinc-400 font-mono">Expires 08/29 · Primary</p>
            </div>
          </div>

          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Default
          </span>
        </div>

        {showAddCard && (
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                Card Number
              </label>
              <input
                type="text"
                placeholder="4242 •••• •••• ••••"
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono focus:outline-none"
              />
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <Button variant="secondary" size="sm" onClick={() => setShowAddCard(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={() => setShowAddCard(false)}>
                Save Card
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Right: Tax & Invoicing Details */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
        <div className="pb-3 border-b border-zinc-100 dark:border-zinc-800">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Tax Identification & Invoicing Details
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Details printed on PDF invoices for corporate tax deductions
          </p>
        </div>

        <form onSubmit={handleSaveTax} className="space-y-3">
          <div>
            <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 block mb-1">
              VAT / Tax ID Number
            </label>
            <input
              type="text"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-mono focus:outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 block mb-1">
              Billing Email Address
            </label>
            <input
              type="email"
              defaultValue="billing@greenleafbakery.com"
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none"
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button
              variant="outline"
              size="sm"
              type="submit"
              leftIcon={savedTax ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : undefined}
            >
              {savedTax ? "Saved" : "Update Tax Info"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
