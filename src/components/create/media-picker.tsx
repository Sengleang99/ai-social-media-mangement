"use client";

import * as React from "react";
import Image from "next/image";
import { Image as ImageIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRESET_IMAGES } from "./types";

interface MediaPickerProps {
  selectedImage: string;
  onSelectImage: (url: string) => void;
}

export function MediaPicker({ selectedImage, onSelectImage }: MediaPickerProps) {
  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
          <span>4. Media Asset Attachment</span>
        </label>
        <span className="text-[11px] text-zinc-400">High-Res Visuals</span>
      </div>

      <div className="grid grid-cols-4 gap-2.5">
        {PRESET_IMAGES.map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => onSelectImage(img.url)}
            className={cn(
              "relative aspect-square rounded-2xl overflow-hidden border-2 transition-all cursor-pointer group shadow-xs",
              selectedImage === img.url
                ? "border-emerald-500 ring-2 ring-emerald-500/30 scale-95"
                : "border-zinc-200 dark:border-zinc-800 opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={img.url}
              alt={img.title}
              unoptimized
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {selectedImage === img.url && (
              <div className="absolute top-1.5 right-1.5 z-10 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
