"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { X, Sparkles, ArrowRight, Layers, Video, MessageSquare, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentItem } from "./types";

interface ContentRepurposeModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

const REPURPOSE_FORMATS = [
  {
    id: "carousel",
    label: "5-Slide Carousel Breakdown",
    desc: "Extract 5 bite-sized insights with visual typography for Instagram & LinkedIn.",
    icon: Layers,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    id: "reel",
    label: "9:16 Video / Reel Script",
    desc: "Generate 3-second ASMR hook with visual scene descriptions for TikTok & Shorts.",
    icon: Video,
    color: "text-rose-500 bg-rose-500/10",
  },
  {
    id: "thread",
    label: "Viral X (Twitter) Thread",
    desc: "Turn this article or post into a high-engagement 4-tweet insight thread.",
    icon: MessageSquare,
    color: "text-sky-500 bg-sky-500/10",
  },
  {
    id: "promo",
    label: "Special Offer / Promo Card",
    desc: "Repackage this topic with a call-to-action discount promo card.",
    icon: Megaphone,
    color: "text-emerald-500 bg-emerald-500/10",
  },
];

export function ContentRepurposeModal({
  item,
  onClose,
}: ContentRepurposeModalProps) {
  const router = useRouter();
  const [selectedFormat, setSelectedFormat] = React.useState("carousel");

  if (!item) return null;

  const handleProceed = () => {
    router.push(
      `/create?repurpose=${encodeURIComponent(item.hook)}&format=${selectedFormat}`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 space-y-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                1-Click AI Repurpose Studio
              </h3>
              <p className="text-[11px] text-zinc-400">
                Transform this asset into fresh high-converting social formats
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Source Post Preview Box */}
        <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
            Original Source Post:
          </span>
          <p className="text-xs font-bold text-zinc-900 dark:text-white line-clamp-1">
            {item.title}
          </p>
          <p className="text-[11px] text-zinc-500 line-clamp-2 leading-tight">
            {item.hook}
          </p>
        </div>

        {/* Format Selection Grid */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white block">
            Select New Target Format:
          </label>
          <div className="space-y-2">
            {REPURPOSE_FORMATS.map((fmt) => {
              const Icon = fmt.icon;
              const isSelected = selectedFormat === fmt.id;

              return (
                <div
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 ring-1 ring-emerald-500/30"
                      : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${fmt.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">
                      {fmt.label}
                    </p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                      {fmt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <Button variant="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handleProceed}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Launch in Studio
          </Button>
        </div>
      </div>
    </div>
  );
}
