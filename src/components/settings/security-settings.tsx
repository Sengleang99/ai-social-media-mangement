"use client";

import * as React from "react";
import { Shield, Smartphone, Laptop, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SecuritySession } from "./types";

interface SecuritySettingsProps {
  sessions: SecuritySession[];
  onRevokeSession: (id: string) => void;
}

export function SecuritySettingsTab({ sessions, onRevokeSession }: SecuritySettingsProps) {
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-6">
      <div className="pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-500" />
          <span>Security & Active Devices</span>
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Manage two-factor authentication, security keys, and active workspace sessions
        </p>
      </div>

      {/* 2FA Card */}
      <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
              Two-Factor Authentication (2FA)
            </h4>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                twoFactorEnabled
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
              }`}
            >
              {twoFactorEnabled ? "Active (Authenticator App)" : "Disabled"}
            </span>
          </div>
          <p className="text-[11px] text-zinc-500">
            Secure your social media publishing tokens with Google Authenticator or 1Password
          </p>
        </div>

        <Button
          variant={twoFactorEnabled ? "outline" : "primary"}
          size="sm"
          onClick={() => setTwoFactorEnabled((p) => !p)}
        >
          {twoFactorEnabled ? "Disable 2FA" : "Enable 2FA"}
        </Button>
      </div>

      {/* Active Sessions */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
          Active Browser Sessions:
        </h4>

        <div className="space-y-2.5">
          {sessions.map((sess) => (
            <div
              key={sess.id}
              className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 shrink-0">
                  {sess.device.includes("iPhone") ? (
                    <Smartphone className="w-4 h-4" />
                  ) : (
                    <Laptop className="w-4 h-4" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">
                      {sess.device} · {sess.browser}
                    </p>
                    {sess.isCurrent && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Current
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    {sess.location} · IP: {sess.ipAddress} · Active {sess.lastActive}
                  </p>
                </div>
              </div>

              {!sess.isCurrent && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRevokeSession(sess.id)}
                  className="text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-xs self-end sm:self-auto"
                >
                  Revoke Access
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
