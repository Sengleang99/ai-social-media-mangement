import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { generateSocialPosts } from "@/lib/supabase/ai/generate";
import type { BrandSettingsContext } from "@/lib/supabase/ai/promts";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, tone, channels, clicheFilter, hookOptimizer, autoHashtags } = body;

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json({ error: "A non-empty prompt is required." }, { status: 400 });
    }

    // Try to get authenticated user and brand settings from Supabase
    let brandSettings: BrandSettingsContext | null = null;
    let userId: string | null = null;
    let businessId: string | null = null;

    try {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        userId = user.id;

        // Fetch user's active business
        const { data: business } = await supabase
          .from("business")
          .select("id, name, business_type")
          .eq("owner_id", user.id)
          .limit(1)
          .maybeSingle();

        if (business) {
          businessId = business.id;

          // Fetch brand settings
          const { data: brand } = await supabase
            .from("brand_settings")
            .select(
              "primary_language, secondary_language, tone, target_audience, brand_description, brand_keywords, avoid_words",
            )
            .eq("business_id", business.id)
            .maybeSingle();

          brandSettings = {
            business_name: business.name,
            business_type: business.business_type,
            primary_language: brand?.primary_language,
            secondary_language: brand?.secondary_language,
            tone: brand?.tone,
            target_audience: brand?.target_audience,
            brand_description: brand?.brand_description,
            brand_keywords: brand?.brand_keywords,
            avoid_words: brand?.avoid_words,
          };
        }
      }
    } catch (supabaseErr) {
      console.warn("[API/AI/Generate] Supabase session retrieval skipped or failed:", supabaseErr);
    }

    // Generate social posts using the AI engine
    const { posts, isMock, provider } = await generateSocialPosts({
      topicPrompt: prompt,
      tone: tone || brandSettings?.tone || "viral",
      channels: Array.isArray(channels) && channels.length > 0 ? channels : ["instagram"],
      brandSettings,
      options: {
        clicheFilter: !!clicheFilter,
        hookOptimizer: !!hookOptimizer,
        autoHashtags: !!autoHashtags,
      },
    });

    // Optionally log to content_generations in the background if user/business is present
    if (userId && businessId) {
      try {
        const supabase = await createClient();
        const entries = Object.entries(posts).map(([platform, post]) => ({
          business_id: businessId,
          created_by: userId,
          topic: prompt,
          content_type: "post",
          platform,
          language: brandSettings?.primary_language || "English",
          caption: `${post.hook}\n\n${post.body}`,
          hashtags: post.hashtags,
          status: "draft",
        }));

        await supabase.from("content_generations").insert(entries);
      } catch (logErr) {
        // Non-blocking log failure
        console.warn("[API/AI/Generate] Logging to content_generations skipped:", logErr);
      }
    }

    return NextResponse.json({
      success: true,
      posts,
      meta: {
        isMock,
        provider,
        channels: Object.keys(posts),
      },
    });
  } catch (error) {
    console.error("[API/AI/Generate] Uncaught error:", error);
    const message = error instanceof Error ? error.message : "Failed to generate content";
    return NextResponse.json(
      {
        error: message,
        success: false,
      },
      { status: 500 },
    );
  }
}
