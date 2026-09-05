"use client";

import * as React from "react";
import { CheckCircle2, XCircle, Hash, Plus, X } from "lucide-react";
import { BrandVoiceDNA } from "./types";

interface BrandGuidelinesProps {
  voiceDNA: BrandVoiceDNA;
  onChange: (updated: BrandVoiceDNA) => void;
}

export function BrandGuidelines({ voiceDNA, onChange }: BrandGuidelinesProps) {
  const [newGolden, setNewGolden] = React.useState("");
  const [newBlacklist, setNewBlacklist] = React.useState("");
  const [newHashtag, setNewHashtag] = React.useState("");

  const handleAddGolden = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGolden.trim()) return;
    onChange({
      ...voiceDNA,
      goldenKeywords: [...voiceDNA.goldenKeywords, newGolden.trim()],
    });
    setNewGolden("");
  };

  const handleRemoveGolden = (index: number) => {
    onChange({
      ...voiceDNA,
      goldenKeywords: voiceDNA.goldenKeywords.filter((_, i) => i !== index),
    });
  };

  const handleAddBlacklist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlacklist.trim()) return;
    onChange({
      ...voiceDNA,
      blacklistedWords: [...voiceDNA.blacklistedWords, newBlacklist.trim()],
    });
    setNewBlacklist("");
  };

  const handleRemoveBlacklist = (index: number) => {
    onChange({
      ...voiceDNA,
      blacklistedWords: voiceDNA.blacklistedWords.filter((_, i) => i !== index),
    });
  };

  const handleAddHashtag = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHashtag.trim()) return;
    const tag = newHashtag.startsWith("#") ? newHashtag.trim() : `#${newHashtag.trim()}`;
    onChange({
      ...voiceDNA,
      defaultHashtags: [...voiceDNA.defaultHashtags, tag],
    });
    setNewHashtag("");
  };

  const handleRemoveHashtag = (index: number) => {
    onChange({
      ...voiceDNA,
      defaultHashtags: voiceDNA.defaultHashtags.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-6">
      <div className="pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white">
          Brand Vocabulary & Guardrail Rules
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Strict rules enforced on the AI engine during caption and hook generation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* 1. Golden Keywords */}
        <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-3 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Words to Always Favor</h4>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {voiceDNA.goldenKeywords.map((word, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{word}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveGolden(idx)}
                    className="hover:text-rose-500 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleAddGolden} className="pt-2">
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                placeholder="Add golden phrase..."
                value={newGolden}
                onChange={(e) => setNewGolden(e.target.value)}
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-emerald-500/30 text-zinc-900 dark:text-white focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* 2. Blacklisted Words */}
        <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-500/30 space-y-3 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Blacklisted / Banned Words
              </h4>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {voiceDNA.blacklistedWords.map((word, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-white dark:bg-zinc-900 border border-rose-500/30 text-rose-800 dark:text-rose-300 text-xs font-medium flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{word}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveBlacklist(idx)}
                    className="hover:text-zinc-500 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleAddBlacklist} className="pt-2">
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                placeholder="Add banned phrase..."
                value={newBlacklist}
                onChange={(e) => setNewBlacklist(e.target.value)}
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-rose-500/30 text-zinc-900 dark:text-white focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* 3. Default Hashtag Cloud */}
        <div className="p-5 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-500/30 space-y-3 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
              <Hash className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">Default Brand Hashtags</h4>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {voiceDNA.defaultHashtags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-white dark:bg-zinc-900 border border-sky-500/30 text-sky-800 dark:text-sky-300 text-xs font-mono font-medium flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveHashtag(idx)}
                    className="hover:text-rose-500 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleAddHashtag} className="pt-2">
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                placeholder="#YourBrandTag"
                value={newHashtag}
                onChange={(e) => setNewHashtag(e.target.value)}
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-sky-500/30 text-zinc-900 dark:text-white font-mono focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
