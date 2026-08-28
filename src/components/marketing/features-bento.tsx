import { 
  Repeat, 
  Clock, 
  BarChart3, 
  CheckCircle,
  BrainCircuit
} from "lucide-react";

export function FeaturesBento() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 relative z-10 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            WHY SOCIALAI?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Built for Real Creators, Not Spambots.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Generic AI tools generate robotic filler that hurts your algorithm reach. SocialAI is engineered from the ground up for human voice, high engagement, and multi-channel consistency.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Bento Card 1 */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="space-y-4 max-w-lg relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Human Authenticity Engine (99.4% Index)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our model specifically strips away cringe clichés (&ldquo;Delve into&rdquo;, &ldquo;In today&apos;s fast-paced world&rdquo;) and structures posts with real hooks, storytelling cadence, and actionable substance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                ✓ No Robotic Cliches
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                ✓ Platform-Native Formatting
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                ✓ High-CTR 3-Sec Hooks
              </span>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Peak Viral Auto-Timing
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                AI continuously analyzes when your exact followers on Instagram, TikTok, and X are most active to publish right at the algorithmic peak.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Auto-calculates daily</span>
              <span>+42% Reach</span>
            </div>
          </div>

          {/* Bento Card 3 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Repeat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                1-Idea to 5-Channels
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Turn a single thought into an Instagram carousel, TikTok video script, X thread, Facebook post, and YouTube Short in 10 seconds.
              </p>
            </div>

            <div className="mt-6 text-xs text-zinc-400 font-mono">
              5 platforms simultaneously
            </div>
          </div>

          {/* Bento Card 4 */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="space-y-4 max-w-lg relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Multi-Channel Visual Calendar & Heatmaps
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Drag-and-drop your weekly pipeline, preview exactly how posts will look live on mobile feeds, and let the AI auto-fill gaps with evergreen high-performing content.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle className="w-4 h-4" /> Drag & drop calendar
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle className="w-4 h-4" /> Live feed previews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeaturesBento;
