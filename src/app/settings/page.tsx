"use client";

import * as React from "react";
import {
  User,
  Sparkles,
  Bell,
  Shield,
  CreditCard,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SettingsTab,
  INITIAL_USER_PROFILE,
  INITIAL_AI_PREFERENCES,
  INITIAL_NOTIFICATIONS,
  INITIAL_SESSIONS,
  INITIAL_BILLING,
  ProfileSettings,
  AiPreferencesSettings,
  NotificationSettingsTab,
  SecuritySettingsTab,
  BillingSettingsTab,
  DangerZoneSettings,
} from "@/components/settings";

const SETTINGS_TABS: {
  id: SettingsTab;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "profile",
    label: "Profile & Account",
    desc: "Personal info, timezone & language",
    icon: User,
  },
  {
    id: "ai_preferences",
    label: "AI & Autopilot",
    desc: "Models, hashtags, image styles",
    icon: Sparkles,
  },
  {
    id: "notifications",
    label: "Notifications",
    desc: "Email digests & Slack webhooks",
    icon: Bell,
  },
  {
    id: "security",
    label: "Security & Sessions",
    desc: "2FA, active devices & passwords",
    icon: Shield,
  },
  {
    id: "billing",
    label: "Billing & Plans",
    desc: "Pro subscription & receipts",
    icon: CreditCard,
  },
  {
    id: "danger",
    label: "Data & Danger Zone",
    desc: "Export archive & termination",
    icon: AlertTriangle,
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState<SettingsTab>("profile");

  const [profile, setProfile] = React.useState(INITIAL_USER_PROFILE);
  const [aiPrefs, setAiPrefs] = React.useState(INITIAL_AI_PREFERENCES);
  const [notifications, setNotifications] = React.useState(INITIAL_NOTIFICATIONS);
  const [sessions, setSessions] = React.useState(INITIAL_SESSIONS);
  const [billing] = React.useState(INITIAL_BILLING);

  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRevokeSession = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
    showToast("Device session revoked successfully.");
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

      {/* Header Bar */}
      <div className="pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Workspace Settings & Preferences
        </h1>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Customize your account, AI generation models, alerts, and subscription tier
        </p>
      </div>

      {/* Main Grid: Left Tabs, Right Active Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 4 Columns: Tab Switcher Navigation */}
        <div className="lg:col-span-4 p-3 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-1">
          {SETTINGS_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            const isDanger = tab.id === "danger";

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full p-3 rounded-2xl text-left transition-all flex items-center gap-3 cursor-pointer",
                  isSelected
                    ? isDanger
                      ? "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold border border-rose-500/30"
                      : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-xs"
                    : isDanger
                      ? "text-rose-500 hover:bg-rose-50/50 dark:hover:bg-rose-950/20"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-white",
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center shrink-0",
                    isSelected
                      ? isDanger
                        ? "bg-rose-500/20 text-rose-600"
                        : "bg-white/20 dark:bg-black/20 text-white dark:text-zinc-950"
                      : isDanger
                        ? "bg-rose-500/10 text-rose-600"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500",
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">{tab.label}</p>
                  <p
                    className={cn(
                      "text-[10px] truncate mt-0.5",
                      isSelected ? "opacity-80" : "text-zinc-400 dark:text-zinc-500",
                    )}
                  >
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right 8 Columns: Active Panel */}
        <div className="lg:col-span-8 space-y-6">
          {activeTab === "profile" && (
            <ProfileSettings
              profile={profile}
              onSave={(updated) => {
                setProfile(updated);
                showToast("✅ Profile updated successfully!");
              }}
            />
          )}

          {activeTab === "ai_preferences" && (
            <AiPreferencesSettings
              preferences={aiPrefs}
              onSave={(updated) => {
                setAiPrefs(updated);
                showToast("✨ AI Preferences synchronized!");
              }}
            />
          )}

          {activeTab === "notifications" && (
            <NotificationSettingsTab
              notifications={notifications}
              onSave={(updated) => {
                setNotifications(updated);
                showToast("🔔 Notification settings saved!");
              }}
            />
          )}

          {activeTab === "security" && (
            <SecuritySettingsTab sessions={sessions} onRevokeSession={handleRevokeSession} />
          )}

          {activeTab === "billing" && <BillingSettingsTab billing={billing} />}

          {activeTab === "danger" && <DangerZoneSettings />}
        </div>
      </div>
    </div>
  );
}
