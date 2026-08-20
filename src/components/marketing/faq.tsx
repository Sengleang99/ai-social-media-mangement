"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Can I share content from the Social Hub on my own social channels?",
    answer:
      "Yes, you can easily share content from the Social Hub on your own social media channels. Simply connect your accounts and use the one-click publish or auto-scheduler to amplify the content seamlessly across Instagram, Facebook, TikTok, X, and YouTube.",
  },
  {
    id: 2,
    question: "How does the AI ensure the posts sound authentically human?",
    answer:
      "SocialHub uses calibrated brand voice profiles and contextual analysis to mimic natural human speech patterns, industry jargon, and storytelling nuances — maintaining a 99%+ human authenticity score without robotic phrases.",
  },
  {
    id: 3,
    question: "How can I provide feedback or report issues related to the Social Hub?",
    answer:
      "You can submit feedback or report issues directly from your dashboard via the in-app help widget, or email our 24/7 dedicated support team at support@socialhub.ai.",
  },
  {
    id: 4,
    question: "How can I access the Social Hub?",
    answer:
      "You can access SocialHub from any web browser on desktop, tablet, or mobile. Simply sign in to your workspace or click 'Create An Account' to start your onboarding.",
  },
  {
    id: 5,
    question: "What is the purpose of the Social Hub?",
    answer:
      "SocialHub is an all-in-one AI platform designed to automate content creation, craft viral post variations, schedule across multiple channels at peak engagement windows, and grow your audience effortlessly.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = React.useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-white/40 dark:bg-zinc-950/40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to our Social Hub! We've compiled a list of frequently asked questions to help you navigate our platform and make the most of your experience.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-white dark:bg-zinc-900 border-2 border-emerald-400/90 dark:border-emerald-500 shadow-sm"
                    : "bg-white/90 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                      isOpen
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rotate-180"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    )}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FaqSection;
