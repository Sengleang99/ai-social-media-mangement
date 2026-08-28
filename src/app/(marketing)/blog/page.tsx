"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  Clock, 
  Flame, 
  BookOpen, 
  CheckCircle2, 
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Algorithm Deep Dives" | "AI Workflows" | "Creator Playbooks" | "Case Studies";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatarColor: string;
  };
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  gradient: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "instagram-algorithm-2026-breakdown",
    title: "The 2026 Instagram Algorithm Breakdown: Why Saves & DM Shares Beat Likes 10-to-1",
    excerpt: "We analyzed 2.4 million creator posts to reverse engineer Instagram's latest feed distribution model. Here is the exact scoring formula and how to format your carousels.",
    category: "Algorithm Deep Dives",
    readTime: "6 min read",
    publishedAt: "Aug 18, 2026",
    author: {
      name: "Marcus Rivera",
      role: "Lead Growth Scientist",
      avatarColor: "from-amber-500 to-rose-500",
    },
    featured: true,
    trending: true,
    tags: ["Instagram", "Algorithm", "Engagement"],
    gradient: "from-rose-500/20 via-purple-500/15 to-emerald-500/10",
  },
  {
    id: "2",
    slug: "1-to-5-content-multiplication-system",
    title: "The 1-to-5 Content Multiplexer: How 1 Rough Thought Becomes 5 Native Viral Posts",
    excerpt: "Stop writing 5 separate social posts each morning. Learn the step-by-step framework to repurpose one insight across TikTok, X, LinkedIn, and YouTube Shorts.",
    category: "AI Workflows",
    readTime: "5 min read",
    publishedAt: "Aug 15, 2026",
    author: {
      name: "Elena Rostova",
      role: "Head of Content Ops",
      avatarColor: "from-emerald-500 to-teal-400",
    },
    trending: true,
    tags: ["Repurposing", "Automation", "Workflow"],
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "3",
    slug: "human-authenticity-ai-cliche-stripper",
    title: "The AI Cliché Blacklist: 14 Words That Instantly Kill Your Organic Algorithm Reach",
    excerpt: "Social platforms now detect and down-rank generic AI phrases like 'delve into', 'in today's world', and 'testament to'. Here is how to keep your copy 99.4% authentic.",
    category: "Creator Playbooks",
    readTime: "4 min read",
    publishedAt: "Aug 12, 2026",
    author: {
      name: "Sarah Chen",
      role: "Creator in Residence (320k)",
      avatarColor: "from-purple-500 to-indigo-500",
    },
    tags: ["Copywriting", "AI Prompts", "Voice Tuning"],
    gradient: "from-purple-500/20 to-sky-500/10",
  },
  {
    id: "4",
    slug: "case-study-48k-followers-60-days",
    title: "Case Study: How FinFlow Grew 48,000 Followers in 60 Days on Full Autopilot",
    excerpt: "A transparent look at the analytics, posting schedule, viral hook variants, and conversion metrics of a B2B startup scaling social organically.",
    category: "Case Studies",
    readTime: "8 min read",
    publishedAt: "Aug 09, 2026",
    author: {
      name: "Alex Vance",
      role: "VP of Growth, FinFlow",
      avatarColor: "from-sky-500 to-blue-500",
    },
    tags: ["Case Study", "B2B SaaS", "Viral Growth"],
    gradient: "from-sky-500/20 to-emerald-500/10",
  },
  {
    id: "5",
    slug: "peak-hour-scheduling-data-study",
    title: "We Tracked 500,000 Followers for 90 Days: Here Are the Optimal Peak Posting Windows",
    excerpt: "Posting at 9 AM is outdated advice. Discover how follower timezone clustering and retention heatmaps predict algorithmic velocity per platform.",
    category: "Algorithm Deep Dives",
    readTime: "5 min read",
    publishedAt: "Aug 04, 2026",
    author: {
      name: "Dr. Liam Patel",
      role: "Data Systems Architect",
      avatarColor: "from-teal-500 to-emerald-400",
    },
    tags: ["Scheduling", "Heatmaps", "Analytics"],
    gradient: "from-teal-500/20 to-indigo-500/10",
  },
  {
    id: "6",
    slug: "supabase-vector-embeddings-brand-voice",
    title: "Under the Hood: How Supabase pgvector Trains AI on Your Unique Creator Tone",
    excerpt: "An architectural guide explaining how vector embeddings prevent AI drift and ensure generated captions always match your genuine humor and pacing.",
    category: "AI Workflows",
    readTime: "7 min read",
    publishedAt: "Jul 28, 2026",
    author: {
      name: "Marcus Rivera",
      role: "Lead Growth Scientist",
      avatarColor: "from-indigo-500 to-purple-500",
    },
    tags: ["Supabase", "pgvector", "Engineering"],
    gradient: "from-indigo-500/20 to-teal-500/10",
  },
];

const CATEGORIES = [
  "All Articles",
  "Algorithm Deep Dives",
  "AI Workflows",
  "Creator Playbooks",
  "Case Studies",
] as const;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All Articles" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <div className="relative overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. Header & Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center relative z-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
          <span>Social Growth & Engineering Blog</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Insights, Algorithm Breakdowns <br />
          <span className="text-emerald-600 dark:text-emerald-400">& Creator Playbooks.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Tactical guides, algorithmic reverse-engineering, and AI workflows to scale authentic social reach across all major networks.
        </p>

        {/* Search Bar */}
        <div className="pt-4 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search playbooks, algorithm tips, prompts..."
              className="w-full h-11 pl-10 pr-4 text-xs sm:text-sm bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* 2. Featured Post Spotlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 relative z-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 dark:from-zinc-900 dark:via-zinc-900 dark:to-emerald-950/20 border border-zinc-200/80 dark:border-zinc-800 shadow-xl shadow-zinc-950/5 flex flex-col lg:flex-row items-center justify-between gap-8 group hover:border-emerald-500/40 transition-all">
          <div className="space-y-4 max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white shadow-xs">
                ★ FEATURED PLAYBOOK
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {featuredPost.category}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {featuredPost.title}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-tr ${featuredPost.author.avatarColor} flex items-center justify-center text-white font-bold text-xs shadow-xs`}
                >
                  {featuredPost.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">
                    {featuredPost.author.name}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {featuredPost.author.role} • {featuredPost.publishedAt}
                  </div>
                </div>
              </div>

              <Link href="/signup">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Read Article
                </Button>
              </Link>
            </div>
          </div>

          {/* Graphical Mockup Banner */}
          <div className="w-full lg:w-[42%] aspect-video rounded-2xl bg-zinc-900 text-white p-6 flex flex-col justify-between relative overflow-hidden border border-zinc-800 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_60%)]" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">2.4M Posts Analyzed</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Algorithm Study
              </span>
            </div>

            <div className="relative z-10 space-y-2">
              <div className="text-xs font-mono text-zinc-400">Key Metric Discovery:</div>
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-200">
                &ldquo;DM shares now trigger 4.2x higher Explore feed impressions than standard feed likes.&rdquo;
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-800">
              <span>Verified 2026 Data</span>
              <span className="text-emerald-400 font-semibold">+340% Higher Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 relative z-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap cursor-pointer",
                activeCategory === cat
                  ? "bg-emerald-600 text-white shadow-xs font-bold"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {post.category}
                    </span>
                    <span className="text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-3">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & CTA */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full bg-gradient-to-tr ${post.author.avatarColor} flex items-center justify-center text-white font-bold text-[10px]`}
                      >
                        {post.author.name.charAt(0)}
                      </div>
                      <div className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                        {post.author.name}
                      </div>
                    </div>

                    <Link
                      href="/signup"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 transition-colors"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 text-sm">
              No articles found matching &ldquo;{searchQuery}&rdquo;. Try another search term!
            </p>
          </div>
        )}
      </section>

      {/* 5. Weekly Creator Growth Digest Newsletter Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-500 text-white text-center relative overflow-hidden shadow-2xl shadow-emerald-500/20 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs border border-white/20">
            <Mail className="w-3.5 h-3.5" />
            Join 34,000+ Creators on Our Weekly Digest
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            The 3-Minute Friday Growth Breakdown.
          </h2>

          <p className="text-xs sm:text-sm text-emerald-50 max-w-lg mx-auto leading-relaxed">
            Every Friday morning, we send 1 actionable algorithm breakdown, 3 high-converting viral hooks, and 1 AI social workflow. Zero spam.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full sm:w-72 h-11 px-4 text-xs sm:text-sm rounded-xl bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <Button
                type="submit"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-900 text-white font-bold h-11 border-zinc-900"
              >
                Join Free
              </Button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center gap-2 text-sm font-bold text-white animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-emerald-200" />
              <span>You&apos;re in! Look out for this Friday&apos;s breakdown.</span>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 text-[11px] text-emerald-100">
            <span>✓ 100% Free forever</span>
            <span>•</span>
            <span>✓ 1-click unsubscribe</span>
          </div>
        </div>
      </section>

      {/* 6. Conversion CTA Banner */}
      <CtaBanner />
    </div>
  );
}
