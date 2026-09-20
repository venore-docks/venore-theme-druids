import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o musgo do bloco base de theme.css — presets alternativos que o
// admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
export const DRUIDS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.52 0.13 152)",
      primaryForeground: "oklch(0.98 0.01 152)",
      accent: "oklch(0.85 0.06 140)",
      accentForeground: "oklch(0.26 0.04 140)",
      ring: "oklch(0.52 0.11 152)",
    },
    dark: {
      primary: "oklch(0.66 0.11 152)",
      primaryForeground: "oklch(0.15 0.02 152)",
      accent: "oklch(0.34 0.05 145)",
      accentForeground: "oklch(0.92 0.02 140)",
      ring: "oklch(0.62 0.1 152)",
    },
  },
  THEME_HUE_PRESETS,
);
