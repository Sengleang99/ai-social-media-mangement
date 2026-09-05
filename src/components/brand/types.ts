export type VoiceArchetype =
  "warm_storyteller" | "high_energy" | "educational_expert" | "luxury_minimal" | "playful_witty";

export interface BrandColor {
  id: string;
  name: string;
  hex: string;
  type: "primary" | "secondary" | "accent" | "dark" | "light";
}

export interface BrandFont {
  role: "heading" | "body" | "accent";
  fontFamily: string;
  weights: string[];
  previewText: string;
}

export interface BrandAsset {
  id: string;
  title: string;
  type: "logo_primary" | "logo_monochrome" | "avatar" | "watermark";
  imageUrl: string;
  format: string;
  dimensions: string;
}

export interface BrandVoiceDNA {
  archetype: VoiceArchetype;
  formality: number; // 0 (casual) - 100 (formal)
  emojiDensity: number; // 0 (none) - 100 (high)
  humorLevel: number; // 0 (serious) - 100 (playful)
  depthLevel: number; // 0 (punchy) - 100 (in-depth craft)
  goldenKeywords: string[];
  blacklistedWords: string[];
  defaultHashtags: string[];
}

export const INITIAL_BRAND_COLORS: BrandColor[] = [
  { id: "col-1", name: "Artisan Forest Emerald", hex: "#059669", type: "primary" },
  { id: "col-2", name: "Deep Stone Teal", hex: "#0D9488", type: "secondary" },
  { id: "col-3", name: "Golden Honey Crust", hex: "#F59E0B", type: "accent" },
  { id: "col-4", name: "Oven Charcoal", hex: "#18181B", type: "dark" },
  { id: "col-5", name: "Warm Flour Cream", hex: "#FAF8F5", type: "light" },
];

export const INITIAL_BRAND_FONTS: BrandFont[] = [
  {
    role: "heading",
    fontFamily: "Outfit / Inter Display",
    weights: ["700 Bold", "800 ExtraBold"],
    previewText: "Slow-fermented artisan sourdough baked daily at 460°F",
  },
  {
    role: "body",
    fontFamily: "Inter / Plus Jakarta Sans",
    weights: ["400 Regular", "500 Medium", "600 SemiBold"],
    previewText:
      "Our heirloom grains are cold-milled to preserve active sourdough cultures and aromatic nutty crust notes.",
  },
];

export const INITIAL_BRAND_ASSETS: BrandAsset[] = [
  {
    id: "ast-1",
    title: "Primary Brand Logo (Light / Green)",
    type: "logo_primary",
    imageUrl:
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&auto=format&fit=crop&q=80",
    format: "SVG / Vector",
    dimensions: "1200 x 400 px",
  },
  {
    id: "ast-2",
    title: "Circular Social Avatar Profile",
    type: "avatar",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80",
    format: "PNG (Transparent)",
    dimensions: "512 x 512 px",
  },
  {
    id: "ast-3",
    title: "Reel Video Corner Watermark Stamp",
    type: "watermark",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
    format: "PNG (Alpha Stamp)",
    dimensions: "300 x 300 px",
  },
];

export const INITIAL_VOICE_DNA: BrandVoiceDNA = {
  archetype: "warm_storyteller",
  formality: 25,
  emojiDensity: 65,
  humorLevel: 45,
  depthLevel: 80,
  goldenKeywords: [
    "36-hour slow fermentation",
    "artisan stone deck oven",
    "heirloom grain crunch",
    "flaky morning brioche",
    "community bakery",
  ],
  blacklistedWords: [
    "cheap bread",
    "commercial yeast",
    "mass-produced",
    "instant bake",
    "discount junk",
  ],
  defaultHashtags: ["#ArtisanBakery", "#SourdoughLove", "#SpecialtyCoffee", "#NeighborhoodBakes"],
};
