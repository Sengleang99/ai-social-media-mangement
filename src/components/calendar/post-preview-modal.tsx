"use client";

import * as React from "react";
import Image from "next/image";
import { X, Clock, Send, Trash2, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { ScheduledPost } from "./types";

interface PostPreviewModalProps {
  post: ScheduledPost | null;
  onClose: () => void;
  onReschedule: (postId: string, newDate: string, newTime: string) => void;
  onPublishNow: (postId: string) => void;
  onDelete: (postId: string) => void;
}

export function PostPreviewModal({
  post,
  onClose,
  onReschedule,
  onPublishNow,
  onDelete,
}: PostPreviewModalProps) {
  if (!post) return null;

  return (
    <PostPreviewModalContent
      key={post.id}
      post={post}
      onClose={onClose}
      onReschedule={onReschedule}
      onPublishNow={onPublishNow}
      onDelete={onDelete}
    />
  );
}

function PostPreviewModalContent({
  post,
  onClose,
  onReschedule,
  onPublishNow,
  onDelete,
}: {
  post: ScheduledPost;
  onClose: () => void;
  onReschedule: (postId: string, newDate: string, newTime: string) => void;
  onPublishNow: (postId: string) => void;
  onDelete: (postId: string) => void;
}) {
  const [editDate, setEditDate] = React.useState(post.date);
  const [editTime, setEditTime] = React.useState(post.time);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">{post.title}</h3>
              <p className="text-[11px] text-zinc-400">Scheduled distribution details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Media & Content Details */}
        <div className="space-y-3">
          {post.imageUrl && (
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <Image
                src={post.imageUrl}
                alt={post.title}
                unoptimized
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-zinc-400">Target Channels:</span>
                {post.platforms.map((plat) => (
                  <PlatformIcon key={plat} platform={plat} className="w-3.5 h-3.5" />
                ))}
              </div>
              {post.isAiGenerated && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> AI Autopilot
                </span>
              )}
            </div>

            <p className="text-xs font-bold text-zinc-900 dark:text-white">{post.hook}</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
              {post.body}
            </p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">
              {post.hashtags.join(" ")}
            </p>
          </div>
        </div>

        {/* Reschedule Date / Time Selector */}
        <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-3">
          <label className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Reschedule Date & Time:</span>
          </label>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] text-zinc-400 block mb-1">Date</label>
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="text-[10px] text-zinc-400 block mb-1">Time</label>
              <input
                type="text"
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
                placeholder="04:45 PM"
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              onDelete(post.id);
              onClose();
            }}
            className="p-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete</span>
          </button>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => {
                onReschedule(post.id, editDate, editTime);
                onClose();
              }}
            >
              Save Schedule
            </Button>

            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={() => {
                onPublishNow(post.id);
                onClose();
              }}
              leftIcon={<Send className="w-3.5 h-3.5 fill-current" />}
            >
              Publish Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
