"use client";

import * as React from "react";
import Image from "next/image";
import { Plus, Sparkles, Clock } from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { ScheduledPost } from "./types";

interface MonthViewProps {
  currentDate: Date;
  posts: ScheduledPost[];
  onSelectPost: (post: ScheduledPost) => void;
  onAddPostOnDate: (dateStr: string) => void;
}

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function MonthView({ currentDate, posts, onSelectPost, onAddPostOnDate }: MonthViewProps) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // First day of month and total days
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  const totalDaysInPrevMonth = new Date(year, month, 0).getDate();

  // Calendar cells generation (42 cells: 6 rows * 7 days)
  const calendarCells = [];

  // Previous month trailing days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const day = totalDaysInPrevMonth - i;
    const prevMonthDate = new Date(year, month - 1, day);
    const dateStr = prevMonthDate.toISOString().split("T")[0];
    calendarCells.push({
      day,
      dateStr,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  // Current month days
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  for (let d = 1; d <= totalDaysInMonth; d++) {
    const currentMonthDate = new Date(year, month, d);
    const dateStr = currentMonthDate.toISOString().split("T")[0];
    const isToday = dateStr === todayStr;
    calendarCells.push({
      day: d,
      dateStr,
      isCurrentMonth: true,
      isToday,
    });
  }

  // Next month leading days to complete grid (42 cells)
  const remainingCells = 42 - calendarCells.length;
  for (let d = 1; d <= remainingCells; d++) {
    const nextMonthDate = new Date(year, month + 1, d);
    const dateStr = nextMonthDate.toISOString().split("T")[0];
    calendarCells.push({
      day: d,
      dateStr,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm overflow-hidden">
      {/* Day Headers */}
      <div className="grid grid-cols-7 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/60 text-center py-2.5">
        {DAYS_OF_WEEK.map((d, idx) => (
          <div
            key={idx}
            className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Grid Cells */}
      <div className="grid grid-cols-7 divide-x divide-y divide-zinc-200/60 dark:divide-zinc-800/80">
        {calendarCells.map((cell, idx) => {
          // Filter posts scheduled on this date
          const cellPosts = posts.filter((p) => p.date === cell.dateStr);

          return (
            <div
              key={idx}
              className={cn(
                "min-h-[110px] sm:min-h-[135px] p-2 flex flex-col justify-between transition-colors group relative",
                !cell.isCurrentMonth
                  ? "bg-zinc-50/40 dark:bg-zinc-950/20 text-zinc-400"
                  : "bg-white dark:bg-zinc-900 hover:bg-zinc-50/70 dark:hover:bg-zinc-800/40",
                cell.isToday &&
                  "ring-1 ring-inset ring-emerald-500 bg-emerald-500/5 dark:bg-emerald-950/10",
              )}
            >
              {/* Day Header & Add Button */}
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full",
                    cell.isToday
                      ? "bg-emerald-500 text-white font-bold"
                      : cell.isCurrentMonth
                        ? "text-zinc-800 dark:text-zinc-200"
                        : "text-zinc-400",
                  )}
                >
                  {cell.day}
                </span>

                <button
                  type="button"
                  onClick={() => onAddPostOnDate(cell.dateStr)}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-md hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-zinc-400 transition-all cursor-pointer"
                  title={`Add post on ${cell.dateStr}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Scheduled Posts in Cell */}
              <div className="space-y-1 mt-1 flex-1 overflow-y-auto max-h-[80px] no-scrollbar">
                {cellPosts.map((post) => {
                  const isPublished = post.status === "published";
                  const isAiQueued = post.status === "ai_queued";

                  return (
                    <button
                      key={post.id}
                      type="button"
                      onClick={() => onSelectPost(post)}
                      className={cn(
                        "w-full p-1.5 rounded-lg border text-left flex items-start gap-1.5 transition-all cursor-pointer shadow-2xs group/card",
                        isPublished
                          ? "bg-blue-50/80 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/80 text-blue-950 dark:text-blue-200"
                          : isAiQueued
                            ? "bg-purple-50/80 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/80 text-purple-950 dark:text-purple-200"
                            : "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200",
                      )}
                    >
                      {/* Image Thumbnail or Platform Icon */}
                      {post.imageUrl ? (
                        <div className="relative w-4 h-4 rounded-xs overflow-hidden shrink-0 mt-0.5">
                          <Image
                            src={post.imageUrl}
                            alt={post.title}
                            unoptimized
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-0.5 shrink-0 mt-0.5">
                          <PlatformIcon platform={post.platforms[0]} className="w-3 h-3" />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold truncate leading-tight group-hover/card:underline">
                          {post.title}
                        </p>
                        <div className="flex items-center gap-1 text-[9px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                          <Clock className="w-2.5 h-2.5 shrink-0" />
                          <span>{post.time}</span>
                        </div>
                      </div>

                      {post.isAiGenerated && (
                        <Sparkles className="w-2.5 h-2.5 text-purple-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
