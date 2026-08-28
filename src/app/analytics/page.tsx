"use client";

import * as React from "react";
import Link from "next/link";
import { Download, Plus, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnalyticsOverviewKpis,
  GrowthChart,
  PlatformBreakdown,
  ViralHeatmap,
  TopPostsLeaderboard,
  AiInsightsPanel,
} from "@/components/analytics";

export default function AnalyticsPage() {
  const [timeline, setTimeline] = React.useState("30d");
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const handleExportReport = () => {
    setToastMessage("📊 Growth Intelligence Report downloaded as PDF!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-bounce [animation-duration:1s] border border-emerald-500/40">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Analytics & Growth Intelligence
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Real-time multi-channel reach, engagement velocity, and viral hook benchmarks
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleExportReport}
            leftIcon={<Download className="w-4 h-4" />}
          >
            Export Report
          </Button>

          <Link href="/create">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
            >
              New Post
            </Button>
          </Link>
        </div>
      </div>

      {/* 1. Overview KPIs */}
      <AnalyticsOverviewKpis />

      {/* 2. Interactive Impressions & Growth Area Chart */}
      <GrowthChart
        timeline={timeline}
        onTimelineChange={setTimeline}
      />

      {/* 3. Platform Breakdown Cards */}
      <PlatformBreakdown />

      {/* 4. Best Time to Post & Viral Heatmap */}
      <ViralHeatmap />

      {/* 5. Top Performing Posts Leaderboard */}
      <TopPostsLeaderboard />

      {/* 6. AI Growth Intelligence & Audit Recommendations */}
      <AiInsightsPanel />
    </div>
  );
}
