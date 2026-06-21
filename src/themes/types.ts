export type ThemeName =
  | "cyberpunk"
  | "glassmorphism"
  | "minimal_mono"
  | "brutalist_dev"
  | "neo_editorial"

export type ColorMode = "dark" | "light"

export interface ThemeClasses {
  root: string
  main: string
  section: string
  sectionAlt: string
  container: string
  fontSans: string
  fontDisplay: string
  textTransform: string
  textPrimary: string
  textMuted: string
  textAccent: string
  textAccent2: string
  textHighlight: string
  panel: string
  btnPrimary: string
  btnSecondary: string
  tag: string
  input: string
  badge: string
  iconWrap: string
  iconHover: string
  header: string
  navLink: string
  navMobile: string
  logo: string
  logoAccent: string
  logoDot: string
  sectionLabel: string
  sectionTitle: string
  sectionTitlePrefix: string
  sectionDivider: string
  sectionDesc: string
  hero: string
  heroBadge: string
  heroBoot: string
  heroOperator: string
  heroName: string
  heroSubtitle: string
  heroStackPill: string
  statPanel: string
  statValue: string
  statLabel: string
  statsBorder: string
  photoGlow: string
  photoPanel: string
  photoInner: string
  photoCaption: string
  photoMeta: string
  skillRow: string
  skillCategoryTitle: string
  skillCategoryCode: string
  skillDivider: string
  projectThumb: string
  projectFeatured: string
  projectMeta: string
  projectTitle: string
  projectDesc: string
  projectLinkPrimary: string
  projectLinkSecondary: string
  projectLinksBorder: string
  expPanel: string
  expNumber: string
  expPeriod: string
  expRole: string
  expCompany: string
  expBullet: string
  expItem: string
  expSidebar: string
  contactLabel: string
  contactIconBox: string
  contactLink: string
  socialLink: string
  footer: string
  footerText: string
  footerLink: string
  marquee: string
  marqueeFadeL: string
  marqueeFadeR: string
  marqueeItem: string
  traitCode: string
  terminalPanel: string
  terminalInner: string
  pickerPage: string
  pickerTitle: string
  pickerSubtitle: string
  pickerGrid: string
  pickerCard: string
  pickerCardActive: string
  pickerPreview: string
  pickerCardLabel: string
  pickerCardDesc: string
  pickerBtn: string
  settingsBtn: string
  modeToggle: string
  modeToggleActive: string
  settingsOverlay: string
  settingsPanel: string
  revealDuration: string
  showTerminal: boolean
  showMarquee: boolean
  showPhotoScan: boolean
  showScanlines: boolean
  showGlitch: boolean
  showGridFloor: boolean
  showHeroGlow: boolean
}

export interface ThemeModeBundle {
  colors: Record<string, string>
  classes: ThemeClasses
}

export interface ThemeConfig {
  name: ThemeName
  label: string
  description: string
  colors: Record<string, string>
  font: string
  layout: string
  effects: string
  tailwindClasses: string
  defaultMode: ColorMode
  modes: Record<ColorMode, ThemeModeBundle>
}

export interface ResolvedTheme {
  name: ThemeName
  label: string
  description: string
  font: string
  layout: string
  effects: string
  tailwindClasses: string
  defaultMode: ColorMode
  colorMode: ColorMode
  colors: Record<string, string>
  classes: ThemeClasses
}
