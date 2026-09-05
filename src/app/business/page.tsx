"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BusinessProfile,
  ConnectedAccount,
  KnowledgeSnippet,
  TeamMember,
  INITIAL_BUSINESS_PROFILE,
  INITIAL_CONNECTED_ACCOUNTS,
  INITIAL_KNOWLEDGE_SNIPPETS,
  INITIAL_TEAM_MEMBERS,
  INITIAL_REVIEWS,
  BusinessProfileCard,
  ConnectedAccounts,
  BusinessKnowledgeBase,
  ReviewsSentiment,
  TeamManagement,
} from "@/components/business";

export default function BusinessPage() {
  const [profile, setProfile] = React.useState<BusinessProfile>(INITIAL_BUSINESS_PROFILE);
  const [accounts, setAccounts] = React.useState<ConnectedAccount[]>(INITIAL_CONNECTED_ACCOUNTS);
  const [snippets, setSnippets] = React.useState<KnowledgeSnippet[]>(INITIAL_KNOWLEDGE_SNIPPETS);
  const [members, setMembers] = React.useState<TeamMember[]>(INITIAL_TEAM_MEMBERS);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveProfile = (updated: BusinessProfile) => {
    setProfile(updated);
    showToast("✅ Business profile updated and synced with AI generator!");
  };

  const handleToggleAccount = (id: string) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id
          ? {
              ...acc,
              status: acc.status === "connected" ? "disconnected" : "connected",
            }
          : acc,
      ),
    );
    showToast("Social account connection status modified.");
  };

  const handleSyncAccount = (id: string) => {
    const acc = accounts.find((a) => a.id === id);
    showToast(`🔄 Synced latest ${acc?.name} data & metrics!`);
  };

  const handleAddSnippet = (newSnippet: Omit<KnowledgeSnippet, "id">) => {
    const snippet: KnowledgeSnippet = {
      ...newSnippet,
      id: `ks-${Date.now()}`,
    };
    setSnippets((prev) => [snippet, ...prev]);
    showToast("✨ Knowledge snippet added to AI context!");
  };

  const handleDeleteSnippet = (id: string) => {
    setSnippets((prev) => prev.filter((s) => s.id !== id));
    showToast("Snippet removed from AI memory.");
  };

  const handleInviteMember = (email: string, role: TeamMember["role"]) => {
    const member: TeamMember = {
      id: `tm-${Date.now()}`,
      name: email.split("@")[0],
      email,
      role,
      avatar: email.slice(0, 2).toUpperCase(),
      status: "invited",
    };
    setMembers((prev) => [...prev, member]);
    showToast(`✉️ Invitation sent to ${email} (${role})`);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast alert banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-2xl flex items-center gap-2.5 animate-bounce [animation-duration:1s] border border-emerald-500/40">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Business & Social Presence Hub
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Manage your brand identity, connected accounts, AI grounding memory, and team
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <Link href="/create">
            <Button variant="primary" size="sm" leftIcon={<Sparkles className="w-4 h-4" />}>
              Generate for Business
            </Button>
          </Link>
        </div>
      </div>

      {/* 1. Core Profile Identity */}
      <BusinessProfileCard profile={profile} onSave={handleSaveProfile} />

      {/* 2. Connected Social Channels & Integrations */}
      <ConnectedAccounts
        accounts={accounts}
        onToggleAccount={handleToggleAccount}
        onSyncAccount={handleSyncAccount}
      />

      {/* 3. AI Knowledge Base & Facts */}
      <BusinessKnowledgeBase
        snippets={snippets}
        onAddSnippet={handleAddSnippet}
        onDeleteSnippet={handleDeleteSnippet}
      />

      {/* 4. Customer Reviews & 1-Click Social Proof Conversion */}
      <ReviewsSentiment reviews={INITIAL_REVIEWS} />

      {/* 5. Team Management */}
      <TeamManagement members={members} onInviteMember={handleInviteMember} />
    </div>
  );
}
