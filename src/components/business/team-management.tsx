"use client";

import * as React from "react";
import { Users, Plus, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamMember } from "./types";

interface TeamManagementProps {
  members: TeamMember[];
  onInviteMember: (email: string, role: TeamMember["role"]) => void;
}

export function TeamManagement({
  members,
  onInviteMember,
}: TeamManagementProps) {
  const [showInviteModal, setShowInviteModal] = React.useState(false);
  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState<TeamMember["role"]>("Creator");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;

    onInviteMember(inviteEmail, inviteRole);
    setInviteEmail("");
    setShowInviteModal(false);
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-500" />
            <span>Team Members & Workspace Roles</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Collaborate on omnichannel drafts, approvals, and scheduling
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowInviteModal(true)}
          leftIcon={<Plus className="w-3.5 h-3.5" />}
        >
          Invite Member
        </Button>
      </div>

      {/* Invite Form */}
      {showInviteModal && (
        <form
          onSubmit={handleInvite}
          className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 animate-fadeIn"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>Invite New Team Member</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <input
                type="email"
                placeholder="colleague@bakery.com"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                required
                className="w-full p-2.5 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            <div>
              <select
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value as TeamMember["role"])}
                className="w-full p-2.5 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none"
              >
                <option value="Marketing Lead">Marketing Lead</option>
                <option value="Creator">Content Creator</option>
                <option value="Store Manager">Store Manager</option>
                <option value="Owner">Owner</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setShowInviteModal(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Send Invitation
            </Button>
          </div>
        </form>
      )}

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {members.map((member) => (
          <div
            key={member.id}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              {member.avatar}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                  {member.name}
                </p>
                {member.role === "Owner" && (
                  <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                )}
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                {member.email}
              </p>
              <span className="inline-block text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 mt-1">
                {member.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
