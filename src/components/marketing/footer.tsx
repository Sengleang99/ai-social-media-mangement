import * as React from "react";
import Link from "next/link";
import { SocialHubLogo, PlatformIcon } from "@/components/ui/social-icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 relative z-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <SocialHubLogo />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              SocialHub is an AI-powered social media management platform built to scale your authentic brand voice, automate publishing, and drive organic reach across all networks.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { platform: "linkedin", href: "https://linkedin.com" },
                { platform: "twitter", href: "https://twitter.com" },
                { platform: "tiktok", href: "https://tiktok.com" },
                { platform: "facebook", href: "https://facebook.com" },
                { platform: "instagram", href: "https://instagram.com" },
              ].map(({ platform, href }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                >
                  <PlatformIcon platform={platform} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Product
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#ai-tools" className="hover:text-emerald-600 transition-colors">
                  AI Content Engine
                </Link>
              </li>
              <li>
                <Link href="/#calendar" className="hover:text-emerald-600 transition-colors">
                  Auto-Scheduler
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-600 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                  <span>Get Started</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-semibold">Free</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                  Growth Blog
                </Link>
              </li>
              <li>
                <Link href="/#guides" className="hover:text-emerald-600 transition-colors">
                  Prompt Library
                </Link>
              </li>
              <li>
                <Link href="/#affiliates" className="hover:text-emerald-600 transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/#status" className="hover:text-emerald-600 transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#privacy" className="hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#terms" className="hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/#security" className="hover:text-emerald-600 transition-colors">
                  Security & OAuth
                </Link>
              </li>
              <li>
                <Link href="/#cookies" className="hover:text-emerald-600 transition-colors">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} SocialHub AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Crafted for human creators & high-velocity teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
