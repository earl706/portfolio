import type { TypographyStyle, TypographyTokens } from "../types"

export function getTypographyTokens(typography: TypographyStyle): TypographyTokens {
  const presets: Record<TypographyStyle, TypographyTokens & { displayFamily: string; bodyFamily: string }> = {
    "modern-sans": {
      displayFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
      bodyFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
      fontDisplay: "font-display",
      fontBody: "font-sans",
      heading: "font-display font-bold tracking-tight text-heading",
      label: "font-sans text-xs uppercase tracking-widest text-accent",
      body: "font-sans text-sm leading-relaxed text-muted",
      bodyMuted: "font-sans text-sm leading-relaxed text-muted/80",
    },
    technical: {
      displayFamily: '"Orbitron", ui-sans-serif, sans-serif',
      bodyFamily: '"Share Tech Mono", ui-monospace, monospace',
      fontDisplay: "font-display",
      fontBody: "font-sans",
      heading: "font-display font-bold uppercase tracking-wider text-heading",
      label: "font-sans text-xs uppercase tracking-[0.3em] text-accent",
      body: "font-sans text-sm leading-relaxed text-muted",
      bodyMuted: "font-sans text-xs leading-relaxed text-muted/80",
    },
    monospace: {
      displayFamily: '"JetBrains Mono", ui-monospace, monospace',
      bodyFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontDisplay: "font-display",
      fontBody: "font-sans",
      heading: "font-display font-bold tracking-tight text-heading",
      label: "font-sans text-xs uppercase tracking-widest text-primary",
      body: "font-sans text-sm leading-relaxed text-muted",
      bodyMuted: "font-sans text-xs leading-relaxed text-muted/70",
    },
    editorial: {
      displayFamily: '"Playfair Display", ui-serif, Georgia, serif',
      bodyFamily: '"Source Serif 4", ui-serif, Georgia, serif',
      fontDisplay: "font-display",
      fontBody: "font-sans",
      heading: "font-display font-bold tracking-tight text-heading",
      label: "font-sans text-xs uppercase tracking-[0.2em] text-accent",
      body: "font-sans text-base leading-relaxed text-muted",
      bodyMuted: "font-sans text-sm leading-relaxed text-muted/80",
    },
    elegant: {
      displayFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
      bodyFamily: '"Lato", ui-sans-serif, system-ui, sans-serif',
      fontDisplay: "font-display",
      fontBody: "font-sans",
      heading: "font-display font-semibold tracking-wide text-heading",
      label: "font-sans text-xs uppercase tracking-[0.25em] text-accent",
      body: "font-sans text-sm leading-relaxed text-muted",
      bodyMuted: "font-sans text-sm leading-relaxed text-muted/75",
    },
  }

  const { displayFamily, bodyFamily, ...tokens } = presets[typography]
  return { ...tokens, displayFamily, bodyFamily } as TypographyTokens & {
    displayFamily: string
    bodyFamily: string
  }
}
