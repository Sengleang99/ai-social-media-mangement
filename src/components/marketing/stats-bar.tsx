import * as React from "react";
import { TrendingUp, Users, Clock, Sparkles } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      value: "10k+",
      label: "Active Creators & Brands",
      icon: <Users className="w-4 h-4 text-emerald-500" />,
    },
    {
      value: "+340%",
      label: "Average Organic Reach Growth",
      icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
    },
    {
      value: "15+ hrs",
      label: "Saved Every Week per Brand",
      icon: <Clock className="w-4 h-4 text-emerald-500" />,
    },
    {
      value: "99.4%",
      label: "Human Authenticity Index",
      icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-4 relative z-10">
      <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default StatsBar;
