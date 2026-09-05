import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";
import { buildSocialPrompt, type BuildSocialPromptParams } from "./promts";

export const AlternativeHookSchema = z.object({
  text: z.string().describe("Alternative hook variation angle"),
  score: z.number().min(0).max(100).describe("Estimated CTR score between 80 and 99"),
});

export const PostVariantSchema = z.object({
  hook: z.string().describe("The attention-grabbing opening hook line"),
  body: z
    .string()
    .describe(
      "The core body content formatted with clean line breaks, bullet points if appropriate, and platform-native tone",
    ),
  hashtags: z.array(z.string()).describe("List of hashtags, each starting with #"),
  hookScore: z
    .number()
    .min(0)
    .max(100)
    .describe("Calculated virality / CTR engagement score out of 100"),
  alternativeHooks: z
    .array(AlternativeHookSchema)
    .describe("3 alternative opening hook variations"),
  peakTime: z
    .string()
    .describe(
      "Recommended peak publishing time with context, e.g. 'Today at 4:45 PM (Peak commute browsing)'",
    ),
});

export type PostVariantData = z.infer<typeof PostVariantSchema>;
export type SocialPostsResult = Record<string, PostVariantData>;

export const SocialPostsMapSchema = z
  .object({
    instagram: PostVariantSchema.optional().describe("Generated post variant for Instagram"),
    x: PostVariantSchema.optional().describe("Generated post variant for X / Twitter"),
    tiktok: PostVariantSchema.optional().describe("Generated post variant for TikTok"),
    facebook: PostVariantSchema.optional().describe("Generated post variant for Facebook"),
    linkedin: PostVariantSchema.optional().describe("Generated post variant for LinkedIn"),
  })
  .catchall(PostVariantSchema);

/**
 * Resolves the active AI model provider based on configured environment variables.
 * Defaults to Google Gemini, with fallback to OpenAI.
 */
function getModelProvider() {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (geminiKey) {
    const google = createGoogleGenerativeAI({
      apiKey: geminiKey,
    });
    // Use gemini-2.5-flash or configured GEMINI_MODEL
    const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    return google(modelName);
  }

  const openAiKey = process.env.OPENAI_API_KEY;
  if (openAiKey) {
    const openai = createOpenAI({
      apiKey: openAiKey,
    });
    return openai("gpt-4o-mini");
  }

  return null;
}

/**
 * Fallback generator used if no API keys are configured yet.
 * Prevents the application from crashing and provides realistic feedback.
 */
function generateFallbackPosts(params: BuildSocialPromptParams): SocialPostsResult {
  const { topicPrompt, channels } = params;
  const activeChannels =
    channels && channels.length > 0
      ? channels
      : ["instagram", "x", "tiktok", "facebook", "linkedin"];

  const result: SocialPostsResult = {};

  const cleanTopic = topicPrompt.trim() || "Promote special weekend offers";

  activeChannels.forEach((ch) => {
    switch (ch) {
      case "x":
        result.x = {
          hook: `Here is the unspoken truth about ${cleanTopic.slice(0, 60)}:`,
          body: `1/ Most people overcomplicate it\n2/ Consistency beats intensity every time\n3/ The real edge is focus and craftsmanship\n\nWhat is your biggest takeaway? 👇`,
          hashtags: ["#strategy", "#growth", "#mindset"],
          hookScore: 95,
          alternativeHooks: [
            { text: `The 3-step framework we used for ${cleanTopic.slice(0, 40)}:`, score: 93 },
            { text: `Stop doing this common mistake with ${cleanTopic.slice(0, 40)}:`, score: 91 },
            { text: `Why 95% of people fail at ${cleanTopic.slice(0, 40)}:`, score: 88 },
          ],
          peakTime: "Today at 12:15 PM (Lunch hour peak)",
        };
        break;

      case "tiktok":
        result.tiktok = {
          hook: `Wait till the end if you want to know how we did this... 👀✨`,
          body: `POV: You discover ${cleanTopic} and your daily routine completely changes! 🔥\n\nDrop a comment if you want part 2! 👇`,
          hashtags: ["#fyp", "#viral", "#transformation", "#trending"],
          hookScore: 98,
          alternativeHooks: [
            { text: `Tell me you love this without telling me... 🤯`, score: 96 },
            { text: `The secret hack no one is talking about 👇`, score: 94 },
            { text: `Rating this from 1 to 10 🔥`, score: 90 },
          ],
          peakTime: "Tonight at 7:30 PM (Evening scroll peak)",
        };
        break;

      case "facebook":
        result.facebook = {
          hook: `🌟 Exciting Announcement for our community!`,
          body: `Hello friends! We are thrilled to share something special with you: ${cleanTopic}.\n\nEverything is prepared with great care and attention to detail. Stop by or click the link in our bio to learn more!\n\nWe would love to hear your thoughts in the comments below. ❤️`,
          hashtags: ["#CommunityFirst", "#LocalFavorites", "#SpecialOffer"],
          hookScore: 92,
          alternativeHooks: [
            { text: `Who has been waiting for this? 🙋‍♀️✨`, score: 91 },
            { text: `A little behind-the-scenes look at what we've been working on!`, score: 89 },
            { text: `We have something wonderful in store for you this week:`, score: 86 },
          ],
          peakTime: "Tomorrow at 8:00 AM (Morning feed)",
        };
        break;

      case "linkedin":
        result.linkedin = {
          hook: `How focusing on ${cleanTopic.slice(0, 50)} created a 3x impact on engagement.`,
          body: `In today's fast-moving market, signal always beats noise.\n\nHere are 3 principles we applied:\n\n• Principle 1: Clarity over volume\n• Principle 2: Respect your audience's time\n• Principle 3: Deliver actionable insights\n\nHow is your team approaching this in 2026?`,
          hashtags: ["#Leadership", "#Innovation", "#GrowthMindset", "#Strategy"],
          hookScore: 94,
          alternativeHooks: [
            { text: `The biggest lesson I learned from ${cleanTopic.slice(0, 45)}:`, score: 93 },
            { text: `Why traditional playbooks no longer work in 2026:`, score: 90 },
            { text: `3 non-obvious observations on scaling content quality:`, score: 89 },
          ],
          peakTime: "Today at 9:00 AM (Workday kickoff)",
        };
        break;

      case "instagram":
      default:
        result.instagram = {
          hook: `The secret behind ${cleanTopic.slice(0, 55)} isn't what you think... ✨`,
          body: `Here is the breakdown of how it actually works:\n\n1. Built with intention & quality ingredients\n2. Tested for maximum impact & satisfaction\n3. Crafted to give you the best experience\n\nDouble tap if this resonates, and save this post for later! ❤️🔖`,
          hashtags: ["#DailyInspiration", "#QualityFirst", "#CreatorVibes", "#BehindTheScenes"],
          hookScore: 97,
          alternativeHooks: [
            { text: `Save this before you plan your next move 👇🔖`, score: 95 },
            { text: `What no one told you about ${cleanTopic.slice(0, 40)}:`, score: 93 },
            { text: `A quick 30-second guide to getting this right ✨`, score: 90 },
          ],
          peakTime: "Today at 4:45 PM (Commute browsing peak)",
        };
        break;
    }
  });

  return result;
}

/**
 * Main generator function that calls LLM using Vercel AI SDK
 * and returns validated multi-platform social post variants.
 */
export async function generateSocialPosts(params: BuildSocialPromptParams): Promise<{
  posts: SocialPostsResult;
  isMock: boolean;
  provider: string;
}> {
  const model = getModelProvider();

  if (!model) {
    console.warn(
      "[AI Generator] Neither GEMINI_API_KEY nor OPENAI_API_KEY is defined in environment variables. Falling back to structured generator.",
    );
    return {
      posts: generateFallbackPosts(params),
      isMock: true,
      provider: "mock-fallback",
    };
  }

  const { systemPrompt, userPrompt } = buildSocialPrompt(params);

  try {
    const { object } = await generateObject({
      model,
      system: systemPrompt,
      prompt: userPrompt,
      schema: SocialPostsMapSchema,
      temperature: 0.7,
    });

    return {
      posts: object,
      isMock: false,
      provider: process.env.GEMINI_API_KEY ? "gemini" : "openai",
    };
  } catch (error) {
    console.error("[AI Generator] Error calling LLM generateObject:", error);
    // Fallback if LLM request fails (e.g. invalid key or network timeout)
    return {
      posts: generateFallbackPosts(params),
      isMock: true,
      provider: "error-fallback",
    };
  }
}
