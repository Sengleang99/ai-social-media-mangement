"use client";

import * as React from "react";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { BillingInvoice } from "./types";

interface InvoiceHistoryProps {
  invoices: BillingInvoice[];
  onDownloadInvoice: (id: string) => void;
}

export function InvoiceHistory({
  invoices,
  onDownloadInvoice,
}: InvoiceHistoryProps) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="pb-3 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-500" />
            <span>Invoice History & Receipts</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Download statements and tax receipts for all historical billing cycles
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-zinc-50 dark:bg-zinc-950/60 text-zinc-400 font-bold uppercase tracking-wider border-b border-zinc-200/80 dark:border-zinc-800">
            <tr>
              <th className="py-3 px-4">Invoice ID</th>
              <th className="py-3 px-3">Billing Period</th>
              <th className="py-3 px-3">Plan Tier</th>
              <th className="py-3 px-3">Amount</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Receipt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/80 text-zinc-700 dark:text-zinc-300">
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/30 transition-colors"
              >
                <td className="py-3 px-4 font-mono font-bold text-zinc-900 dark:text-white">
                  {inv.id}
                </td>
                <td className="py-3 px-3 text-zinc-500">{inv.date}</td>
                <td className="py-3 px-3 font-medium">{inv.planName}</td>
                <td className="py-3 px-3 font-mono font-bold text-zinc-900 dark:text-white">
                  {inv.amount}
                </td>
                <td className="py-3 px-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1 w-fit">
                    <CheckCircle2 className="w-3 h-3" /> {inv.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => onDownloadInvoice(inv.id)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
