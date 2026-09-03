import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

export const DRUIDS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.45 0.11 155)",
      primaryForeground: "oklch(0.97 0.02 150)",
      accent: "oklch(0.75 0.13 195)",
      accentForeground: "oklch(0.2 0.04 200)",
      ring: "oklch(0.65 0.13 190)",
    },
    dark: {
      primary: "oklch(0.78 0.15 155)",
      primaryForeground: "oklch(0.16 0.03 160)",
      accent: "oklch(0.8 0.14 195)",
      accentForeground: "oklch(0.15 0.04 200)",
      ring: "oklch(0.8 0.14 195)",
    },
  },
  THEME_HUE_PRESETS,
);
