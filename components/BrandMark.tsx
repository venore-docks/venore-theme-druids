// Marca do tema Druids (vocação de Tibia) — símbolo em currentColor, nome de brand.name.
export function BrandMark({ name }: { name: string }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 text-foreground">
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true" className="size-7 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 28C10 22 5 18 5 11c0-4 3-7 7-7 2 0 3.5 1 4 2 .5-1 2-2 4-2 4 0 7 3 7 7 0 7-5 11-11 17z"/>
  <path d="M16 12v12"/>
      </svg>
      <span className="min-w-0 truncate font-[600] tracking-[0.02em]">{name}</span>
    </span>
  );
}
