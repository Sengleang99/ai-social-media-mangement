"use client";

import * as React from "react";
import Link from "next/link";
import { Palette, Sparkles, CheckCircle2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BrandColor,
  BrandVoiceDNA,
  INITIAL_BRAND_COLORS,
  INITIAL_BRAND_FONTS,
  INITIAL_BRAND_ASSETS,
  INITIAL_VOICE_DNA,
  BrandVoiceDNASettings,
  BrandColors,
  BrandTypography,
  BrandAssets,
  BrandGuidelines,
} from "@/components/brand";

export default function BrandPage() {
  const [colors, setColors] = React.useState<BrandColor[]>(INITIAL_BRAND_COLORS);
  const [voiceDNA, setVoiceDNA] = React.useState<BrandVoiceDNA>(INITIAL_VOICE_DNA);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddColor = (newColor: Omit<BrandColor, "id">) => {
    const col: BrandColor = {
      ...newColor,
      id: `col-${Date.now()}`,
    };
    setColors((prev) => [...prev, col]);
    showToast("🎨 New brand color added to palette!");
  };

  const handleDeleteColor = (id: string) => {
    setColors((prev) => prev.filter((c) => c.id !== id));
    showToast("Color removed from palette.");
  };

  const handleSaveAll = () => {
    showToast("✨ Brand Kit & Voice DNA synchronized with AI Studio!");
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
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Brand Kit & Voice DNA Studio
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Set your tone archetype, visual tokens, and guardrail rules for omnichannel consistency
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleSaveAll}
            leftIcon={<Save className="w-4 h-4" />}
          >
            Save Brand Kit
          </Button>

          <Link href="/create">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Sparkles className="w-4 h-4" />}
            >
              Test in Studio
            </Button>
          </Link>
        </div>
      </div>

      {/* 1. AI Voice & Tone DNA Persona */}
      <BrandVoiceDNASettings
        voiceDNA={voiceDNA}
        onChange={setVoiceDNA}
      />

      {/* 2. Brand Colors & Palette Swatches */}
      <BrandColors
        colors={colors}
        onAddColor={handleAddColor}
        onDeleteColor={handleDeleteColor}
      />

      {/* 3. Brand Typography & Visual Theme */}
      <BrandTypography
        fonts={INITIAL_BRAND_FONTS}
      />

      {/* 4. Brand Logos, Stamps & Watermarks */}
      <BrandAssets
        assets={INITIAL_BRAND_ASSETS}
      />

      {/* 5. Golden Vocabulary & Banned Words Guardrails */}
      <BrandGuidelines
        voiceDNA={voiceDNA}
        onChange={setVoiceDNA}
      />
    </div>
  );
}
