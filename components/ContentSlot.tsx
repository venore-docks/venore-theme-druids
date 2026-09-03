import type { ContentSlotProps } from "@venore/theme-sdk";
import { Breadcrumbs } from "./Breadcrumbs";

// A coluna de conteúdo já é a "clareira" de bg-card montada pelo Shell — aqui não se pinta fundo
// nenhum (era `bg-(image:--app-background)`, que agora mora no wrapper externo do Shell). Uma
// nervura de dossel (hairline em degradê) fecha o topo da área de leitura; ritmo vertical
// generoso, no espírito calmo do tema.
export function ContentSlot({ children, sidebarContextualEnabled, sidebarContextual, breadcrumbs, breadcrumbsJsonLd }: ContentSlotProps) {
  const showAside = sidebarContextualEnabled && sidebarContextual != null;

  return (
    <div data-sidebar-contextual={showAside} className="min-w-0 flex-1">
      <Breadcrumbs breadcrumbs={breadcrumbs} breadcrumbsJsonLd={breadcrumbsJsonLd} />
      <div aria-hidden="true" className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-primary/30" />
      <div className={`mx-auto flex w-full gap-10 px-6 py-10 sm:px-10 lg:py-14 ${showAside ? "max-w-7xl flex-col lg:flex-row" : "max-w-6xl"}`}>
        <main className="min-w-0 flex-1 text-foreground">{children}</main>
        {showAside && (
          <aside className="w-full shrink-0 border-border pt-6 text-foreground lg:w-72 lg:border-l lg:pt-0 lg:pl-8">
            {sidebarContextual}
          </aside>
        )}
      </div>
    </div>
  );
}
