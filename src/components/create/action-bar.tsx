import * as React from "react";
import { Copy, Check, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionBarProps {
  copied: boolean;
  onCopyPost: () => void;
  onOpenSchedule: () => void;
  onPublishNow: () => void;
  channelCount: number;
}

export function ActionBar({
  copied,
  onCopyPost,
  onOpenSchedule,
  onPublishNow,
  channelCount,
}: ActionBarProps) {
  return (
    <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={onCopyPost}
          leftIcon={
            copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )
          }
        >
          {copied ? "Copied!" : "Copy Text"}
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onOpenSchedule}
          leftIcon={<Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
        >
          Peak Schedule
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={onPublishNow}
          leftIcon={<Send className="w-3.5 h-3.5 fill-current" />}
          className="w-full sm:w-auto"
        >
          Publish to {channelCount} Channels
        </Button>
      </div>
    </div>
  );
}
