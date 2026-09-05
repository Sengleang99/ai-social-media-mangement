export type SettingsTab =
  "profile" | "ai_preferences" | "notifications" | "security" | "billing" | "danger";

export interface UserProfileSettings {
  fullName: string;
  email: string;
  avatarUrl: string;
  timezone: string;
  language: string;
  role: string;
}

export interface AiPreferenceSettings {
  defaultModel: "gemini_2_5_pro" | "gemini_2_5_flash" | "claude_3_7_sonnet";
  autoHashtagCount: number;
  autoScheduleBufferMinutes: number;
  imageStyle: "photorealistic" | "artisan_warm" | "minimal_vector";
  enableViralHookScoring: boolean;
  enableAutoCommentReplies: boolean;
}

export interface NotificationSettings {
  emailPostSuccess: boolean;
  emailWeeklyDigest: boolean;
  emailViralSpikes: boolean;
  pushDirectPublish: boolean;
  slackWebhookUrl: string;
  slackEnabled: boolean;
}

export interface SecuritySession {
  id: string;
  device: string;
  browser: string;
  location: string;
  ipAddress: string;
  lastActive: string;
  isCurrent: boolean;
}

export interface BillingInvoice {
  id: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending";
  pdfUrl: string;
}

export interface BillingDetails {
  currentPlan: "Free" | "Pro" | "Business Enterprise";
  priceMonthly: number;
  billingCycle: "monthly" | "yearly";
  nextInvoiceDate: string;
  cardLast4: string;
  cardBrand: string;
  cardExpiry: string;
  usageCredits: {
    used: number;
    total: number;
  };
  invoices: BillingInvoice[];
}

export const INITIAL_USER_PROFILE: UserProfileSettings = {
  fullName: "Sarah Jenkins",
  email: "sarah@greenleafbakery.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  timezone: "America/New_York (EST)",
  language: "English (US)",
  role: "Workspace Owner & Founder",
};

export const INITIAL_AI_PREFERENCES: AiPreferenceSettings = {
  defaultModel: "gemini_2_5_pro",
  autoHashtagCount: 4,
  autoScheduleBufferMinutes: 30,
  imageStyle: "artisan_warm",
  enableViralHookScoring: true,
  enableAutoCommentReplies: true,
};

export const INITIAL_NOTIFICATIONS: NotificationSettings = {
  emailPostSuccess: true,
  emailWeeklyDigest: true,
  emailViralSpikes: true,
  pushDirectPublish: false,
  slackWebhookUrl: "https://hooks.slack.com/services/T00/B00/XXXX",
  slackEnabled: true,
};

export const INITIAL_SESSIONS: SecuritySession[] = [
  {
    id: "sess-1",
    device: "MacBook Pro 16-inch",
    browser: "Chrome 128.0",
    location: "New York, USA",
    ipAddress: "192.0.2.1",
    lastActive: "Now",
    isCurrent: true,
  },
  {
    id: "sess-2",
    device: "iPhone 15 Pro",
    browser: "Safari Mobile",
    location: "New York, USA",
    ipAddress: "192.0.2.45",
    lastActive: "2 hours ago",
    isCurrent: false,
  },
];

export const INITIAL_BILLING: BillingDetails = {
  currentPlan: "Pro",
  priceMonthly: 49,
  billingCycle: "monthly",
  nextInvoiceDate: "September 28, 2026",
  cardLast4: "4242",
  cardBrand: "Visa",
  cardExpiry: "08/29",
  usageCredits: {
    used: 1420,
    total: 5000,
  },
  invoices: [
    {
      id: "inv-2026-08",
      date: "Aug 28, 2026",
      amount: "$49.00",
      status: "Paid",
      pdfUrl: "#",
    },
    {
      id: "inv-2026-07",
      date: "Jul 28, 2026",
      amount: "$49.00",
      status: "Paid",
      pdfUrl: "#",
    },
    {
      id: "inv-2026-06",
      date: "Jun 28, 2026",
      amount: "$49.00",
      status: "Paid",
      pdfUrl: "#",
    },
  ],
};
