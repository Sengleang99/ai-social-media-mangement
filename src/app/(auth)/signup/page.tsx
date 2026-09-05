"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
  AlertCircle,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { AuthShell } from "@/components/auth/auth-shell";
import { GoogleButton } from "@/components/auth/google-button";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [agreeTerms, setAgreeTerms] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [googleLoading, setGoogleLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [emailSentNotice, setEmailSentNotice] = React.useState(false);

  const supabase = React.useMemo(() => createClient(), []);

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (!pass)
      return {
        score: 0,
        label: "None",
        color: "bg-zinc-200 dark:bg-zinc-700",
        text: "text-zinc-400",
      };
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: "Weak", color: "bg-rose-500", text: "text-rose-500" };
      case 2:
        return { score: 2, label: "Fair", color: "bg-amber-500", text: "text-amber-500" };
      case 3:
        return { score: 3, label: "Good", color: "bg-teal-500", text: "text-teal-500" };
      case 4:
        return { score: 4, label: "Strong", color: "bg-emerald-500", text: "text-emerald-500" };
      default:
        return { score: 0, label: "Too short", color: "bg-rose-500", text: "text-rose-500" };
    }
  };

  const strength = getPasswordStrength(password);
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialOrNum = /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    const cleanName = fullName.trim();

    if (!cleanName || !cleanEmail || !password) {
      setError("Please complete all required fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms of Service to continue.");
      return;
    }

    setIsLoading(true);

    try {
      const callbackUrl = `${window.location.origin}/auth/callback?next=/login?confirmed=true`;

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: {
            full_name: cleanName,
          },
          emailRedirectTo: callbackUrl,
        },
      });

      if (signUpError) {
        const msg = signUpError.message;
        if (msg.includes("User already registered")) {
          setError("An account with this email already exists. Please sign in instead.");
        } else if (msg.includes("is invalid") || signUpError.code === "email_address_invalid") {
          setError(
            "Please use a real, deliverable email address (Supabase rejects placeholder or invalid domains).",
          );
        } else if (
          msg.includes("rate limit") ||
          signUpError.code === "over_email_send_rate_limit"
        ) {
          setError(
            "Supabase email rate limit exceeded (3-4 emails/hr on default provider). Turn off 'Confirm email' in Supabase Dashboard to test without limits.",
          );
        } else if (msg.includes("Redirect URL")) {
          setError(
            "Redirect URL not allowed. Add http://localhost:3001/** to Redirect URLs in Supabase Dashboard (Auth -> URL Configuration).",
          );
        } else {
          setError(msg);
        }
        setIsLoading(false);
        return;
      }

      // Check if email confirmation is required or session was created immediately
      if (data.session) {
        // Sign out session so user can log in on the login page cleanly
        await supabase.auth.signOut();
        router.push("/login?registered=true");
      } else if (data.user) {
        // Email confirmation is required by Supabase auth configuration
        setIsLoading(false);
        setEmailSentNotice(true);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Registration failed. Please try again.";
      setError(msg);
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError(null);
    setGoogleLoading(true);

    try {
      const callbackUrl = `${window.location.origin}/auth/callback?next=/dashboard`;
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: callbackUrl,
        },
      });

      if (oauthError) {
        setError(oauthError.message);
        setGoogleLoading(false);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to initiate Google sign-up.";
      setError(msg);
      setGoogleLoading(false);
    }
  };

  return (
    <AuthShell
      title={emailSentNotice ? "Verify your email" : "Create your account"}
      subtitle={
        emailSentNotice
          ? `We sent a confirmation link to ${email}`
          : "Start generating 5x more engaging social content in minutes."
      }
      badge={emailSentNotice ? "Check Inbox" : "14-Day Free Pro Trial"}
    >
      {emailSentNotice ? (
        /* Confirmation State */
        <div className="space-y-6 text-center animate-fadeIn">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/60 shadow-lg shadow-emerald-500/10">
            <Mail className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              Confirmation link dispatched!
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
              We have sent an authentication verification link to{" "}
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">{email}</span>.
              Please click the link in your email to activate your workspace.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 px-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <span>Open Email Inbox</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Registration Form */
        <div className="space-y-5">
          {/* Google OAuth Button */}
          <GoogleButton
            text="Sign up with Google"
            isLoading={googleLoading}
            onClick={handleGoogleSignup}
          />

          {/* Divider */}
          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-zinc-200 dark:border-zinc-800 w-full" />
            <span className="bg-white dark:bg-zinc-900 px-3 text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 uppercase absolute">
              or sign up with email
            </span>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex items-center gap-2.5 text-xs text-rose-600 dark:text-rose-300 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="leading-snug">{error}</span>
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Morgan"
                  className="w-full h-11 pl-10 pr-4 text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Work or Personal Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full h-11 pl-10 pr-4 text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full h-11 pl-10 pr-10 text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password Strength Meter */}
              {password.length > 0 && (
                <div className="pt-2 space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-500 dark:text-zinc-400 font-medium">Strength:</span>
                    <span className={`font-semibold ${strength.text}`}>{strength.label}</span>
                  </div>
                  {/* 4 segments */}
                  <div className="grid grid-cols-4 gap-1.5 h-1.5">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`h-full rounded-full transition-all duration-300 ${
                          strength.score >= step ? strength.color : "bg-zinc-200 dark:bg-zinc-700"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Password requirement badges */}
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span
                      className={`flex items-center gap-1 ${hasMinLength ? "text-emerald-600 dark:text-emerald-400 font-medium" : ""}`}
                    >
                      <Check className={`w-3 h-3 ${hasMinLength ? "opacity-100" : "opacity-40"}`} />
                      8+ characters
                    </span>
                    <span
                      className={`flex items-center gap-1 ${hasUppercase ? "text-emerald-600 dark:text-emerald-400 font-medium" : ""}`}
                    >
                      <Check className={`w-3 h-3 ${hasUppercase ? "opacity-100" : "opacity-40"}`} />
                      Uppercase letter
                    </span>
                    <span
                      className={`flex items-center gap-1 ${hasSpecialOrNum ? "text-emerald-600 dark:text-emerald-400 font-medium" : ""}`}
                    >
                      <Check
                        className={`w-3 h-3 ${hasSpecialOrNum ? "opacity-100" : "opacity-40"}`}
                      />
                      Number / symbol
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded text-emerald-600 border-zinc-300 dark:border-zinc-700 focus:ring-emerald-500 cursor-pointer accent-emerald-600 shrink-0"
                />
                <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                  I agree to SocialAI&apos;s{" "}
                  <Link
                    href="/terms"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              isFullWidth
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="mt-2"
            >
              Create Free Account
            </Button>
          </form>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400 text-center">
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ Instant setup</span>
          </div>

          {/* Switch to Login */}
          <div className="text-center pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 hover:underline transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      )}
    </AuthShell>
  );
}
