import { Sitemap } from "@venore/theme-sdk/ui";
import type { FooterSlotProps } from "@venore/theme-sdk";
import { PlatformBrand } from "./PlatformBrand";

// Rodapé organizado em duas zonas (correção desta sessão: "footer mal organizado" — a versão
// anterior amontoava ponto neon / nome / descrição / sitemap numa linha só): marca real
// (PlatformBrand, não texto) + descrição à esquerda; colunas de sitemap à direita. Borda superior
// em tom de madeira (--header-border-strong), no espírito "bosque vivo" do tema. brand.color não é
// consumido aqui — o contrato só exige aceitar o campo.
export function FooterSlot({ brand, sitemapItems, creditsEnabled }: FooterSlotProps) {
  return (
    <footer className="mt-auto border-t-2 border-(--header-border-strong) px-6 py-10 sm:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        <div className="space-y-4">
          <div className="max-w-40">
            <PlatformBrand {...brand} isScrolled={false} />
          </div>
          {brand.description.trim().length > 0 && (
            <p className="max-w-[36ch] text-sm leading-6 text-muted-foreground">{brand.description}</p>
          )}
        </div>

        {sitemapItems.length > 0 && (
          <div className="lg:justify-self-end">
            <Sitemap items={sitemapItems} />
          </div>
        )}
      </div>

      {creditsEnabled && (
        <div data-credits className="mx-auto mt-8 w-full max-w-7xl border-t border-border pt-4 text-xs text-muted-foreground">
          Venore Docks
        </div>
      )}
    </footer>
  );
}
