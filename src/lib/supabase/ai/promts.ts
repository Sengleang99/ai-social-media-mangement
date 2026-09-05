export interface BrandSettingsContext {
  business_name?: string | null;
  business_type?: string | null;
  primary_language?: string | null;
  secondary_language?: string | null;
  tone?: string | null;
  target_audience?: string | null;
  brand_description?: string | null;
  brand_keywords?: string[] | null;
  avoid_words?: string[] | null;
}

export interface SocialPromptOptions {
  clicheFilter?: boolean;
  hookOptimizer?: boolean;
  autoHashtags?: boolean;
}

export interface BuildSocialPromptParams {
  topicPrompt: string;
  tone?: string;
  channels: string[];
  brandSettings?: BrandSettingsContext | null;
  options?: SocialPromptOptions;
}

/**
 * Builds a structured system and user prompt for generating platform-native social media content.
 */
export function buildSocialPrompt(params: BuildSocialPromptParams): {
  systemPrompt: string;
  userPrompt: string;
} {
  const { topicPrompt, tone = "viral", channels, brandSettings, options } = params;

  const activeChannels =
    channels && channels.length > 0
      ? channels
      : ["instagram", "x", "tiktok", "facebook", "linkedin"];

  // Tone descriptions
  const toneMap: Record<string, string> = {
    viral:
      "High click-through rate (CTR), compelling curiosity gaps, bold hooks, and pattern-interrupting phrasing.",
    story:
      "Relatable, authentic human storytelling, emotional resonance, narrative arc, and vulnerable insights.",
    business: "Friendly local business vibe, welcoming, warm, dependable, community-first.",
    contrarian:
      "Challenging conventional industry wisdom, thought-provoking perspectives, and myth-busting arguments.",
    educational:
      "Clear step-by-step actionable advice, bullet points, tactical takeaways, and high signal-to-noise ratio.",
  };

  const selectedToneDesc = toneMap[tone] || toneMap.viral;

  // Compile brand context
  const brandLines: string[] = [];
  if (brandSettings?.business_name) {
    brandLines.push(`- Business Name: ${brandSettings.business_name}`);
  }
  if (brandSettings?.business_type) {
    brandLines.push(`- Industry / Niche: ${brandSettings.business_type}`);
  }
  if (brandSettings?.brand_description) {
    brandLines.push(`- Brand Bio: ${brandSettings.brand_description}`);
  }
  if (brandSettings?.target_audience) {
    brandLines.push(`- Target Audience: ${brandSettings.target_audience}`);
  }
  if (brandSettings?.brand_keywords && brandSettings.brand_keywords.length > 0) {
    brandLines.push(
      `- Key Brand Terminology & Benefits: ${brandSettings.brand_keywords.join(", ")}`,
    );
  }
  if (brandSettings?.avoid_words && brandSettings.avoid_words.length > 0) {
    brandLines.push(
      `- STRICTLY AVOID THESE WORDS/COMPETITORS: ${brandSettings.avoid_words.join(", ")}`,
    );
  }
  if (brandSettings?.primary_language) {
    brandLines.push(`- Primary Output Language: ${brandSettings.primary_language}`);
  }

  const brandBlock =
    brandLines.length > 0 ? `\n### Brand Identity & Guidelines:\n${brandLines.join("\n")}` : "";

  // Compile AI flags
  const flagInstructions: string[] = [];
  if (options?.clicheFilter) {
    flagInstructions.push(
      "- Cliche Filter ACTIVE: Absolutely avoid generic marketing fluff (e.g. 'In today's fast-paced world', 'Game changer', 'Unleash your potential', 'Level up', 'Look no further'). Make it sound like a top-tier authentic creator.",
    );
  }
  if (options?.hookOptimizer) {
    flagInstructions.push(
      "- Hook Optimizer ACTIVE: Provide 3 diverse, high-converting alternative hooks with an estimated CTR score between 85 and 99. The main hook must also have a score.",
    );
  }
  if (options?.autoHashtags) {
    flagInstructions.push(
      "- Auto-Hashtags ACTIVE: Generate 3 to 6 platform-relevant, high-intent hashtags with the '#' symbol.",
    );
  } else {
    flagInstructions.push("- Auto-Hashtags DISABLED: Keep hashtags empty or minimal.");
  }

  const systemPrompt = `You are an elite, world-class Social Media Strategist and viral copywriter.
Your task is to take a core idea or prompt and transform it into native, high-engagement content for each requested social media platform: ${activeChannels.join(", ")}.

### Tone of Voice:
${selectedToneDesc}
${brandBlock}

### Platform-Specific Formatting Directives:
- **Instagram**: Captivating first line (hook), clean whitespace paragraphs, emojis used tastefully for structure, strong call to action, and 3-6 targeted hashtags.
- **X (formerly Twitter)**: Concise, punchy insight. Thread or single tweet format (under 280 characters for the main body). High information density, conversational, and no hashtag spam (0-2 tags).
- **TikTok**: High-energy video opening hook / caption, POV or sound cue styling, short and rhythmic, encouraging comments or tagging a friend.
- **Facebook**: Warm, community-oriented, storytelling approach, conversational tone with local or relational appeal and clear link/reservation call-to-action.
- **LinkedIn**: Thought-leadership opening line, compelling one-sentence hook, clear line breaks, bulleted key takeaways, and professional yet human perspective.

### Strategy Directives:
${flagInstructions.join("\n")}
- For each platform, provide realistic peak posting times (e.g. "Today at 4:45 PM", "Tomorrow at 8:00 AM", "Tonight at 7:30 PM").
- Deliver the response strictly as valid structured objects matching the required schema.`;

  const userPrompt = `Generate native posts for the following channels: ${activeChannels.join(", ")}.

Core Topic / Campaign Idea:
"${topicPrompt}"

Ensure each platform variant is distinct, optimized for that platform's algorithm and user behavior, and follows all brand guidelines.`;

  return { systemPrompt, userPrompt };
}
