export interface PlanTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

export interface CreditUsageItem {
  id: string;
  name: string;
  used: number;
  total: number;
  unit: string;
  color: string;
}

export interface BillingInvoice {
  id: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending" | "Refunded";
  planName: string;
  pdfUrl: string;
}

export const BILLING_PLANS: PlanTier[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 19,
    priceYearly: 15,
    description: "Essential AI content creation and scheduling for single creators.",
    features: [
      "3 Connected Social Channels",
      "1,000 AI Studio Credits / mo",
      "50 AI Image Generations",
      "Standard Content Calendar",
      "Basic Analytics & Metrics",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 49,
    priceYearly: 39,
    description: "Full AI autopilot suite for local businesses, brands, and creators.",
    badge: "Current Plan",
    isPopular: true,
    features: [
      "15 Connected Social Channels",
      "5,000 AI Studio Credits / mo",
      "200 High-Res Image Renders",
      "3-Sec Viral Hook Score Predictor",
      "Audience Peak Heatmap Scheduler",
      "1-Click AI Repurpose Studio",
      "3 Team Workspace Seats",
    ],
  },
  {
    id: "enterprise",
    name: "Agency & Enterprise",
    priceMonthly: 149,
    priceYearly: 119,
    description: "Unlimited scale and custom brand models for agencies and multi-location businesses.",
    badge: "High Growth",
    features: [
      "Unlimited Social Accounts",
      "Unlimited AI Credits",
      "1,000 4K AI Image Generations",
      "Custom Brand Voice Model Fine-Tuning",
      "Dedicated Publishing Proxy IP",
      "Unlimited Team Collaborators",
      "Priority 24/7 Dedicated Support",
    ],
  },
];

export const INITIAL_USAGE_ITEMS: CreditUsageItem[] = [
  {
    id: "credits",
    name: "AI Studio Copy & Hook Credits",
    used: 1420,
    total: 5000,
    unit: "credits",
    color: "bg-purple-500",
  },
  {
    id: "images",
    name: "AI High-Res Image Renders",
    used: 84,
    total: 200,
    unit: "images",
    color: "bg-emerald-500",
  },
  {
    id: "channels",
    name: "Active Social Publishing Profiles",
    used: 6,
    total: 15,
    unit: "channels",
    color: "bg-blue-500",
  },
  {
    id: "hooks",
    name: "Viral Hook CTR Predictions",
    used: 320,
    total: 1000,
    unit: "runs",
    color: "bg-amber-500",
  },
];

export const INITIAL_INVOICES: BillingInvoice[] = [
  {
    id: "INV-2026-0828",
    date: "Aug 28, 2026",
    amount: "$49.00",
    status: "Paid",
    planName: "Pro Plan (Monthly)",
    pdfUrl: "#",
  },
  {
    id: "INV-2026-0728",
    date: "Jul 28, 2026",
    amount: "$49.00",
    status: "Paid",
    planName: "Pro Plan (Monthly)",
    pdfUrl: "#",
  },
  {
    id: "INV-2026-0628",
    date: "Jun 28, 2026",
    amount: "$49.00",
    status: "Paid",
    planName: "Pro Plan (Monthly)",
    pdfUrl: "#",
  },
  {
    id: "INV-2026-0528",
    date: "May 28, 2026",
    amount: "$49.00",
    status: "Paid",
    planName: "Pro Plan (Monthly)",
    pdfUrl: "#",
  },
];
