"use client";

import * as React from "react";
import { Bell, Mail, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotificationSettings } from "./types";

interface NotificationSettingsProps {
  notifications: NotificationSettings;
  onSave: (updated: NotificationSettings) => void;
}

export function NotificationSettingsTab({
  notifications,
  onSave,
}: NotificationSettingsProps) {
  const [formData, setFormData] = React.useState(notifications);
  const [saved, setSaved] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-6">
      <div className="pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <Bell className="w-4 h-4 text-emerald-500" />
          <span>Notifications & Alert Channels</span>
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Control when you receive publishing confirmations, viral spike alerts, and team digests
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Alerts */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-zinc-400" /> Email Notifications:
          </h4>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                Live Publishing Confirmation
              </p>
              <p className="text-[11px] text-zinc-500">
                Receive an email when scheduled posts successfully broadcast to all channels
              </p>
            </div>
            <input
              type="checkbox"
              checked={formData.emailPostSuccess}
              onChange={(e) =>
                setFormData({ ...formData, emailPostSuccess: e.target.checked })
              }
              className="w-4 h-4 accent-emerald-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                Viral Engagement Spike Alert
              </p>
              <p className="text-[11px] text-zinc-500">
                Immediate ping when a Reel or Tweet surges past 1,000 views in under 1 hour
              </p>
            </div>
            <input
              type="checkbox"
              checked={formData.emailViralSpikes}
              onChange={(e) =>
                setFormData({ ...formData, emailViralSpikes: e.target.checked })
              }
              className="w-4 h-4 accent-emerald-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                Monday Growth Digest
              </p>
              <p className="text-[11px] text-zinc-500">
                Weekly PDF and metric summary sent every Monday at 8:00 AM
              </p>
            </div>
            <input
              type="checkbox"
              checked={formData.emailWeeklyDigest}
              onChange={(e) =>
                setFormData({ ...formData, emailWeeklyDigest: e.target.checked })
              }
              className="w-4 h-4 accent-emerald-600 rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Slack / Discord Webhook */}
        <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-blue-500" /> Slack & Discord Team Channel Webhook
            </h4>
            <input
              type="checkbox"
              checked={formData.slackEnabled}
              onChange={(e) =>
                setFormData({ ...formData, slackEnabled: e.target.checked })
              }
              className="w-4 h-4 accent-emerald-600 rounded-md cursor-pointer"
            />
          </div>

          {formData.slackEnabled && (
            <div className="space-y-1.5 animate-fadeIn">
              <label className="text-[11px] text-zinc-500">
                Incoming Webhook URL
              </label>
              <input
                type="text"
                value={formData.slackWebhookUrl}
                onChange={(e) =>
                  setFormData({ ...formData, slackWebhookUrl: e.target.value })
                }
                className="w-full p-2.5 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono focus:outline-none"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <Button
            variant="primary"
            size="md"
            type="submit"
            leftIcon={saved ? <Check className="w-4 h-4" /> : undefined}
          >
            {saved ? "Notifications Saved" : "Save Notifications"}
          </Button>
        </div>
      </form>
    </div>
  );
}
