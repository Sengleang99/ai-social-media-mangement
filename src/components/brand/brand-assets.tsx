"use client";

import * as React from "react";
import Image from "next/image";
import { Image as ImageIcon, Upload, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandAsset } from "./types";

interface BrandAssetsProps {
  assets: BrandAsset[];
}

export function BrandAssets({ assets }: BrandAssetsProps) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-emerald-500" />
            <span>Brand Logos, Stamps & Watermarks</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Assets automatically stamped onto AI-generated posts and exported carousels
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          leftIcon={<Upload className="w-3.5 h-3.5" />}
        >
          Upload Asset
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-3 flex flex-col justify-between group hover:border-emerald-500/40 transition-all"
          >
            <div className="space-y-3">
              {/* Asset Preview Frame */}
              <div className="relative aspect-video w-full rounded-xl bg-zinc-950 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
                  src={asset.imageUrl}
                  alt={asset.title}
                  unoptimized
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[9px] font-bold uppercase backdrop-blur-xs">
                  {asset.format}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-900 dark:text-white line-clamp-1">
                  {asset.title}
                </h4>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
                  {asset.dimensions}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Auto-Stamp Ready
              </span>

              <button
                type="button"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                title="Download asset"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
