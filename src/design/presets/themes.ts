import type { Theme, ThemeTokens } from "../types"
import { cn } from "../cn"

const shared = {
  input:
    "w-full border border-primary/20 bg-surface px-4 py-3 font-sans text-sm text-primary placeholder:text-muted/60 outline-none focus:border-accent/60 focus:shadow-[0_0_20px_rgb(var(--accent)/0.15)]",
  navLink:
    "nav-link px-3 py-2 font-sans text-xs uppercase tracking-widest text-muted hover:text-primary",
  linkPrimary:
    "font-sans text-xs uppercase tracking-widest text-primary hover:translate-x-1",
  linkAccent:
    "font-sans text-xs uppercase tracking-widest text-accent hover:translate-x-1",
  iconBox:
    "icon-hover flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/5 text-primary",
}

export function getThemeTokens(theme: Theme): ThemeTokens {
  const presets: Record<Theme, ThemeTokens> = {
    minimalist: {
      panel:
        "rounded-2xl border border-primary/15 bg-panel/80 shadow-sm hover:border-primary/30 hover:shadow-md hover:-translate-y-1",
      panelInner: "rounded-xl border border-primary/10 bg-surface p-6",
      btnPrimary:
        "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-sans text-sm font-semibold text-surface hover:opacity-90",
      btnGhost:
        "inline-flex items-center justify-center gap-2 rounded-xl border border-accent/40 px-6 py-3 font-sans text-sm font-semibold text-accent hover:bg-accent/10",
      tag: "rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-sans text-xs text-primary",
      input: shared.input,
      nav: "fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-surface/90 backdrop-blur-md",
      navLink: "px-3 py-2 font-sans text-sm text-muted hover:text-primary",
      badge:
        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-sans text-xs text-primary",
      iconBox: "flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary",
      headingPrefix: "text-primary",
      sectionDivider: "mt-3 h-px w-24 bg-gradient-to-r from-primary to-accent",
      linkPrimary: "text-sm font-medium text-primary hover:underline",
      linkAccent: "text-sm font-medium text-accent hover:underline",
      photoFrame: "rounded-2xl overflow-hidden border border-primary/20",
      photoGlow: "rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20",
      marquee: "border-y border-primary/10 bg-panel/40 py-5",
      rootFx: "",
    },
    futuristic: {
      panel: cn(
        "panel-fx relative border border-primary/30 bg-panel/90",
        "shadow-[inset_0_0_30px_rgb(var(--primary)/0.03),0_0_20px_rgb(var(--primary)/0.08)]",
        "hover:border-accent/50 hover:-translate-y-1.5",
        "hover:shadow-[inset_0_0_30px_rgb(var(--accent)/0.05),0_0_35px_rgb(var(--accent)/0.2)]",
      ),
      panelInner: "border border-accent/20 bg-surface p-5",
      btnPrimary:
        "cyber-btn inline-flex items-center justify-center gap-2 border border-primary bg-primary/10 px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-primary",
      btnGhost:
        "cyber-btn-ghost inline-flex items-center justify-center gap-2 border border-accent/50 px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-accent",
      tag: "border border-primary/20 bg-primary/5 px-2 py-0.5 font-sans text-xs text-primary hover:border-accent/40 hover:text-accent",
      input: cn(shared.input, "cyber-input"),
      nav: "fixed inset-x-0 top-0 z-50 border-b border-primary/20 bg-surface/90 backdrop-blur-sm",
      navLink: shared.navLink,
      badge:
        "inline-flex items-center gap-3 border border-highlight/30 bg-highlight/5 px-4 py-2 font-sans text-xs uppercase tracking-widest text-highlight",
      iconBox: cn(shared.iconBox, "border-primary/30 bg-primary/5"),
      headingPrefix: "text-primary",
      sectionDivider:
        "mt-3 h-px w-24 bg-gradient-to-r from-primary to-accent transition-all duration-700 hover:w-40",
      linkPrimary: cn(shared.linkPrimary, "hover:drop-shadow-[0_0_8px_rgb(var(--primary)/0.8)]"),
      linkAccent: cn(shared.linkAccent, "hover:drop-shadow-[0_0_8px_rgb(var(--accent)/0.8)]"),
      photoFrame: "aspect-square overflow-hidden border border-primary/30 bg-surface",
      photoGlow:
        "absolute -inset-1 bg-gradient-to-r from-primary via-accent to-highlight opacity-40 blur-sm group-hover:opacity-70",
      marquee: "border-y border-primary/10 bg-surface/60 py-5",
      rootFx: "scanlines crt-vignette",
    },
    academic: {
      panel:
        "rounded-sm border border-primary/25 bg-panel/95 shadow-none hover:border-primary/40",
      panelInner: "border-l-4 border-primary bg-surface p-6",
      btnPrimary:
        "inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 font-sans text-sm font-semibold text-surface",
      btnGhost:
        "inline-flex items-center justify-center gap-2 rounded-sm border-2 border-primary px-6 py-3 font-sans text-sm font-semibold text-primary",
      tag: "rounded-sm border border-primary/30 bg-surface px-2 py-0.5 font-sans text-xs text-primary",
      input: shared.input,
      nav: "fixed inset-x-0 top-0 z-50 border-b-2 border-primary/20 bg-surface/95",
      navLink: "px-3 py-2 font-sans text-sm text-muted hover:text-primary border-b-2 border-transparent hover:border-primary",
      badge:
        "inline-flex items-center gap-2 border border-primary/30 px-4 py-2 font-sans text-xs text-primary",
      iconBox: "flex h-9 w-9 items-center justify-center border-2 border-primary/30 text-primary",
      headingPrefix: "text-accent",
      sectionDivider: "mt-3 h-0.5 w-full max-w-xs bg-primary",
      linkPrimary: "text-sm text-primary underline-offset-4 hover:underline",
      linkAccent: "text-sm text-accent underline-offset-4 hover:underline",
      photoFrame: "rounded-sm overflow-hidden border-2 border-primary/30",
      photoGlow: "rounded-sm ring-2 ring-primary/20",
      marquee: "border-y-2 border-primary/15 bg-panel/30 py-4",
      rootFx: "",
    },
    corporate: {
      panel:
        "rounded-lg border border-primary/10 bg-panel shadow-sm hover:shadow-md hover:border-primary/25",
      panelInner: "rounded-lg border border-primary/10 bg-surface p-6",
      btnPrimary:
        "inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-sans text-sm font-semibold text-heading hover:bg-accent/90",
      btnGhost:
        "inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 px-6 py-3 font-sans text-sm font-semibold text-primary",
      tag: "rounded-full border border-primary/15 bg-primary/5 px-3 py-1 font-sans text-xs text-muted",
      input: shared.input,
      nav: "fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-surface/95 backdrop-blur-sm shadow-sm",
      navLink: "px-4 py-2 font-sans text-sm text-muted hover:text-accent",
      badge:
        "inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 font-sans text-xs font-medium text-accent",
      iconBox: "flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent",
      headingPrefix: "text-accent",
      sectionDivider: "mt-3 h-px w-16 bg-accent",
      linkPrimary: "text-sm font-medium text-accent hover:text-primary",
      linkAccent: "text-sm font-medium text-primary hover:text-accent",
      photoFrame: "rounded-lg overflow-hidden border border-primary/15 shadow-sm",
      photoGlow: "rounded-lg ring-1 ring-primary/10",
      marquee: "border-y border-primary/10 bg-panel/50 py-4",
      rootFx: "",
    },
    creative: {
      panel:
        "rounded-3xl border-2 border-primary/30 bg-panel/80 -rotate-1 hover:rotate-0 hover:scale-[1.02] hover:border-accent/50",
      panelInner: "rounded-2xl border-2 border-dashed border-accent/30 bg-surface p-6",
      btnPrimary:
        "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 font-display text-sm font-bold text-surface shadow-lg",
      btnGhost:
        "inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent px-7 py-3 font-display text-sm font-bold text-accent",
      tag: "rounded-full border-2 border-primary/30 bg-primary/10 px-3 py-1 font-sans text-xs font-bold text-primary",
      input: cn(shared.input, "rounded-2xl"),
      nav: "fixed inset-x-0 top-0 z-50 border-b-2 border-accent/30 bg-surface/80 backdrop-blur-lg",
      navLink: "px-3 py-2 font-display text-xs font-bold uppercase text-muted hover:text-accent",
      badge:
        "inline-flex items-center gap-2 rounded-full border-2 border-highlight bg-highlight/10 px-4 py-2 font-display text-xs font-bold text-highlight",
      iconBox: "flex h-10 w-10 rotate-3 items-center justify-center rounded-xl border-2 border-accent bg-accent/10 text-accent hover:rotate-0",
      headingPrefix: "text-accent",
      sectionDivider: "mt-3 h-1 w-32 rounded-full bg-gradient-to-r from-primary via-accent to-highlight",
      linkPrimary: cn(shared.linkPrimary, "font-bold"),
      linkAccent: cn(shared.linkAccent, "font-bold"),
      photoFrame: "rounded-3xl overflow-hidden border-2 border-accent rotate-2 group-hover:rotate-0",
      photoGlow: "absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary via-accent to-highlight opacity-50 blur-lg",
      marquee: "border-y-2 border-accent/20 bg-gradient-to-r from-panel via-surface to-panel py-6",
      rootFx: "",
    },
  }

  return presets[theme]
}

export function getThemeFx(theme: Theme) {
  return {
    scanlines: theme === "futuristic",
    vignette: theme === "futuristic",
    glitch: theme === "futuristic",
    gridFloor: theme === "futuristic",
    photoScan: theme === "futuristic",
    uppercaseLabels: theme === "futuristic",
  }
}
