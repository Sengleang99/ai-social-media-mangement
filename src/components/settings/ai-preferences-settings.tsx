"use client";

import * as React from "react";
import { Sparkles, Cpu, Hash, Clock, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiPreferenceSettings } from "./types";

interface AiPreferencesSettingsProps {
  preferences: AiPreferenceSettings;
  onSave: (updated: AiPreferenceSettings) => void;
}

export function AiPreferencesSettings({
  preferences,
  onSave,
}: AiPreferencesSettingsProps) {
  const [formData, setFormData] = React.useState(preferences);
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
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span>AI Engine & Autopilot Preferences</span>
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Configure model intelligence, image rendering styles, and autonomous queue rules
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Model Selection */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-500" /> Default AI Model Engine:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                id: "gemini_2_5_pro",
                name: "Gemini 2.5 Pro",
                badge: "Recommended",
                desc: "Highest reasoning, rich storytelling, best for multi-slide carousels & video scripts.",
              },
              {
                id: "gemini_2_5_flash",
                name: "Gemini 2.5 Flash",
                badge: "Ultra Fast",
                desc: "Sub-second generation for rapid hashtag clouds, quick hooks, and short status updates.",
              },
              {
                id: "claude_3_7_sonnet",
                name: "Claude 3.7 Sonnet",
                badge: "Nuanced",
                desc: "Deep creative nuance and long-form thought leadership threads for LinkedIn/X.",
              },
            ].map((model) => {
              const isSelected = formData.defaultModel === model.id;

              return (
                <div
                  key={model.id}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      defaultModel: model.id as AiPreferenceSettings["defaultModel"],
                    })
                  }
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? "border-purple-500 bg-purple-50/40 dark:bg-purple-950/20 ring-1 ring-purple-500/40 shadow-xs"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-zinc-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      {model.name}
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      {model.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sliders and Selects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200">
                <Hash className="w-3.5 h-3.5 text-zinc-400" /> Auto-Generated Hashtags
              </span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                {formData.autoHashtagCount} Tags
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={formData.autoHashtagCount}
              onChange={(e) =>
                setFormData({ ...formData, autoHashtagCount: Number(e.target.value) })
              }
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-400">
              <span>Minimal (1-2)</span>
              <span>Maximum (10)</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200">
                <Clock className="w-3.5 h-3.5 text-zinc-400" /> Auto-Schedule Peak Buffer
              </span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                {formData.autoScheduleBufferMinutes} mins
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={120}
              step={10}
              value={formData.autoScheduleBufferMinutes}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  autoScheduleBufferMinutes: Number(e.target.value),
                })
              }
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-400">
              <span>10m gap</span>
              <span>2 hours gap</span>
            </div>
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-500" /> 3-Second Viral Hook Score Prediction
              </p>
              <p className="text-[11px] text-zinc-500">
                Predict CTR and stopping power before post is queued
              </p>
            </div>
            <input
              type="checkbox"
              checked={formData.enableViralHookScoring}
              onChange={(e) =>
                setFormData({ ...formData, enableViralHookScoring: e.target.checked })
              }
              className="w-4 h-4 accent-emerald-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" /> AI Community Comment Assist
              </p>
              <p className="text-[11px] text-zinc-500">
                Draft 1-click friendly replies to follower comments on Instagram & TikTok
              </p>
            </div>
            <input
              type="checkbox"
              checked={formData.enableAutoCommentReplies}
              onChange={(e) =>
                setFormData({ ...formData, enableAutoCommentReplies: e.target.checked })
              }
              className="w-4 h-4 accent-emerald-600 rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <Button
            variant="primary"
            size="md"
            type="submit"
            leftIcon={saved ? <Check className="w-4 h-4" /> : undefined}
          >
            {saved ? "AI Preferences Saved" : "Save AI Preferences"}
          </Button>
        </div>
      </form>
    </div>
  );
}
