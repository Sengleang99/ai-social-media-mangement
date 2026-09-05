"use client";

import * as React from "react";
import { CheckCircle2, RefreshCw, Unlink, Link2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { ConnectedAccount } from "./types";

interface ConnectedAccountsProps {
  accounts: ConnectedAccount[];
  onToggleAccount: (id: string) => void;
  onSyncAccount: (id: string) => void;
}

export function ConnectedAccounts({
  accounts,
  onToggleAccount,
  onSyncAccount,
}: ConnectedAccountsProps) {
  const [syncingId, setSyncingId] = React.useState<string | null>(null);

  const handleSync = (id: string) => {
    setSyncingId(id);
    setTimeout(() => {
      onSyncAccount(id);
      setSyncingId(null);
    }, 1000);
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Link2 className="w-4 h-4 text-emerald-500" />
            <span>Connected Social Profiles & APIs</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Real-time multi-channel automated publishing connections
          </p>
        </div>

        <Button variant="outline" size="sm" leftIcon={<Plus className="w-3.5 h-3.5" />}>
          Add New Channel
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {accounts.map((acc) => {
          const isConnected = acc.status === "connected";
          const isSyncing = syncingId === acc.id;

          return (
            <div
              key={acc.id}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                isConnected
                  ? "bg-zinc-50/50 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-500/40"
                  : "bg-zinc-100/60 dark:bg-zinc-950/20 border-zinc-200 dark:border-zinc-800 opacity-60"
              }`}
            >
              {/* Top Row: Icon + Name + Status */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
                    <PlatformIcon platform={acc.platform} className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                      {acc.name}
                    </p>
                    <p className="text-[10px] text-zinc-400 font-mono truncate">{acc.handle}</p>
                  </div>
                </div>

                <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Connected
                </span>
              </div>

              {/* Follower Count & Last Sync */}
              <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <div>
                  <span className="text-[10px] text-zinc-400 block">Followers</span>
                  <span className="font-bold text-zinc-900 dark:text-white font-mono">
                    {acc.followers > 0 ? acc.followers.toLocaleString() : "Syncing"}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-zinc-400 block">Last Synced</span>
                  <span className="text-[10px] text-zinc-500 font-mono">{acc.lastSync}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleSync(acc.id)}
                  disabled={isSyncing}
                  className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${isSyncing ? "animate-spin" : ""}`} />
                  <span>{isSyncing ? "Syncing..." : "Sync"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleAccount(acc.id)}
                  className="text-[11px] text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Unlink className="w-3 h-3" />
                  <span>Disconnect</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
