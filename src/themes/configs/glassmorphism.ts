import { createTheme } from "../themeFactory"
import { lightPatches } from "../lightPatches"

const darkBundle = {
  colors: {
    bg: "#0f172a",
    panel: "rgba(255,255,255,0.08)",
    accent: "#38bdf8",
    accent2: "#a78bfa",
    highlight: "#34d399",
  },
  classes: {
    root: "min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-950 font-[Inter] text-slate-300",
    main: "relative z-10",
    section: "px-6 py-28",
    sectionAlt: "px-6 py-28",
    container: "mx-auto max-w-6xl",
    fontSans: "font-[Inter]",
    fontDisplay: "font-[Space_Grotesk]",
    textTransform: "normal-case",
    textPrimary: "text-white",
    textMuted: "text-slate-400",
    textAccent: "text-sky-300",
    textAccent2: "text-violet-300",
    textHighlight: "text-emerald-300",
    panel:
      "rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-sky-500/10",
    btnPrimary:
      "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-7 py-3.5 font-[Space_Grotesk] text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30",
    btnSecondary:
      "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-[Space_Grotesk] text-sm font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10",
    tag: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-[Inter] text-xs text-sky-200 transition-all duration-500 hover:border-violet-400/30 hover:bg-violet-500/10",
    input:
      "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-[Inter] text-sm text-white placeholder:text-slate-500 outline-none backdrop-blur-sm transition-all duration-500 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20",
    badge:
      "inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 font-[Inter] text-xs font-medium text-emerald-300 backdrop-blur-sm",
    iconWrap:
      "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-300 backdrop-blur-sm transition-all duration-500",
    iconHover: "transition-all duration-500 hover:scale-110",
    header:
      "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl transition-all duration-500",
    navLink:
      "rounded-lg px-3 py-2 font-[Inter] text-sm text-slate-400 transition-all duration-500 hover:bg-white/5 hover:text-white",
    navMobile: "block rounded-lg px-3 py-2 font-[Inter] text-sm text-sky-300 transition-all duration-500 hover:bg-white/5",
    logo: "group flex items-center gap-2 font-[Space_Grotesk] text-lg font-semibold text-white transition-all duration-500",
    logoAccent: "text-sky-300",
    logoDot: "text-violet-300",
    sectionLabel: "font-[Inter] text-xs font-semibold uppercase tracking-widest text-violet-300",
    sectionTitle: "font-[Space_Grotesk] text-3xl font-bold text-white sm:text-4xl",
    sectionTitlePrefix: "text-sky-400",
    sectionDivider: "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400",
    sectionDesc: "mt-5 max-w-2xl font-[Inter] text-base leading-relaxed text-slate-400",
    hero: "relative flex min-h-screen items-center overflow-hidden px-6 pt-24",
    heroBadge: "",
    heroBoot: "font-[Inter] text-sm text-sky-300",
    heroOperator: "block text-sm font-medium tracking-wide text-violet-300",
    heroName: "mt-2 block bg-gradient-to-r from-sky-200 via-violet-200 to-emerald-200 bg-clip-text text-transparent",
    heroSubtitle: "mt-6 max-w-lg font-[Inter] text-base leading-relaxed text-slate-400",
    heroStackPill:
      "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sky-200 backdrop-blur-sm transition-all duration-500 hover:bg-white/10",
    statPanel: "rounded-2xl",
    statValue: "font-[Space_Grotesk] text-3xl font-bold text-white",
    statLabel: "mt-1 font-[Inter] text-xs text-slate-500",
    statsBorder: "mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-10",
    photoGlow:
      "absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-500/30 via-violet-500/30 to-emerald-500/30 opacity-60 blur-xl transition-all duration-700 group-hover:opacity-100",
    photoPanel: "relative overflow-hidden rounded-2xl transition-all duration-700 group-hover:-translate-y-1",
    photoInner: "relative aspect-square overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm",
    photoCaption:
      "absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-3 font-[Inter] text-xs text-sky-200",
    photoMeta: "mt-3 flex items-center justify-between px-1 font-[Inter] text-xs text-slate-500",
    skillRow:
      "flex items-center gap-3 rounded-lg px-3 py-2 font-[Inter] text-sm text-slate-400 transition-all duration-500 hover:bg-white/5 hover:text-sky-200",
    skillCategoryTitle: "font-[Space_Grotesk] text-base font-semibold text-white",
    skillCategoryCode: "font-[Space_Grotesk] text-sm font-bold text-violet-300",
    skillDivider: "mb-5 flex items-center gap-3 border-b border-white/10 pb-4",
    projectThumb: "relative min-h-[160px] rounded-t-2xl bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-emerald-500/10",
    projectFeatured:
      "absolute left-4 top-4 rounded-full bg-violet-500/80 px-3 py-1 font-[Inter] text-xs font-medium text-white backdrop-blur-sm",
    projectMeta: "absolute bottom-3 right-4 font-[Inter] text-xs text-white/40",
    projectTitle:
      "font-[Space_Grotesk] text-lg font-semibold text-white transition-all duration-500 group-hover:text-sky-200",
    projectDesc: "mt-3 flex-1 font-[Inter] text-sm leading-relaxed text-slate-400",
    projectLinkPrimary:
      "group/link flex items-center gap-2 font-[Inter] text-sm font-medium text-sky-300 transition-all duration-500 hover:translate-x-1",
    projectLinkSecondary:
      "group/link flex items-center gap-2 font-[Inter] text-sm font-medium text-violet-300 transition-all duration-500 hover:translate-x-1",
    projectLinksBorder: "mt-5 flex gap-6 border-t border-white/10 pt-4",
    expPanel: "grid gap-6 p-8 md:grid-cols-[140px_1fr]",
    expNumber: "font-[Space_Grotesk] text-4xl font-bold text-violet-400/40",
    expPeriod: "mt-2 block font-[Inter] text-xs text-slate-500",
    expRole: "font-[Space_Grotesk] text-lg font-semibold text-white",
    expCompany: "mt-1 font-[Inter] text-sm text-sky-300",
    expBullet: "shrink-0 text-emerald-400",
    expItem: "flex gap-3 font-[Inter] text-sm leading-relaxed text-slate-400",
    expSidebar: "border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6",
    contactLabel: "mb-2 block font-[Inter] text-sm font-medium text-slate-400",
    contactIconBox:
      "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-300 backdrop-blur-sm",
    contactLink:
      "group flex items-center gap-4 font-[Inter] text-sm text-sky-200 transition-all duration-500 hover:translate-x-1",
    socialLink:
      "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all duration-500 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300",
    footer: "border-t border-white/10 px-6 py-10",
    footerText: "font-[Inter] text-sm text-slate-500",
    footerLink:
      "group flex items-center gap-2 font-[Inter] text-sm text-violet-300 transition-all duration-500 hover:text-violet-200",
    marquee: "relative overflow-hidden border-y border-white/10 bg-white/5 py-6 backdrop-blur-sm",
    marqueeFadeL:
      "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent",
    marqueeFadeR:
      "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent",
    marqueeItem:
      "flex items-center gap-3 text-slate-500 transition-all duration-500 hover:scale-105 hover:text-sky-300",
    traitCode: "font-[Space_Grotesk] text-xs font-semibold text-violet-300",
    terminalPanel: "hidden",
    terminalInner: "hidden",
    pickerPage: "min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-950 px-6 py-16",
    pickerTitle: "font-[Space_Grotesk] text-4xl font-bold text-white",
    pickerSubtitle: "mt-3 font-[Inter] text-base text-slate-400",
    pickerGrid: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
    pickerCard:
      "group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-2 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-2xl",
    pickerCardActive: "border-sky-400/50 shadow-xl shadow-sky-500/20",
    pickerPreview: "h-28 rounded-xl bg-gradient-to-br from-sky-500/30 via-violet-500/30 to-emerald-500/20 p-4",
    pickerCardLabel: "mt-4 px-2 font-[Space_Grotesk] text-base font-semibold text-white",
    pickerCardDesc: "mt-1 px-2 pb-3 font-[Inter] text-xs text-slate-400",
    pickerBtn:
      "mt-8 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3.5 font-[Space_Grotesk] text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:shadow-xl disabled:opacity-40",
    settingsBtn:
      "flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sky-300 backdrop-blur-sm transition-all duration-500 hover:bg-white/10",
    modeToggle: "inline-flex rounded-full border border-white/15 bg-white/5 p-0.5 backdrop-blur-sm",
    modeToggleActive: "bg-sky-500/30 text-sky-200",
    settingsOverlay: "fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-md",
    settingsPanel: "mx-auto mt-16 max-w-4xl px-6",
    revealDuration: "800ms",
    showTerminal: false,
    showMarquee: true,
    showPhotoScan: false,
    showScanlines: false,
    showGlitch: false,
    showGridFloor: false,
    showHeroGlow: true,
  },
}

export const glassmorphismTheme = createTheme(
  {
    name: "glassmorphism",
    label: "Glassmorphism Aurora",
    description: "Frosted glass layers, aurora gradients, and floating soft UI.",
    font: "Inter + Space Grotesk",
    layout: "floating layered cards",
    effects: "blur, aurora gradients, soft shadows",
    tailwindClasses: "bg-slate-900/80 backdrop-blur-xl rounded-2xl border-white/10 shadow-xl",
    defaultMode: "dark",
  },
  darkBundle,
  lightPatches.glassmorphism,
)
