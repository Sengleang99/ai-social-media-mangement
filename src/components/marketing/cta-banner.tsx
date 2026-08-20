import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-500 text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl shadow-emerald-500/20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            Join 10,000+ Smart Creators & Brands
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Put Your Social Media on Full Autopilot?
          </h2>

          <p className="text-sm sm:text-base text-emerald-50 max-w-lg mx-auto leading-relaxed">
            Configure your brand voice in under 2 minutes. Connect Instagram, TikTok, X, Facebook, and YouTube today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/signup">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-zinc-100 text-emerald-900 border-white shadow-lg shadow-black/10 font-bold"
                rightIcon={<ArrowRight className="w-4 h-4 text-emerald-700" />}
              >
                Start Free 14-Day Trial
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/15 border border-white/25"
              >
                View Dashboard
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs text-emerald-100 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 100% Safe OAuth 2.0
            </span>
            <span>•</span>
            <span>No Credit Card Required</span>
            <span>•</span>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CtaBanner;
