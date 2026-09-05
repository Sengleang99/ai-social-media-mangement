import * as React from "react";
import { Star, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  name: string;
  role: string;
  handle: string;
  avatarColor: string;
  metric: string;
  quote: string;
  platforms: string[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Founder, SaaS Launchpad",
    handle: "@alex_builds",
    avatarColor: "from-emerald-500 to-teal-400",
    metric: "+48,000 Followers in 60 Days",
    quote:
      "SocialHub completely solved our biggest content bottleneck. The AI writes hooks that sound exactly like me, not like a generic ChatGPT regurgitation. We scaled our organic pipeline 4x.",
    platforms: ["x", "linkedin"],
  },
  {
    name: "Elena Chen",
    role: "Content Creator & Agency Lead",
    handle: "@elena.creative",
    avatarColor: "from-pink-500 via-rose-500 to-amber-500",
    metric: "Saved 18 Hours Every Week",
    quote:
      "The 1-to-5 omnichannel feature is magic. I write one rough core insight, and SocialHub auto-formats an Instagram carousel, a TikTok video script, and a Facebook discussion in 30 seconds.",
    platforms: ["instagram", "tiktok"],
  },
  {
    name: "Marcus Vance",
    role: "Head of Growth, FinFlow",
    handle: "@marcus_growth",
    avatarColor: "from-blue-600 to-indigo-600",
    metric: "3.4M Monthly Organic Impressions",
    quote:
      "The peak-hour auto-scheduler alone is worth 10x the subscription. Our engagement rates jumped by 42% in the first two weeks simply by hitting the algorithmic sweet spots.",
    platforms: ["x", "youtube", "facebook"],
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-zinc-50/60 dark:bg-zinc-900/40"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header (Matching Design System) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-emerald-400 uppercase">
            WHAT CREATORS SAY?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Loved by 10,000+ Creators & Brands.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            See how founders, creators, and agencies use SocialHub to build consistent audience
            flywheels without burnout.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-emerald-500/40 transition-all group"
            >
              <div>
                {/* 5-Star Rating & Metric Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Badge variant="emerald" size="sm">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    {t.metric}
                  </Badge>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-xs`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {t.role} •{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">{t.handle}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;
