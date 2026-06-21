import { createThemeWithLightDefault } from "../themeFactory"
import { darkPatches } from "../lightPatches"

const lightBundle = {
  colors: {
    bg: "#f5f2eb",
    panel: "#fffdf8",
    accent: "#2d4a3e",
    accent2: "#8b5a3c",
    highlight: "#1a1a1a",
  },
  classes: {
    root: "min-h-screen bg-[#f5f2eb] font-['Source_Sans_3'] text-stone-700",
    main: "relative z-10",
    section: "px-6 py-24",
    sectionAlt: "bg-[#ebe6dc] px-6 py-24",
    container: "mx-auto max-w-5xl",
    fontSans: "font-['Source_Sans_3']",
    fontDisplay: "font-['Playfair_Display']",
    textTransform: "normal-case",
    textPrimary: "text-stone-900",
    textMuted: "text-stone-500",
    textAccent: "text-[#2d4a3e]",
    textAccent2: "text-[#8b5a3c]",
    textHighlight: "text-stone-900",
    panel:
      "rounded-sm border border-stone-200 bg-[#fffdf8] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md",
    btnPrimary:
      "inline-flex items-center gap-2 rounded-sm bg-[#2d4a3e] px-7 py-3 font-['Source_Sans_3'] text-sm font-semibold tracking-wide text-[#f5f2eb] transition-all duration-500 hover:bg-[#1f3329]",
    btnSecondary:
      "inline-flex items-center gap-2 rounded-sm border border-stone-400 px-7 py-3 font-['Source_Sans_3'] text-sm font-semibold text-stone-800 transition-all duration-500 hover:border-[#2d4a3e] hover:text-[#2d4a3e]",
    tag: "inline-flex items-center gap-1.5 rounded-sm bg-stone-100 px-2.5 py-1 font-['Source_Sans_3'] text-xs text-[#2d4a3e]",
    input:
      "w-full rounded-sm border border-stone-300 bg-[#fffdf8] px-4 py-3 font-['Source_Sans_3'] text-sm text-stone-800 placeholder:text-stone-400 outline-none transition-all duration-500 focus:border-[#2d4a3e] focus:ring-1 focus:ring-[#2d4a3e]/20",
    badge:
      "inline-flex items-center gap-2 font-['Source_Sans_3'] text-xs font-medium italic text-[#8b5a3c]",
    iconWrap:
      "flex h-10 w-10 items-center justify-center rounded-sm border border-stone-200 bg-[#fffdf8] text-[#2d4a3e]",
    iconHover: "transition-all duration-500 hover:text-[#8b5a3c]",
    header:
      "fixed inset-x-0 top-0 z-50 border-b border-stone-300 bg-[#f5f2eb]/95 backdrop-blur-sm",
    navLink:
      "px-3 py-2 font-['Source_Sans_3'] text-sm text-stone-600 transition-all duration-500 hover:text-[#2d4a3e]",
    navMobile: "block py-2 font-['Source_Sans_3'] text-sm text-[#2d4a3e]",
    logo: "group flex items-center gap-3 font-['Playfair_Display'] text-xl font-semibold text-stone-900",
    logoAccent: "text-[#2d4a3e]",
    logoDot: "text-[#8b5a3c]",
    sectionLabel:
      "font-['Source_Sans_3'] text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5a3c]",
    sectionTitle:
      "font-['Playfair_Display'] text-3xl font-semibold text-stone-900 sm:text-4xl",
    sectionTitlePrefix: "text-[#2d4a3e]",
    sectionDivider: "mt-4 h-px w-20 bg-[#8b5a3c]",
    sectionDesc:
      "mt-5 max-w-2xl font-['Source_Sans_3'] text-base leading-relaxed text-stone-600",
    hero: "relative flex min-h-screen items-center px-6 pt-28",
    heroBadge: "",
    heroBoot: "font-['Source_Sans_3'] text-sm italic text-[#8b5a3c]",
    heroOperator: "block font-['Source_Sans_3'] text-xs font-semibold uppercase tracking-widest text-[#8b5a3c]",
    heroName:
      "mt-3 block font-['Playfair_Display'] text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl",
    heroSubtitle:
      "mt-8 max-w-xl font-['Source_Sans_3'] text-lg leading-relaxed text-stone-600",
    heroStackPill:
      "flex items-center gap-2 rounded-sm border border-stone-200 bg-[#fffdf8] px-3 py-2 font-['Source_Sans_3'] text-sm text-[#2d4a3e]",
    statPanel: "rounded-sm",
    statValue: "font-['Playfair_Display'] text-4xl font-semibold text-stone-900",
    statLabel: "mt-1 font-['Source_Sans_3'] text-xs text-stone-500",
    statsBorder: "mt-16 grid grid-cols-3 gap-8 border-t border-stone-300 pt-12",
    photoGlow: "hidden",
    photoPanel: "relative transition-all duration-500 hover:opacity-95",
    photoInner:
      "relative aspect-[4/5] overflow-hidden rounded-sm border border-stone-300 bg-stone-200",
    photoCaption:
      "mt-4 font-['Source_Sans_3'] text-xs italic text-stone-500",
    photoMeta: "mt-2 font-['Source_Sans_3'] text-xs text-stone-400",
    skillRow:
      "flex items-center gap-3 border-b border-stone-100 py-3 font-['Source_Sans_3'] text-sm text-stone-600 transition-colors duration-500 hover:text-[#2d4a3e]",
    skillCategoryTitle: "font-['Playfair_Display'] text-lg font-semibold text-stone-900",
    skillCategoryCode: "font-['Source_Sans_3'] text-xs font-semibold text-[#8b5a3c]",
    skillDivider: "mb-5 flex items-center gap-3 border-b border-stone-200 pb-4",
    projectThumb:
      "relative min-h-[160px] rounded-t-sm bg-gradient-to-br from-stone-200 to-stone-300",
    projectFeatured:
      "absolute left-4 top-4 rounded-sm bg-[#8b5a3c] px-3 py-1 font-['Source_Sans_3'] text-xs font-medium text-[#f5f2eb]",
    projectMeta: "absolute bottom-3 right-4 font-['Source_Sans_3'] text-xs italic text-stone-500",
    projectTitle:
      "font-['Playfair_Display'] text-xl font-semibold text-stone-900 transition-colors duration-500 group-hover:text-[#2d4a3e]",
    projectDesc: "mt-3 flex-1 font-['Source_Sans_3'] text-sm leading-relaxed text-stone-600",
    projectLinkPrimary:
      "font-['Source_Sans_3'] text-sm font-semibold text-[#2d4a3e] underline-offset-4 transition-all duration-500 hover:underline",
    projectLinkSecondary:
      "font-['Source_Sans_3'] text-sm text-[#8b5a3c] underline-offset-4 transition-all duration-500 hover:underline",
    projectLinksBorder: "mt-6 flex gap-8 border-t border-stone-200 pt-5",
    expPanel: "grid gap-6 p-8 md:grid-cols-[160px_1fr]",
    expNumber: "font-['Playfair_Display'] text-5xl font-semibold text-stone-300",
    expPeriod: "mt-2 block font-['Source_Sans_3'] text-xs text-stone-500",
    expRole: "font-['Playfair_Display'] text-xl font-semibold text-stone-900",
    expCompany: "mt-1 font-['Source_Sans_3'] text-sm italic text-[#2d4a3e]",
    expBullet: "shrink-0 text-[#8b5a3c]",
    expItem: "flex gap-3 font-['Source_Sans_3'] text-sm leading-relaxed text-stone-600",
    expSidebar: "border-b border-stone-200 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-8",
    contactLabel: "mb-2 block font-['Source_Sans_3'] text-sm font-medium text-stone-600",
    contactIconBox:
      "flex h-11 w-11 items-center justify-center rounded-sm border border-stone-200 bg-[#fffdf8] text-[#2d4a3e]",
    contactLink:
      "group flex items-center gap-4 font-['Source_Sans_3'] text-sm text-[#2d4a3e] transition-all duration-500 hover:text-[#8b5a3c]",
    socialLink:
      "flex h-10 w-10 items-center justify-center rounded-sm border border-stone-200 text-stone-500 transition-all duration-500 hover:border-[#2d4a3e] hover:text-[#2d4a3e]",
    footer: "border-t border-stone-300 px-6 py-12",
    footerText: "font-['Source_Sans_3'] text-sm text-stone-500",
    footerLink:
      "group flex items-center gap-2 font-['Source_Sans_3'] text-sm text-[#2d4a3e] transition-all duration-500 hover:text-[#8b5a3c]",
    marquee: "overflow-hidden border-y border-stone-300 bg-[#ebe6dc] py-5",
    marqueeFadeL:
      "pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#ebe6dc] to-transparent",
    marqueeFadeR:
      "pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#ebe6dc] to-transparent",
    marqueeItem:
      "flex items-center gap-3 font-['Source_Sans_3'] text-sm text-stone-500 transition-all duration-500 hover:text-[#2d4a3e]",
    traitCode: "font-['Source_Sans_3'] text-xs font-semibold text-[#8b5a3c]",
    terminalPanel: "hidden",
    terminalInner: "hidden",
    pickerPage: "min-h-screen bg-[#f5f2eb] px-6 py-20",
    pickerTitle: "font-['Playfair_Display'] text-4xl font-semibold text-stone-900 sm:text-5xl",
    pickerSubtitle: "mt-4 font-['Source_Sans_3'] text-base text-stone-600",
    pickerGrid: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
    pickerCard:
      "group cursor-pointer rounded-sm border border-stone-300 bg-[#fffdf8] p-3 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md",
    pickerCardActive: "border-[#2d4a3e] ring-1 ring-[#2d4a3e]/30",
    pickerPreview: "h-24 rounded-sm bg-gradient-to-br from-stone-200 to-[#ebe6dc] p-4",
    pickerCardLabel: "mt-4 px-1 font-['Playfair_Display'] text-lg font-semibold text-stone-900",
    pickerCardDesc: "mt-1 px-1 pb-2 font-['Source_Sans_3'] text-sm text-stone-500",
    pickerBtn:
      "mt-10 inline-flex rounded-sm bg-[#2d4a3e] px-8 py-3.5 font-['Source_Sans_3'] text-sm font-semibold text-[#f5f2eb] transition-all duration-500 hover:bg-[#1f3329] disabled:opacity-40",
    settingsBtn:
      "flex h-9 w-9 items-center justify-center rounded-sm border border-stone-300 text-[#2d4a3e] transition-all duration-500 hover:bg-[#fffdf8]",
    modeToggle: "inline-flex rounded-sm border border-stone-300 bg-[#fffdf8] p-0.5",
    modeToggleActive: "bg-[#2d4a3e] text-[#f5f2eb]",
    settingsOverlay: "fixed inset-0 z-[100] bg-stone-900/40 backdrop-blur-sm",
    settingsPanel: "mx-auto mt-16 max-w-4xl px-6",
    revealDuration: "700ms",
    showTerminal: false,
    showMarquee: true,
    showPhotoScan: false,
    showScanlines: false,
    showGlitch: false,
    showGridFloor: false,
    showHeroGlow: false,
  },
}

export const neoEditorialTheme = createThemeWithLightDefault(
  {
    name: "neo_editorial",
    label: "Neo Editorial",
    description: "Magazine-inspired layout with serif headlines and calm muted tones.",
    font: "Playfair Display + Source Sans 3",
    layout: "editorial grid, columns",
    effects: "subtle fade transitions",
    tailwindClasses: "bg-stone-100 font-serif text-stone-800 leading-relaxed",
  },
  lightBundle,
  darkPatches.neo_editorial,
)
