import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepItem {
  id: number;
  title: string;
  description: string;
}

interface StepperProps {
  steps: StepItem[];
  currentStep: number;
  onStepClick?: (step: number) => void;
  className?: string;
}

export function Stepper({ steps, currentStep, onStepClick, className }: StepperProps) {
  return (
    <div className={cn("w-full py-4", className)}>
      <div className="flex items-center justify-between relative">
        {/* Background connector line */}
        <div className="absolute top-5 left-8 right-8 h-0.5 bg-zinc-200 dark:bg-zinc-800 -z-0">
          <div
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{
              width: `${((Math.max(1, currentStep) - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center relative z-10 group">
              <button
                type="button"
                onClick={() => isCompleted && onStepClick?.(step.id)}
                disabled={!isCompleted}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ring-4 ring-white dark:ring-zinc-950",
                  isCompleted
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20 cursor-pointer hover:bg-emerald-500"
                    : isCurrent
                      ? "bg-emerald-600 text-white ring-emerald-100 dark:ring-emerald-950/80 shadow-lg shadow-emerald-500/30 scale-110"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-zinc-200 dark:border-zinc-700",
                )}
              >
                {isCompleted ? <Check className="w-5 h-5 stroke-[2.5]" /> : <span>{step.id}</span>}
              </button>
              <div className="mt-2 text-center hidden sm:block">
                <p
                  className={cn(
                    "text-xs font-semibold tracking-wide transition-colors",
                    isCurrent
                      ? "text-emerald-600 dark:text-emerald-400"
                      : isCompleted
                        ? "text-zinc-700 dark:text-zinc-300"
                        : "text-zinc-400 dark:text-zinc-500",
                  )}
                >
                  {step.title}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-500 font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
