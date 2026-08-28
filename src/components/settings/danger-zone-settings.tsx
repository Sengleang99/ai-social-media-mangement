"use client";

import * as React from "react";
import { AlertTriangle, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DangerZoneSettings() {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-rose-500/30 dark:border-rose-500/20 shadow-xs space-y-6">
      <div className="pb-3 border-b border-rose-100 dark:border-rose-950/40">
        <h3 className="text-base font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          <span>Danger Zone & Workspace Data</span>
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Permanent actions regarding data exports and workspace termination
        </p>
      </div>

      <div className="space-y-4">
        {/* Export Data */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-zinc-900 dark:text-white">
              Export All Content & Analytics (CSV / JSON)
            </p>
            <p className="text-[11px] text-zinc-500">
              Download complete archive of published posts, schedules, and metrics
            </p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<Download className="w-3.5 h-3.5" />}>
            Export Archive
          </Button>
        </div>

        {/* Delete Workspace */}
        <div className="p-4 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-rose-600 dark:text-rose-400">
              Delete Workspace & Disconnect Channels
            </p>
            <p className="text-[11px] text-zinc-500">
              Permanently delete all scheduled posts, connected tokens, and AI context
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-rose-600 hover:bg-rose-600 hover:text-white border border-rose-500/40"
            leftIcon={<Trash2 className="w-3.5 h-3.5" />}
          >
            Delete Workspace
          </Button>
        </div>
      </div>
    </div>
  );
}
