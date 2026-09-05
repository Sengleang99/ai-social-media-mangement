"use client";

import * as React from "react";
import { Palette, Copy, Check, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandColor } from "./types";

interface BrandColorsProps {
  colors: BrandColor[];
  onAddColor: (color: Omit<BrandColor, "id">) => void;
  onDeleteColor: (id: string) => void;
}

export function BrandColors({ colors, onAddColor, onDeleteColor }: BrandColorsProps) {
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null);
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [newHex, setNewHex] = React.useState("#10B981");
  const [newType, setNewType] = React.useState<BrandColor["type"]>("accent");

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newHex.trim()) return;

    onAddColor({
      name: newName,
      hex: newHex,
      type: newType,
    });

    setNewName("");
    setShowAddForm(false);
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Palette className="w-4 h-4 text-emerald-500" />
            <span>Brand Colors & Design Swatches</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Colors used by the AI image generator and carousel slide template engine
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAddForm((p) => !p)}
          leftIcon={<Plus className="w-3.5 h-3.5" />}
        >
          {showAddForm ? "Cancel" : "Add Color"}
        </Button>
      </div>

      {/* Add Color Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddSubmit}
          className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 animate-fadeIn"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 block mb-1">
                Color Name
              </label>
              <input
                type="text"
                placeholder="e.g. Sourdough Golden"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 block mb-1">
                HEX Code
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={newHex}
                  onChange={(e) => setNewHex(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer border border-zinc-200 dark:border-zinc-700 p-0.5 bg-white dark:bg-zinc-900"
                />
                <input
                  type="text"
                  value={newHex}
                  onChange={(e) => setNewHex(e.target.value)}
                  className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-mono focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 block mb-1">
                Role
              </label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as BrandColor["type"])}
                className="w-full p-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="accent">Accent</option>
                <option value="dark">Dark Neutral</option>
                <option value="light">Light Neutral</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="primary" size="sm" type="submit">
              Save Swatch
            </Button>
          </div>
        </form>
      )}

      {/* Swatches Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {colors.map((color) => {
          const isCopied = copiedHex === color.hex;

          return (
            <div
              key={color.id}
              className="p-3 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-2.5 group"
            >
              {/* Color Block */}
              <div
                className="w-full aspect-4/3 rounded-xl shadow-xs flex items-end justify-end p-2 relative overflow-hidden transition-transform group-hover:scale-102"
                style={{ backgroundColor: color.hex }}
              >
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-black/60 text-white uppercase tracking-wider backdrop-blur-xs">
                  {color.type}
                </span>
              </div>

              {/* Info & Copy */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                  {color.name}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">{color.hex}</span>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleCopy(color.hex)}
                      className="p-1 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                      title="Copy HEX"
                    >
                      {isCopied ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>

                    {colors.length > 3 && (
                      <button
                        type="button"
                        onClick={() => onDeleteColor(color.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-rose-500 transition-opacity cursor-pointer"
                        title="Delete color"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
