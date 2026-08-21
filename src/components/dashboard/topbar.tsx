"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  Sparkles,
  Menu,
  Check,
  TrendingUp,
  Clock,
  User,
  Settings,
  CreditCard,
  LogOut,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TopbarProps {
  onMenuToggle?: () => void;
  title?: string;
}

export function Topbar({ onMenuToggle, title = "Dashboard" }: TopbarProps) {
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const notificationRef = React.useRef<HTMLDivElement>(null);
  const profileRef = React.useRef<HTMLDivElement>(null);

  // Close popovers on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      title: "Viral Alert 🔥",
      description: "Your LinkedIn post '10 AI Trends in 2026' is trending with +420% reach.",
      time: "10m ago",
      unread: true,
      icon: TrendingUp,
      iconColor: "text-amber-500 bg-amber-500/10",
    },
    {
      id: 2,
      title: "Post Published Automatically",
      description: "Carousel published to Instagram & Facebook successfully.",
      time: "1h ago",
      unread: true,
      icon: Check,
      iconColor: "text-emerald-500 bg-emerald-500/10",
    },
    {
      id: 3,
      title: "Upcoming Scheduled Post",
      description: "Thread scheduled for X (Twitter) in 45 minutes.",
      time: "2h ago",
      unread: false,
      icon: Clock,
      iconColor: "text-blue-500 bg-blue-500/10",
    },
  ];

  return (
    <header className="sticky top-0 z-20 h-16 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 gap-4">
        {/* Left: Mobile Menu Trigger + Breadcrumb / Title */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <span className="font-medium text-zinc-500 dark:text-zinc-400">Workspace</span>
            <span>/</span>
            <span className="font-semibold text-zinc-900 dark:text-white capitalize">
              {title}
            </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md mx-auto relative hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts, analytics, campaigns, or AI drafts..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-9 pr-14 py-2 bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 rounded-xl text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5 pointer-events-none">
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded shadow-2xs">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Actions: Create, Notifications, Profile */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick Create AI Post Button */}
          <Link
            href="/create"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm shadow-emerald-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create with AI</span>
          </Link>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="relative p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-zinc-950" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden animate-fadeIn z-50">
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                      Notifications
                    </h4>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      2 new
                    </span>
                  </div>
                  <button className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 hover:underline">
                    Mark all read
                  </button>
                </div>

                <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60 max-h-80 overflow-y-auto">
                  {notifications.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className={cn(
                          "p-3.5 flex items-start gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer",
                          item.unread && "bg-emerald-500/5 dark:bg-emerald-500/5"
                        )}
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                            item.iconColor
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                              {item.title}
                            </p>
                            <span className="text-[10px] text-zinc-400 shrink-0">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-2.5 text-center border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                  <Link
                    href="/notifications"
                    className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Profile Menu Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 p-1 pl-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
            >
              <div className="relative">
                <div className="w-7 h-7 rounded-full bg-linear-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  AM
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 border border-white dark:border-zinc-950 rounded-full" />
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 hidden sm:block" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-1.5 animate-fadeIn z-50">
                <div className="px-3 py-2.5 border-b border-zinc-100 dark:border-zinc-800 mb-1">
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">
                    Alex Morgan
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                    alex@brandpulse.io
                  </p>
                  <div className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Pro Account</span>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <Link
                    href="/settings"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Profile Settings</span>
                  </Link>

                  <Link
                    href="/billing"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Billing & Usage</span>
                  </Link>

                  <Link
                    href="/settings"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Preferences</span>
                  </Link>
                </div>

                <div className="pt-1 mt-1 border-t border-zinc-100 dark:border-zinc-800">
                  <button
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors text-left"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
