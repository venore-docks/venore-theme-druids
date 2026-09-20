import type { ThemeManifest } from "@venore/theme-sdk";

export const druidsManifest: ThemeManifest = {
  key: "druids",
  name: "Druids",
  version: "2.0.0",
  themeContractVersion: "7.0.0",
  // A marca usa o logo real do site (brand.logoUrl de contexts/settings), via PlatformBrand. Cor
  // aproxima o musgo de --primary no modo claro (referência visual do tema).
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 84, position: "left", color: "oklch(0.52 0.13 152)" },
  colorModes: ["light", "dark"],
};
