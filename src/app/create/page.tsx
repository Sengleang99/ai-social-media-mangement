"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  RefreshCw,
  Calendar,
  Wand2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PostVariant,
  DEFAULT_POSTS,
  PRESET_IMAGES,
  AiComposer,
  MediaPicker,
  HookAnalyzer,
  PlatformFeedPreview,
  CaptionEditor,
  ScheduleModal,
  ActionBar,
} from "@/components/create";

export default function CreatePostPage() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get("prompt") || searchParams.get("repurpose") || "";

  // Studio State
  const [topicPrompt, setTopicPrompt] = React.useState(
    initialPrompt || "Promote our fresh weekend bakery special: 20% off sourdough & free cold brew coffee"
  );
  const [selectedTone, setSelectedTone] = React.useState("viral");
  const [selectedImage, setSelectedImage] = React.useState(PRESET_IMAGES[1].url);
  const [selectedPlatform, setSelectedPlatform] = React.useState("instagram");
  const [activeChannels, setActiveChannels] = React.useState<string[]>([
    "instagram",
    "x",
    "tiktok",
    "facebook",
  ]);

  // AI Options Toggles
  const [clicheFilter, setClicheFilter] = React.useState(true);
  const [hookOptimizer, setHookOptimizer] = React.useState(true);
  const [autoHashtags, setAutoHashtags] = React.useState(true);

  // Content state per platform
  const [postsContent, setPostsContent] = React.useState<Record<string, PostVariant>>(DEFAULT_POSTS);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [showScheduleModal, setShowScheduleModal] = React.useState(false);

  const activePost = postsContent[selectedPlatform] || postsContent.instagram;

  // Toggle active channels
  const handleToggleChannel = (channelId: string) => {
    setActiveChannels((prev) =>
      prev.includes(channelId)
        ? prev.length > 1
          ? prev.filter((item) => item !== channelId)
          : prev
        : [...prev, channelId]
    );
  };

  // Switch hook from alternatives
  const handleSwapHook = (newHook: string, score: number) => {
    setPostsContent((prev) => ({
      ...prev,
      [selectedPlatform]: {
        ...prev[selectedPlatform],
        hook: newHook,
        hookScore: score,
      },
    }));
    showToast(`Swapped to viral hook (${score}% CTR score)`);
  };

  // Add hashtag to post
  const handleAddHashtag = (tag: string) => {
    const cleanTag = tag.startsWith("#") ? tag : `#${tag}`;
    if (activePost.hashtags.includes(cleanTag)) return;

    setPostsContent((prev) => ({
      ...prev,
      [selectedPlatform]: {
        ...prev[selectedPlatform],
        hashtags: [...prev[selectedPlatform].hashtags, cleanTag],
      },
    }));
    showToast(`Added ${cleanTag}`);
  };

  // Remove hashtag
  const handleRemoveHashtag = (tag: string) => {
    setPostsContent((prev) => ({
      ...prev,
      [selectedPlatform]: {
        ...prev[selectedPlatform],
        hashtags: prev[selectedPlatform].hashtags.filter((t) => t !== tag),
      },
    }));
  };

  // Edit body text
  const handleBodyChange = (newBody: string) => {
    setPostsContent((prev) => ({
      ...prev,
      [selectedPlatform]: {
        ...prev[selectedPlatform],
        body: newBody,
      },
    }));
  };

  // Edit hook text
  const handleHookChange = (newHook: string) => {
    setPostsContent((prev) => ({
      ...prev,
      [selectedPlatform]: {
        ...prev[selectedPlatform],
        hook: newHook,
      },
    }));
  };

  // Generate / Remix AI Post
  const handleGenerate = () => {
    if (!topicPrompt.trim()) return;
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      showToast("✨ AI generated 5 omnichannel post variations!");
    }, 900);
  };

  // Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Copy full post
  const handleCopyPost = () => {
    const fullText = `${activePost.hook}\n\n${activePost.body}\n\n${activePost.hashtags.join(" ")}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    showToast("📋 Post copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Instant Publish simulation
  const handlePublishNow = () => {
    showToast(`🚀 Successfully published to ${activeChannels.length} social channels!`);
  };

  // Schedule simulation
  const handleConfirmSchedule = () => {
    setShowScheduleModal(false);
    showToast(`📅 Scheduled for ${activePost.peakTime}`);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast notification banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-bounce [animation-duration:1s] border border-emerald-500/40">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Wand2 className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                AI Post Creation Studio
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                1-Idea into 5 Platform-Native Posts with High-CTR Hooks & Auto-Scheduling
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/calendar"
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            <span>View Calendar</span>
          </Link>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={handleGenerate}
            isLoading={isGenerating}
            leftIcon={!isGenerating && <RefreshCw className="w-3.5 h-3.5" />}
          >
            {isGenerating ? "Synthesizing..." : "Remix with AI"}
          </Button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 6 Columns: Composer & Media Picker */}
        <div className="lg:col-span-6 space-y-6">
          <AiComposer
            topicPrompt={topicPrompt}
            onTopicPromptChange={setTopicPrompt}
            selectedTone={selectedTone}
            onSelectTone={setSelectedTone}
            activeChannels={activeChannels}
            onToggleChannel={handleToggleChannel}
            clicheFilter={clicheFilter}
            onToggleClicheFilter={setClicheFilter}
            hookOptimizer={hookOptimizer}
            onToggleHookOptimizer={setHookOptimizer}
            autoHashtags={autoHashtags}
            onToggleAutoHashtags={setAutoHashtags}
          />

          <MediaPicker
            selectedImage={selectedImage}
            onSelectImage={setSelectedImage}
          />
        </div>

        {/* Right 6 Columns: Live Preview, Editor & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <HookAnalyzer
            hookScore={activePost.hookScore}
            alternativeHooks={activePost.alternativeHooks}
            onSwapHook={handleSwapHook}
          />

          <PlatformFeedPreview
            selectedPlatform={selectedPlatform}
            onSelectPlatform={setSelectedPlatform}
            activePost={activePost}
            selectedImage={selectedImage}
          />

          <CaptionEditor
            selectedPlatform={selectedPlatform}
            activePost={activePost}
            onHookChange={handleHookChange}
            onBodyChange={handleBodyChange}
            onAddHashtag={handleAddHashtag}
            onRemoveHashtag={handleRemoveHashtag}
          />

          <ActionBar
            copied={copied}
            onCopyPost={handleCopyPost}
            onOpenSchedule={() => setShowScheduleModal(true)}
            onPublishNow={handlePublishNow}
            channelCount={activeChannels.length}
          />
        </div>
      </div>

      {/* Schedule Peak Modal */}
      <ScheduleModal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        activePost={activePost}
        activeChannels={activeChannels}
        onConfirmSchedule={handleConfirmSchedule}
      />
    </div>
  );
}
