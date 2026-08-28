"use client";

import * as React from "react";
import Image from "next/image";
import { User, Mail, Globe, Clock, Camera, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserProfileSettings } from "./types";

interface ProfileSettingsProps {
  profile: UserProfileSettings;
  onSave: (updated: UserProfileSettings) => void;
}

export function ProfileSettings({ profile, onSave }: ProfileSettingsProps) {
  const [formData, setFormData] = React.useState(profile);
  const [saved, setSaved] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-6">
      <div className="pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white">
          Personal Profile & Preferences
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Manage your personal account details, timezone, and login credentials
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar Row */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xs">
            <Image
              src={formData.avatarUrl}
              alt={formData.fullName}
              unoptimized
              fill
              className="object-cover"
            />
            <button
              type="button"
              className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer text-white"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              {formData.fullName}
            </h4>
            <p className="text-xs text-zinc-400 font-mono">{formData.role}</p>
            <button
              type="button"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline mt-1 cursor-pointer"
            >
              Upload New Photo
            </button>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-zinc-400" /> Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-zinc-400" /> Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-400" /> Publishing Timezone
            </label>
            <select
              value={formData.timezone}
              onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none"
            >
              <option value="America/New_York (EST)">America/New_York (EST)</option>
              <option value="America/Los_Angeles (PST)">America/Los_Angeles (PST)</option>
              <option value="America/Chicago (CST)">America/Chicago (CST)</option>
              <option value="Europe/London (GMT)">Europe/London (GMT)</option>
              <option value="Europe/Paris (CET)">Europe/Paris (CET)</option>
              <option value="Asia/Tokyo (JST)">Asia/Tokyo (JST)</option>
              <option value="Asia/Bangkok (ICT)">Asia/Bangkok (ICT)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-zinc-400" /> Interface Language
            </label>
            <select
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none"
            >
              <option value="English (US)">English (US)</option>
              <option value="English (UK)">English (UK)</option>
              <option value="French">Français</option>
              <option value="Spanish">Español</option>
              <option value="German">Deutsch</option>
            </select>
          </div>
        </div>

        {/* Change Password Link / Section */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-zinc-900 dark:text-white">
              Password & Authentication
            </p>
            <p className="text-[11px] text-zinc-500">
              Last updated 3 months ago
            </p>
          </div>
          <Button variant="outline" size="sm" type="button">
            Change Password
          </Button>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <Button
            variant="primary"
            size="md"
            type="submit"
            leftIcon={saved ? <Check className="w-4 h-4" /> : undefined}
          >
            {saved ? "Profile Saved" : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
