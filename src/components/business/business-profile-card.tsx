"use client";

import * as React from "react";
import { Globe, MapPin, Phone, Mail, Clock, Edit2, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessProfile } from "./types";

interface BusinessProfileCardProps {
  profile: BusinessProfile;
  onSave: (updated: BusinessProfile) => void;
}

export function BusinessProfileCard({ profile, onSave }: BusinessProfileCardProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState(profile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-emerald-600 to-teal-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-emerald-500/20">
            GL
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                {profile.name}
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                Verified Business
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {profile.industry} · Est. {profile.foundedYear}
            </p>
          </div>
        </div>

        <Button
          variant={isEditing ? "primary" : "secondary"}
          size="sm"
          onClick={() => {
            if (isEditing) {
              onSave(formData);
              setIsEditing(false);
            } else {
              setIsEditing(true);
            }
          }}
          leftIcon={
            isEditing ? <Check className="w-3.5 h-3.5" /> : <Edit2 className="w-3.5 h-3.5" />
          }
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                Business Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                Website
              </label>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                Business Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
              Tagline & Core Value Proposition
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
              Target Customer Persona (AI Grounding)
            </label>
            <textarea
              rows={2}
              value={formData.idealCustomer}
              onChange={(e) => setFormData({ ...formData, idealCustomer: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 resize-none"
            />
          </div>
        </form>
      ) : (
        <div className="space-y-5">
          {/* Tagline Box */}
          <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Core Brand Promise:
            </span>
            <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
              &ldquo;{profile.tagline}&rdquo;
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
              <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-400 block">Website</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                  {profile.website}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
              <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-400 block">Phone</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                  {profile.phone}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
              <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-400 block">Email</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                  {profile.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800 sm:col-span-2">
              <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-400 block">Address</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                  {profile.address}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
              <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-400 block">Hours</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                  {profile.operatingHours}
                </span>
              </div>
            </div>
          </div>

          {/* Target Audience Grounding Box */}
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Target Audience Persona (AI Tuning)
            </span>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {profile.idealCustomer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
