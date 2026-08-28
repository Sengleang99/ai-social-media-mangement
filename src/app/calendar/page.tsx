"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import {
  ScheduledPost,
  CalendarViewMode,
  INITIAL_SCHEDULED_POSTS,
  CalendarStats,
  CalendarHeader,
  MonthView,
  WeekView,
  QueueView,
  PostPreviewModal,
} from "@/components/calendar";

export default function CalendarPage() {
  const router = useRouter();

  // Calendar State
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date(2026, 7, 28)); // August 2026
  const [viewMode, setViewMode] = React.useState<CalendarViewMode>("month");
  const [platformFilter, setPlatformFilter] = React.useState<string>("all");
  const [posts, setPosts] = React.useState<ScheduledPost[]>(INITIAL_SCHEDULED_POSTS);
  const [selectedPost, setSelectedPost] = React.useState<ScheduledPost | null>(null);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  // Helper toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Month navigation
  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  // Filter posts by platform
  const filteredPosts = React.useMemo(() => {
    if (platformFilter === "all") return posts;
    return posts.filter((p) => p.platforms.includes(platformFilter as "instagram" | "x" | "tiktok" | "facebook" | "linkedin"));
  }, [posts, platformFilter]);

  // Reschedule post
  const handleReschedule = (postId: string, newDate: string, newTime: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              date: newDate || p.date,
              time: newTime || p.time,
              status: "scheduled",
            }
          : p
      )
    );
    showToast(`📅 Rescheduled post for ${newDate} at ${newTime}`);
  };

  // Instant publish
  const handlePublishNow = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, status: "published" } : p
      )
    );
    showToast("🚀 Post published successfully to all target channels!");
  };

  // Delete post
  const handleDeletePost = (postId: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
    showToast("🗑️ Post removed from publishing schedule.");
  };

  // Add post on specific date
  const handleAddPostOnDate = (dateStr: string) => {
    router.push(`/create?date=${dateStr}`);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast alert banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-bounce [animation-duration:1s] border border-emerald-500/40">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Calendar Stats Bar */}
      <CalendarStats posts={posts} />

      {/* Header & Controls */}
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        selectedPlatformFilter={platformFilter}
        onPlatformFilterChange={setPlatformFilter}
      />

      {/* Dynamic Calendar Views */}
      {viewMode === "month" && (
        <MonthView
          currentDate={currentDate}
          posts={filteredPosts}
          onSelectPost={setSelectedPost}
          onAddPostOnDate={handleAddPostOnDate}
        />
      )}

      {viewMode === "week" && (
        <WeekView
          currentDate={currentDate}
          posts={filteredPosts}
          onSelectPost={setSelectedPost}
          onAddPostOnDate={handleAddPostOnDate}
        />
      )}

      {viewMode === "queue" && (
        <QueueView
          posts={filteredPosts}
          onSelectPost={setSelectedPost}
          onPublishPost={handlePublishNow}
          onDeletePost={handleDeletePost}
        />
      )}

      {/* Post Detail & Reschedule Modal */}
      <PostPreviewModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onReschedule={handleReschedule}
        onPublishNow={handlePublishNow}
        onDelete={handleDeletePost}
      />
    </div>
  );
}
