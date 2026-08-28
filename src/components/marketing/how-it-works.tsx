"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SolutionItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  actionText: string;
  actionHref: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 1,
    tag: "SOLUTION 1",
    title: "Onboarding",
    description:
      "Quickly understand your social media needs, audience, and goals. Analyze your content for improvement and optimization.",
    imageSrc: "/images/onboarding_social_tree.jpg",
    actionText: "Read More >",
    actionHref: "/onboarding",
  },
  {
    id: 2,
    tag: "SOLUTION 2",
    title: "Content Creation",
    description:
      "Easily create engaging content for your audience. Choose templates or create your own. AI optimization ensures high-performing content.",
    imageSrc: "/images/onboarding_social_tree.jpg",
    actionText: "Read More >",
    actionHref: "/onboarding",
  },
  {
    id: 3,
    tag: "SOLUTION 3",
    title: "Scheduling",
    description:
      "Effortlessly plan and schedule content across all channels. Get insights to improve social media AI performance.",
    imageSrc: "/images/onboarding_social_tree.jpg",
    actionText: "Read More >",
    actionHref: "/onboarding",
  },
];

export function HowItWorksSection() {
  const [activeSolutionId, setActiveSolutionId] = React.useState<number>(1);
  const activeSolution = SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];

  return (
    <section id="ai-tools" className="w-full py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase">
            HOW IT WORKS?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            How SocialHub Works.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Upgrade Your Social Media Management with AI in 3 simple steps. Enter the Playground and effortlessly generate engaging, impactful content using SocialHub advanced
          </p>
        </div>

        {/* Featured Solution Section (Clean layout without card container or shadows) */}
        <div className="py-4 sm:py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column (Text & Link) */}
            <div className="md:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                {activeSolution.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                {activeSolution.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                {activeSolution.description}
              </p>

              <div className="pt-2">
                <Link
                  href={activeSolution.actionHref}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>{activeSolution.actionText}</span>
                </Link>
              </div>
            </div>

            {/* Right Column (Clean Illustration with No Shadow or Box Card) */}
            <div className="md:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src={activeSolution.imageSrc}
                  alt="Onboarding and Social Tree"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Solution Cards (Kept as clean card containers) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 02: Content Creation */}
          <div
            onClick={() => setActiveSolutionId(2)}
            className={cn(
              "p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between",
              activeSolutionId === 2
                ? "bg-white dark:bg-zinc-900 border-emerald-500 shadow-sm ring-1 ring-emerald-500/30"
                : "bg-white/90 dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-zinc-300 dark:text-zinc-600 font-mono">
                    02
                  </span>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    Content Creation
                  </h4>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                  Read More...
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Easily create engaging content for your audience. Choose templates or create your own. AI optimization ensures high-performing content.
              </p>
            </div>
          </div>

          {/* Card 03: Scheduling */}
          <div
            onClick={() => setActiveSolutionId(3)}
            className={cn(
              "p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between",
              activeSolutionId === 3
                ? "bg-white dark:bg-zinc-900 border-emerald-500 shadow-sm ring-1 ring-emerald-500/30"
                : "bg-white/90 dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-zinc-300 dark:text-zinc-600 font-mono">
                    03
                  </span>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    Scheduling
                  </h4>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                  Read More...
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Effortlessly plan and schedule the content across all channels. Get insights to improve social media AI performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorksSection;
