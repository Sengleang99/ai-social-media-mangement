"use client";

import * as React from "react";
import Image from "next/image";
import { Flame } from "lucide-react";
import { PlatformIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { ScheduledPost } from "./types";

interface WeekViewProps {
  currentDate: Date;
  posts: ScheduledPost[];
  onSelectPost: (post: ScheduledPost) => void;
  onAddPostOnDate: (dateStr: string) => void;
}

const TIME_SLOTS = [
  {
    label: "Morning",
    sublabel: "8 AM - 11 AM",
    peak: "High commute engagement",
    badge: "☕ Peak 9:00 AM",
  },
  {
    label: "Midday",
    sublabel: "12 PM - 3 PM",
    peak: "Lunch break browsing",
    badge: "🥪 Peak 12:15 PM",
  },
  {
    label: "Evening",
    sublabel: "4 PM - 7 PM",
    peak: "After-work viral peak",
    badge: "🔥 Peak 4:45 PM",
  },
  {
    label: "Night",
    sublabel: "8 PM - 11 PM",
    peak: "Leisure relax feed",
    badge: "🌙 Peak 8:30 PM",
  },
];

export function WeekView({ currentDate, posts, onSelectPost, onAddPostOnDate }: WeekViewProps) {
  // Generate 7 days of the current week (Sunday to Saturday)
  const currentDayOfWeek = currentDate.getDay();
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDayOfWeek);

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(weekStart);
    dayDate.setDate(weekStart.getDate() + i);
    const dateStr = dayDate.toISOString().split("T")[0];
    const isToday = new Date().toISOString().split("T")[0] === dateStr;

    weekDays.push({
      date: dayDate,
      dateStr,
      dayName: dayDate.toLocaleDateString("en-US", { weekday: "short" }),
      dayNumber: dayDate.getDate(),
      isToday,
    });
  }

  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm overflow-hidden space-y-4 p-4 sm:p-6">
      {/* 7 Days Columns */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        {weekDays.map((day) => {
          const dayPosts = posts.filter((p) => p.date === day.dateStr);

          return (
            <div
              key={day.dateStr}
              className={cn(
                "rounded-2xl border p-3 flex flex-col justify-between transition-all",
                day.isToday
                  ? "bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-500/50 ring-1 ring-emerald-500/20"
                  : "bg-zinc-50/50 dark:bg-zinc-950/50 border-zinc-200/80 dark:border-zinc-800",
              )}
            >
              {/* Day Header */}
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60 dark:border-zinc-800/80">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {day.dayName}
                  </p>
                  <p
                    className={cn(
                      "text-base font-extrabold",
                      day.isToday
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-zinc-900 dark:text-white",
                    )}
                  >
                    {day.dayNumber}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onAddPostOnDate(day.dateStr)}
                  className="text-[10px] font-semibold px-2 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors cursor-pointer"
                >
                  + Add
                </button>
              </div>

              {/* Day Slots / Scheduled Posts */}
              <div className="space-y-2 mt-3 min-h-[160px]">
                {dayPosts.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center p-3 text-center text-[11px] text-zinc-400 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl">
                    <span>No posts scheduled</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                      + Autopilot slot open
                    </span>
                  </div>
                ) : (
                  dayPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => onSelectPost(post)}
                      className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:border-emerald-500/50 transition-all cursor-pointer space-y-1.5 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {post.platforms.map((plat) => (
                            <PlatformIcon
                              key={plat}
                              platform={plat}
                              className="w-3 h-3 text-zinc-700 dark:text-zinc-300"
                            />
                          ))}
                        </div>
                        <span className="text-[9px] font-mono text-zinc-500">{post.time}</span>
                      </div>

                      {post.imageUrl && (
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={post.imageUrl}
                            alt={post.title}
                            unoptimized
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      <p className="text-xs font-bold text-zinc-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {post.title}
                      </p>

                      <p className="text-[11px] text-zinc-500 line-clamp-2 leading-tight">
                        {post.hook}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Peak Slot Insights Guide */}
      <div className="p-4 rounded-2xl bg-linear-to-r from-emerald-500/10 via-teal-500/5 to-purple-500/10 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-500 shrink-0" />
          <div>
            <p className="text-xs font-bold text-zinc-900 dark:text-white">
              AI Peak Engagement Windows
            </p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Publishing during these windows provides up to 42% higher organic impressions.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {TIME_SLOTS.map((slot, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold text-zinc-700 dark:text-zinc-300"
            >
              {slot.badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
