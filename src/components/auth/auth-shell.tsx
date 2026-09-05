"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { SocialHubLogo } from "@/components/ui/social-icons";

interface AuthShellProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
}

export function AuthShell({
  children,
  title,
  subtitle,
  badge = "AI-Powered Social Growth",
}: AuthShellProps) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <SocialHubLogo />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to home</span>
        </Link>
      </div>

      {/* Center Auth Card */}
      <div className="my-auto py-8 max-w-md w-full mx-auto relative z-10">
        {/* Title Header */}
        <div className="space-y-2 mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>{badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-zinc-950/5">
          {children}
        </div>
      </div>

      {/* Bottom Legal Footer */}
      <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 pt-6 gap-2 relative z-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
        <span>&copy; {new Date().getFullYear()} SocialAI Inc. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link
            href="/#privacy"
            className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Privacy Policy
          </Link>
          <span>&bull;</span>
          <Link
            href="/#terms"
            className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AuthShell;
