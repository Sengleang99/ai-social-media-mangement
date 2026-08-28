"use client";

import * as React from "react";
import { Clock, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostVariant } from "./types";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePost: PostVariant;
  activeChannels: string[];
  onConfirmSchedule: () => void;
}

export function ScheduleModal({
  isOpen,
  onClose,
  activePost,
  activeChannels,
  onConfirmSchedule,
}: ScheduleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 space-y-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Schedule on Algorithmic Peak
              </h3>
              <p className="text-[11px] text-zinc-400">
                AI calculated peak engagement windows
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

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <span>🔥 Recommended Peak Time:</span>
            <span>+42% Higher Reach</span>
          </div>
          <p className="text-xs text-zinc-700 dark:text-zinc-300">
            {activePost.peakTime}
          </p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
            Follower activity on your connected {activeChannels.join(", ")} accounts peaks during this commute window.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button
            type="button"
            variant="primary"
            size="md"
            isFullWidth
            onClick={onConfirmSchedule}
            leftIcon={<CheckCircle2 className="w-4 h-4" />}
          >
            Confirm Peak Time Autopilot
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="md"
            isFullWidth
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
