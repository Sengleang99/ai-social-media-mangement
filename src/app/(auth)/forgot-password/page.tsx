"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Mail, 
  ArrowLeft, 
  ArrowRight, 
  AlertCircle, 
  RefreshCw, 
  ExternalLink 
} from "lucide-react";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = React.useState(0);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter your registered email address.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setResendCooldown(60);
    }, 1200);
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;
    setResendCooldown(60);
    // Simulate resend notification
  };

  return (
    <AuthShell
      title={isSubmitted ? "Check your email" : "Reset your password"}
      subtitle={
        isSubmitted
          ? `We sent password reset instructions to ${email}`
          : "Enter the email associated with your account and we'll send you a recovery link."
      }
      badge="Account Recovery"
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error Alert */}
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex items-center gap-2.5 text-xs text-rose-600 dark:text-rose-300 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Your Account Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full h-11 pl-10 pr-4 text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
              />
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              We&apos;ll send you a secure link valid for 30 minutes.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            isFullWidth
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Send Reset Instructions
          </Button>

          {/* Return to Login */}
          <div className="text-center pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Remember your password? Sign in</span>
            </Link>
          </div>
        </form>
      ) : (
        /* Confirmation State */
        <div className="space-y-6 text-center animate-fadeIn">
          {/* Animated Mail Icon Box */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/60 shadow-lg shadow-emerald-500/10">
            <Mail className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              Password Reset Link Sent
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
              If an account exists for <span className="font-semibold text-zinc-800 dark:text-zinc-200">{email}</span>, you will receive an email with reset instructions shortly.
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-2">
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 px-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <span>Open Email Provider</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleResend}
              disabled={resendCooldown > 0}
              className="w-full h-10 px-4 flex items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-700/70 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${resendCooldown > 0 ? "animate-spin" : ""}`} />
              <span>
                {resendCooldown > 0
                  ? `Resend available in ${resendCooldown}s`
                  : "Didn't receive email? Click to resend"}
              </span>
            </button>
          </div>

          {/* Return to Login */}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      )}
    </AuthShell>
  );
}
