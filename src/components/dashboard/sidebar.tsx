"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  FileText,
  CalendarDays,
  BarChart3,
  Building2,
  Palette,
  Settings,
  CreditCard,
  ChevronDown,
  Zap,
  ArrowUpRight,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SocialHubLogo } from "@/components/ui/social-icons";
import { useAuth } from "@/lib/supabase/auth-context";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Create",
    href: "/create",
    icon: Sparkles,
    badge: "AI",
    badgeColor:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  },
  {
    label: "Content",
    href: "/content",
    icon: FileText,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
    badge: "4",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Business",
    href: "/business",
    icon: Building2,
  },
  {
    label: "Brand",
    href: "/brand",
    icon: Palette,
  },
];

export const SYSTEM_NAV_ITEMS: NavItem[] = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Billing",
    href: "/billing",
    icon: CreditCard,
    badge: "Pro",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { displayName, displayEmail, initials, signOut } = useAuth();

  const isLinkActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  const content = (
    <div className="flex h-full flex-col justify-between bg-white dark:bg-zinc-950 border-r border-zinc-200/80 dark:border-zinc-800/80 w-64 select-none">
      {/* Top Header & Navigation */}
      <div className="flex flex-col gap-6 p-4">
        {/* Brand & Mobile Close */}
        <div className="flex items-center justify-between px-2 pt-1">
          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <SocialHubLogo className="w-7 h-7" />
          </Link>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Workspace Switcher */}
        <div className="px-1">
          <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100/80 dark:hover:bg-zinc-900 transition-all text-left group shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                GL
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                  GreenLeaf Bakery & Cafe
                </p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                  Small Business Autopilot · 4 Channels
                </p>
              </div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 shrink-0 ml-1 transition-transform" />
          </button>
        </div>

        {/* Main Navigation Group */}
        <div className="space-y-1">
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Platform
          </p>
          <nav className="space-y-1 pt-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const active = isLinkActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150",
                    active
                      ? "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-colors",
                        active
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300",
                      )}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={cn(
                        "text-[10px] font-bold px-1.5 py-0.5 rounded-md leading-none",
                        item.badgeColor ||
                          "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* System / Preferences Group */}
        <div className="space-y-1 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Account & System
          </p>
          <nav className="space-y-1 pt-1">
            {SYSTEM_NAV_ITEMS.map((item) => {
              const active = isLinkActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150",
                    active
                      ? "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-colors",
                        active
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300",
                      )}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={cn(
                        "text-[10px] font-bold px-1.5 py-0.5 rounded-md leading-none",
                        item.badgeColor,
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Section: AI Credits & Profile */}
      <div className="p-4 space-y-3">
        {/* Credits Card */}
        <div className="p-3 rounded-2xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-zinc-900/5 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900 border border-emerald-500/20 dark:border-emerald-500/15 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 fill-emerald-500/20" />
              <span className="text-xs font-bold text-zinc-900 dark:text-white">AI Generation</span>
            </div>
            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              8,450 / 10k
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mb-2.5">
            <div
              className="h-full bg-linear-to-r from-emerald-500 to-teal-400 rounded-full"
              style={{ width: "84.5%" }}
            />
          </div>

          <Link
            href="/billing"
            className="flex items-center justify-between text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors group"
          >
            <span>Upgrade Limit</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* User Mini Bar */}
        <div className="flex items-center justify-between px-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-linear-to-tr from-emerald-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {initials}
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-zinc-950 rounded-full" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                {displayName}
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">
                {displayEmail}
              </p>
            </div>
          </div>
          <button
            title="Log Out"
            onClick={() => signOut()}
            className="p-1.5 text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block h-screen sticky top-0 shrink-0 z-30">{content}</aside>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Off-canvas Drawer */}
      <div
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 lg:hidden transition-transform duration-300 ease-in-out shadow-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {content}
      </div>
    </>
  );
}
