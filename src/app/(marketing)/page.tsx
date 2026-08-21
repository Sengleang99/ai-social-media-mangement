import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcon } from "@/components/ui/social-icons";
import { StatsBar } from "@/components/marketing/stats-bar";
import { InteractiveDemo } from "@/components/marketing/interactive-demo";
import { HowItWorksSection } from "@/components/marketing/how-it-works";
import { PricingSection } from "@/components/marketing/pricing";
import { TestimonialsSection } from "@/components/marketing/testimonials";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import FeaturesBento from "@/components/marketing/features-bento";

export default function MarketingPage() {
  return (
    <div className="relative overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* 1. Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20 text-center relative z-10 max-w-5xl mx-auto w-full">
        {/* Orbital Social Media Badges (5 Platforms) */}
        <div className="relative w-full max-w-3xl min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-center my-4">
          {/* Subtle curved orbital dashed lines */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[320px] sm:w-[480px] md:w-[620px] h-[240px] sm:h-[320px] md:h-[380px] rounded-full border border-dashed border-emerald-400/30 dark:border-emerald-500/20" />
            <div className="absolute w-[440px] sm:w-[620px] md:w-[780px] h-[320px] sm:h-[400px] md:h-[480px] rounded-full border border-dashed border-sky-400/20 dark:border-sky-500/10" />
          </div>

          {/* Social Icons floating on orbit */}
          {/* Instagram - Top Left */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-12 p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 animate-bounce [animation-duration:3.5s]">
            <PlatformIcon platform="instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* X - Top Right */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-12 p-3.5 sm:p-4 rounded-full bg-black dark:bg-zinc-800 text-white shadow-lg shadow-zinc-950/20 animate-bounce [animation-duration:4s]">
            <PlatformIcon platform="x" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* TikTok - Bottom Left */}
          <div className="absolute bottom-2 sm:bottom-6 left-12 sm:left-24 p-3.5 sm:p-4 rounded-full bg-[#000000] text-white shadow-lg shadow-rose-500/20 ring-2 ring-[#FE2C55]/60 animate-bounce [animation-duration:3s]">
            <PlatformIcon platform="tiktok" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Facebook - Bottom Right */}
          <div className="absolute bottom-2 sm:bottom-6 right-12 sm:right-24 p-3.5 sm:p-4 rounded-full bg-[#1877F2] text-white shadow-lg shadow-blue-600/25 animate-bounce [animation-duration:4.5s]">
            <PlatformIcon platform="facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* YouTube - Top Center Floating Pill Accent */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 p-2.5 sm:p-3 rounded-full bg-[#FF0000] text-white shadow-lg shadow-red-600/25 animate-pulse">
            <PlatformIcon platform="youtube" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* Center Content */}
          <div className="relative z-10 max-w-2xl mx-auto px-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.15]">
              Scale Your Socials <br />
              with <span className="relative inline-block underline decoration-emerald-500 decoration-4 underline-offset-8">Intelligent AI</span> <br />
              on Full Autopilot
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Generate authentic viral posts, optimize peak-hour scheduling, and grow your audience effortlessly across Instagram, TikTok, X, Facebook, and YouTube.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link href="/signup">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Create An Account
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Metrics & Social Proof Bar */}
      <StatsBar />

      {/* 3. How It Works & Solution 1 Section */}
      {/* <HowItWorksSection /> */}

      {/* 4. Live Interactive AI Demo Playground */}
      <InteractiveDemo />

      {/* 5. Bento Features Grid ("Why SocialAI") */}
      <FeaturesBento />

      {/* 6. Pricing Plans Section */}
      <PricingSection />

      {/* 7. Creator Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Bottom Conversion Banner */}
      <CtaBanner />
    </div>
  );
}
