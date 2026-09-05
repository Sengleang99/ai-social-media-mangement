"use client";

import * as React from "react";
import { Sparkles, Plus, Trash2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KnowledgeSnippet } from "./types";

interface BusinessKnowledgeBaseProps {
  snippets: KnowledgeSnippet[];
  onAddSnippet: (snippet: Omit<KnowledgeSnippet, "id">) => void;
  onDeleteSnippet: (id: string) => void;
}

export function BusinessKnowledgeBase({
  snippets,
  onAddSnippet,
  onDeleteSnippet,
}: BusinessKnowledgeBaseProps) {
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState<KnowledgeSnippet["category"]>("product");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAddSnippet({
      title,
      content,
      category,
    });

    setTitle("");
    setContent("");
    setShowAddForm(false);
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-500" />
            <span>AI Business Knowledge Base</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Ground the AI engine with your authentic recipes, origin stories, FAQs, and local
            business facts
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAddForm((prev) => !prev)}
          leftIcon={<Plus className="w-3.5 h-3.5" />}
        >
          {showAddForm ? "Cancel" : "Add Fact Snippet"}
        </Button>
      </div>

      {/* Add New Snippet Form */}
      {showAddForm && (
        <form
          onSubmit={handleSubmit}
          className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-500/30 space-y-3 animate-fadeIn"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New AI Grounding Snippet</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="Title (e.g., '36-Hour Sourdough Fermentation')"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-2.5 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
            </div>

            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as KnowledgeSnippet["category"])}
                className="w-full p-2.5 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none"
              >
                <option value="product">Product / Recipe</option>
                <option value="brand_voice">Brand Voice</option>
                <option value="location">Location & Hours</option>
                <option value="faq">FAQ / Policy</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              rows={2}
              placeholder="Detailed fact or instruction for the AI (e.g. 'We never use commercial chemical yeast...')"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full p-2.5 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40 resize-none"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="primary" size="sm" type="submit">
              Save Knowledge Snippet
            </Button>
          </div>
        </form>
      )}

      {/* Snippets List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {snippets.map((snip) => (
          <div
            key={snip.id}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-2.5 group"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 capitalize">
                  {snip.category.replace("_", " ")}
                </span>

                <button
                  type="button"
                  onClick={() => onDeleteSnippet(snip.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-opacity cursor-pointer"
                  title="Delete snippet"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <h4 className="text-xs font-bold text-zinc-900 dark:text-white pt-1">{snip.title}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {snip.content}
              </p>
            </div>

            <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono pt-1">
              <Sparkles className="w-2.5 h-2.5 text-purple-500" />
              <span>Loaded in AI Studio Context</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
