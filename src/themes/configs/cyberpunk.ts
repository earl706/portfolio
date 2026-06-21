import { createTheme } from "../themeFactory"
import { lightPatches } from "../lightPatches"

const darkBundle = {
  colors: {
    bg: "#030308",
    panel: "#0a0a12",
    accent: "#00f0ff",
    accent2: "#ff2a6d",
    highlight: "#fcee0a",
  },
  classes: {
    root: "min-h-screen bg-[#030308] font-[Share_Tech_Mono] text-zinc-400",
    main: "relative z-10",
    section: "px-6 py-24",
    sectionAlt: "border-y border-cyan-500/10 bg-[#0a0a12]/50 px-6 py-24",
    container: "mx-auto max-w-6xl",
    fontSans: "font-[Share_Tech_Mono]",
    fontDisplay: "font-[Orbitron]",
    textTransform: "uppercase",
    textPrimary: "text-white",
    textMuted: "text-zinc-500",
    textAccent: "text-[#00f0ff]",
    textAccent2: "text-[#ff2a6d]",
    textHighlight: "text-[#fcee0a]",
    panel:
      "relative border border-[#00f0ff]/30 bg-[#0a0a12]/90 shadow-[inset_0_0_30px_rgba(0,240,255,0.03),0_0_20px_rgba(0,240,255,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#ff2a6d]/50 hover:shadow-[0_0_35px_rgba(255,42,109,0.2)]",
    btnPrimary:
      "inline-flex items-center gap-2 border border-[#00f0ff] bg-[#00f0ff]/10 px-6 py-3 font-[Orbitron] text-xs font-bold uppercase tracking-widest text-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.3)] transition-all duration-500 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#00f0ff]/25 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]",
    btnSecondary:
      "inline-flex items-center gap-2 border border-[#ff2a6d]/50 bg-transparent px-6 py-3 font-[Orbitron] text-xs font-bold uppercase tracking-widest text-[#ff2a6d] transition-all duration-500 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#ff2a6d] hover:bg-[#ff2a6d]/15 hover:shadow-[0_0_30px_rgba(255,42,109,0.4)]",
    tag: "inline-flex items-center gap-1.5 border border-[#00f0ff]/20 bg-[#00f0ff]/5 px-2 py-0.5 font-[Share_Tech_Mono] text-xs text-[#00f0ff] transition-all duration-500 hover:border-[#ff2a6d]/40 hover:bg-[#ff2a6d]/10 hover:text-[#ff2a6d]",
    input:
      "w-full border border-[#00f0ff]/20 bg-black px-4 py-3 font-[Share_Tech_Mono] text-sm text-[#00f0ff] placeholder:text-zinc-700 outline-none transition-all duration-500 hover:border-[#00f0ff]/35 focus:border-[#ff2a6d]/60 focus:shadow-[0_0_20px_rgba(255,42,109,0.15)]",
    badge:
      "inline-flex items-center gap-3 border border-[#39ff14]/30 bg-[#39ff14]/5 px-4 py-2 font-[Share_Tech_Mono] text-xs uppercase tracking-widest text-[#39ff14] transition-all duration-500 hover:border-[#39ff14]/60 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]",
    iconWrap:
      "flex h-9 w-9 items-center justify-center border border-[#00f0ff]/30 bg-[#00f0ff]/5 text-[#00f0ff] transition-all duration-500",
    iconHover: "transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_8px_currentColor]",
    header:
      "fixed inset-x-0 top-0 z-50 border-b border-[#00f0ff]/20 bg-[#030308]/90 backdrop-blur-sm transition-all duration-500",
    navLink:
      "relative px-3 py-2 font-[Share_Tech_Mono] text-xs uppercase tracking-widest text-zinc-500 transition-all duration-500 hover:text-[#00f0ff] hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]",
    navMobile: "block font-[Share_Tech_Mono] text-xs uppercase tracking-widest text-[#00f0ff] transition-all duration-500 hover:translate-x-2",
    logo: "group flex items-center gap-2 font-[Orbitron] text-sm font-bold tracking-[0.2em] text-white transition-all duration-500 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]",
    logoAccent: "text-[#00f0ff] drop-shadow-[0_0_7px_rgba(0,240,255,0.8)]",
    logoDot: "text-[#ff2a6d]",
    sectionLabel: "font-[Share_Tech_Mono] text-xs uppercase tracking-[0.3em] text-[#ff2a6d]",
    sectionTitle:
      "font-[Orbitron] text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl",
    sectionTitlePrefix: "text-[#00f0ff] drop-shadow-[0_0_7px_rgba(0,240,255,0.8)]",
    sectionDivider:
      "mt-3 h-px w-24 bg-gradient-to-r from-[#00f0ff] to-[#ff2a6d] transition-all duration-700 hover:w-40",
    sectionDesc: "mt-5 max-w-2xl font-[Share_Tech_Mono] text-sm leading-relaxed text-zinc-500",
    hero: "relative flex min-h-screen items-center overflow-hidden px-6 pt-20",
    heroBadge: "",
    heroBoot: "font-[Share_Tech_Mono] text-sm text-[#00f0ff]",
    heroOperator: "block text-sm font-bold tracking-[0.4em] text-[#ff2a6d]",
    heroName:
      "mt-2 block text-[#00f0ff] drop-shadow-[0_0_7px_rgba(0,240,255,0.8)]",
    heroSubtitle: "mt-6 max-w-lg font-[Share_Tech_Mono] text-sm leading-relaxed text-zinc-500",
    heroStackPill:
      "icon-hover flex items-center gap-2 border border-[#00f0ff]/20 bg-[#00f0ff]/5 px-3 py-1.5 text-[#00f0ff]",
    statPanel: "",
    statValue: "font-[Orbitron] text-2xl font-bold text-[#fcee0a]",
    statLabel: "mt-1 font-[Share_Tech_Mono] text-[10px] uppercase tracking-wider text-zinc-600",
    statsBorder: "mt-14 grid grid-cols-3 gap-4 border-t border-[#00f0ff]/20 pt-8",
    photoGlow:
      "absolute -inset-1 bg-gradient-to-r from-[#00f0ff] via-[#ff2a6d] to-[#fcee0a] opacity-40 blur-sm transition-all duration-700 group-hover:opacity-70 group-hover:blur-md",
    photoPanel: "relative overflow-hidden p-1 transition-all duration-700 group-hover:-translate-y-1",
    photoInner: "relative aspect-square overflow-hidden border border-[#00f0ff]/30 bg-black",
    photoCaption:
      "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 py-2 font-[Share_Tech_Mono] text-[9px] uppercase tracking-[0.25em] text-[#00f0ff]",
    photoMeta:
      "mt-2 flex items-center justify-between px-1 font-[Share_Tech_Mono] text-[9px] uppercase tracking-widest text-zinc-600",
    skillRow:
      "flex items-center gap-3 rounded-sm px-2 py-1.5 font-[Share_Tech_Mono] text-sm text-zinc-500 transition-all duration-500 hover:bg-[#00f0ff]/5 hover:text-[#00f0ff]",
    skillCategoryTitle:
      "font-[Orbitron] text-sm font-bold uppercase tracking-widest text-white",
    skillCategoryCode:
      "font-[Orbitron] text-lg font-bold text-[#ff2a6d] transition-all duration-500 group-hover:text-[#00f0ff]",
    skillDivider: "mb-5 flex items-center gap-3 border-b border-[#00f0ff]/20 pb-4",
    projectThumb: "relative border-b border-[#00f0ff]/10 bg-black",
    projectFeatured:
      "absolute left-0 top-0 bg-[#ff2a6d] px-3 py-1 font-[Share_Tech_Mono] text-[10px] uppercase tracking-widest text-black transition-all duration-500 group-hover:bg-[#fcee0a]",
    projectMeta: "absolute bottom-2 right-3 font-[Share_Tech_Mono] text-[10px] text-[#00f0ff]/40",
    projectTitle:
      "font-[Orbitron] text-sm font-bold uppercase tracking-wider text-white transition-all duration-500 group-hover:text-[#00f0ff] group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]",
    projectDesc: "mt-3 flex-1 font-[Share_Tech_Mono] text-xs leading-relaxed text-zinc-600",
    projectLinkPrimary:
      "group/link flex items-center gap-2 font-[Share_Tech_Mono] text-xs uppercase tracking-widest text-[#00f0ff] transition-all duration-500 hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]",
    projectLinkSecondary:
      "group/link flex items-center gap-2 font-[Share_Tech_Mono] text-xs uppercase tracking-widest text-[#ff2a6d] transition-all duration-500 hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]",
    projectLinksBorder: "mt-5 flex gap-6 border-t border-[#00f0ff]/10 pt-4",
    expPanel: "grid gap-4 p-6 md:grid-cols-[140px_1fr]",
    expNumber:
      "font-[Orbitron] text-3xl font-black text-[#ff2a6d]/30 transition-all duration-700 group-hover:text-[#ff2a6d]/60",
    expPeriod:
      "mt-2 block font-[Share_Tech_Mono] text-[10px] uppercase tracking-widest text-zinc-600",
    expRole:
      "font-[Orbitron] text-sm font-bold uppercase tracking-wider text-white transition-colors duration-500 group-hover:text-[#00f0ff]",
    expCompany: "mt-1 font-[Share_Tech_Mono] text-xs text-[#00f0ff]",
    expBullet: "shrink-0 text-[#ff2a6d]",
    expItem:
      "flex gap-3 font-[Share_Tech_Mono] text-xs leading-relaxed text-zinc-600 transition-all duration-500 hover:translate-x-1 hover:text-zinc-400",
    expSidebar: "border-b border-[#00f0ff]/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6",
    contactLabel:
      "mb-2 block font-[Share_Tech_Mono] text-xs uppercase tracking-widest text-zinc-600",
    contactIconBox:
      "flex h-10 w-10 items-center justify-center border border-[#00f0ff]/30 bg-[#00f0ff]/5 transition-all duration-500 group-hover:border-[#00f0ff] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
    contactLink:
      "group flex items-center gap-4 font-[Share_Tech_Mono] text-xs text-[#00f0ff] transition-all duration-500 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]",
    socialLink:
      "icon-hover flex h-10 w-10 items-center justify-center border border-[#00f0ff]/20 text-zinc-600 transition-all duration-500 hover:border-[#ff2a6d]/50 hover:bg-[#ff2a6d]/10 hover:text-[#ff2a6d]",
    footer: "border-t border-[#00f0ff]/10 px-6 py-8",
    footerText: "font-[Share_Tech_Mono] text-[10px] uppercase tracking-widest text-zinc-700",
    footerLink:
      "group flex items-center gap-2 font-[Share_Tech_Mono] text-[10px] uppercase tracking-widest text-[#ff2a6d] transition-all duration-500 hover:drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]",
    marquee: "relative overflow-hidden border-y border-[#00f0ff]/10 bg-black/60 py-5",
    marqueeFadeL:
      "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#030308] to-transparent",
    marqueeFadeR:
      "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#030308] to-transparent",
    marqueeItem:
      "flex items-center gap-3 text-zinc-600 transition-all duration-500 hover:scale-110 hover:text-[#00f0ff]",
    traitCode: "font-[Orbitron] text-xs text-[#ff2a6d]",
    terminalPanel: "p-1",
    terminalInner: "border border-[#ff2a6d]/20 bg-black p-5",
    pickerPage: "min-h-screen bg-[#030308] px-6 py-16",
    pickerTitle: "font-[Orbitron] text-3xl font-bold uppercase text-[#00f0ff] sm:text-4xl",
    pickerSubtitle: "mt-3 font-[Share_Tech_Mono] text-sm text-zinc-500",
    pickerGrid: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
    pickerCard:
      "group cursor-pointer border border-[#00f0ff]/30 bg-[#0a0a12] p-1 text-left transition-all duration-500 hover:-translate-y-2 hover:border-[#ff2a6d]/50 hover:shadow-[0_0_30px_rgba(255,42,109,0.2)]",
    pickerCardActive: "border-[#ff2a6d] shadow-[0_0_30px_rgba(255,42,109,0.3)]",
    pickerPreview: "h-28 border border-[#00f0ff]/20 bg-[#030308] p-4",
    pickerCardLabel: "mt-4 font-[Orbitron] text-sm font-bold uppercase text-white",
    pickerCardDesc: "mt-2 font-[Share_Tech_Mono] text-xs text-zinc-600",
    pickerBtn:
      "mt-8 inline-flex border border-[#00f0ff] bg-[#00f0ff]/10 px-8 py-3 font-[Orbitron] text-xs font-bold uppercase tracking-widest text-[#00f0ff] transition-all duration-500 hover:bg-[#00f0ff]/25 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] disabled:opacity-40",
    settingsBtn:
      "flex h-9 w-9 items-center justify-center border border-[#00f0ff]/30 text-[#00f0ff] transition-all duration-500 hover:border-[#ff2a6d]/50 hover:text-[#ff2a6d] hover:shadow-[0_0_12px_rgba(255,42,109,0.3)]",
    modeToggle: "inline-flex rounded-sm border border-[#00f0ff]/30 bg-[#0a0a12] p-0.5",
    modeToggleActive: "bg-[#00f0ff]/20 text-[#00f0ff]",
    settingsOverlay: "fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm",
    settingsPanel: "mx-auto mt-20 max-w-4xl px-6",
    revealDuration: "900ms",
    showTerminal: true,
    showMarquee: true,
    showPhotoScan: true,
    showScanlines: true,
    showGlitch: true,
    showGridFloor: true,
    showHeroGlow: true,
  },
}

export const cyberpunkTheme = createTheme(
  {
    name: "cyberpunk",
    label: "Cyberpunk Neon",
    description: "Dark HUD interface with neon glow, grid layouts, and terminal aesthetics.",
    font: "Share Tech Mono + Orbitron",
    layout: "grid-heavy HUD panels",
    effects: "scanlines, glitch, neon glow",
    tailwindClasses: "bg-[#030308] font-mono text-cyan-400 border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.3)]",
    defaultMode: "dark",
  },
  darkBundle,
  lightPatches.cyberpunk,
)
