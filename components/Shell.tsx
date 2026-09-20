import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// "Grove" — a sidebar vira uma cápsula flutuante, centralizada verticalmente na viewport (sticky
// + translate, ver SidebarLeftSlot.tsx), não mais uma coluna de altura inteira esticada pelo
// `flex` do Shell — nenhum outro tema faz isso. Header full-width no topo como qualquer outro; o
// conteúdo continua edge-to-edge (o vão em volta da cápsula é margem da própria sidebar, não
// padding do Shell — não queria mudar a moldura do conteúdo, só a da navegação).
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
    <div className="flex min-h-dvh flex-col">
      <HeaderSlot {...header} />
      <div className="flex flex-1">
        <SidebarLeftSlot {...sidebarLeft} />
        <div className="flex min-w-0 flex-1 flex-col">
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
    </div>
  );
}
