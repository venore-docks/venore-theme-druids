import type { ThemeShellProps } from "@venore/theme-sdk";
import { ContentSlot } from "./ContentSlot";
import { FooterSlot } from "./FooterSlot";
import { HeaderSlot } from "./HeaderSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// Arranjo deliberadamente diferente do Venore Slime (docs/themes/shell-contract.md — Abordagem A).
// No Slime, Header cobre a largura inteira no topo, acima de Sidebar+Content lado a lado. Aqui o
// rail de ícones ocupa a altura inteira da viewport ao lado de TUDO — inclusive do Header, que é
// uma faixa restrita à coluna de conteúdo.
//
// Premium/"bosque vivo" (correção desta sessão — "shell continua muito feia"): a textura orgânica
// de folhagem (--app-background) mora no wrapper externo, e a coluna de conteúdo é uma "clareira"
// de bg-card que flutua sobre ela, separada do rail por uma borda de madeira. O Header fica flush
// no topo dessa clareira e mantém o `sticky` (nada de overflow-hidden no caminho, que quebraria o
// sticky).
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-full flex-1 bg-(image:--app-background)">
      <SidebarLeftSlot {...sidebarLeft} />
      <div className="flex min-w-0 flex-1 flex-col border-border bg-card lg:border-l-2 lg:border-(--header-border-strong)">
        <HeaderSlot {...header} />
        <ContentSlot
          sidebarContextualEnabled={sidebarContextualEnabled}
          sidebarContextual={sidebarContextual}
          breadcrumbs={breadcrumbs}
          breadcrumbsJsonLd={breadcrumbsJsonLd}
        >
          {children}
        </ContentSlot>
        <FooterSlot {...footer} />
      </div>
    </div>
  );
}
