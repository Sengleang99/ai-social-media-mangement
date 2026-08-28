import * as React from "react";
import { Sparkles } from "lucide-react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
            {/* Background subtle radial glow */}
            <div className="absolute w-72 h-72 bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div className="relative z-10 flex flex-col items-center gap-5 p-8 max-w-xs text-center">
                {/* Animated Brand Emblem */}
                <div className="relative flex items-center justify-center">
                    {/* Rotating Outer Glow Ring */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-600 animate-spin [animation-duration:3s] opacity-80 blur-xs" />

                    {/* Inner Logo Card */}
                    <div className="absolute inset-1 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-200/80 dark:border-zinc-800">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 animate-pulse">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>

                {/* Text & Status */}
                <div className="space-y-1.5">
                    <div className="flex items-center justify-center gap-1.5 text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        <span>Social</span>
                        <span className="text-emerald-500">AI</span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        Preparing your creative workspace...
                    </p>
                </div>

                {/* Animated Loading Bar */}
                <div className="w-36 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                    <div className="absolute inset-y-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full animate-loadingBar" />
                </div>
            </div>
        </div>
    );
}