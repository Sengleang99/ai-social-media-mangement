export type SocialPlatform = 
  | "instagram"
  | "facebook"
  | "tiktok"
  | "x"
  | "youtube";

export interface ConnectedAccount {
  id: string;
  platform: SocialPlatform;
  name: string;
  handle: string;
  avatarUrl?: string;
  connected: boolean;
  followers?: string;
}

export type BrandVoice = 
  | "professional"
  | "casual"
  | "bold"
  | "educational"
  | "inspiring"
  | "humorous";

export type IndustryNiche = 
  | "tech_saas"
  | "creator_influencer"
  | "ecommerce"
  | "agency"
  | "finance_crypto"
  | "lifestyle_fitness"
  | "education";

export type PostingGoal = 
  | "grow_audience"
  | "drive_sales"
  | "thought_leadership"
  | "save_time"
  | "brand_awareness";

export interface OnboardingState {
  // Step 1: Brand Info
  brandName: string;
  websiteUrl: string;
  niche: IndustryNiche;
  brandVoice: BrandVoice;
  description: string;
  
  // Step 2: Social Channels (Instagram, Facebook, TikTok, X, YouTube)
  accounts: Record<SocialPlatform, boolean>;
  
  // Step 3: AI Preferences
  goals: PostingGoal[];
  postingFrequency: "low" | "medium" | "high";
  aiAutoSchedule: boolean;
  hashtagsAutoAdd: boolean;
  
  // Step 4: First AI Content Sample
  sampleTopic: string;
}
