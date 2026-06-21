export type Theme = "minimalist" | "futuristic" | "academic" | "corporate" | "creative"
export type Palette = "monochrome" | "ocean-blue" | "emerald-green" | "royal-purple" | "sunset-orange"
export type AnimationStyle = "none" | "subtle" | "smooth" | "dynamic" | "cinematic"
export type LayoutStyle = "grid" | "bento" | "timeline" | "dashboard" | "magazine"
export type TypographyStyle = "modern-sans" | "technical" | "monospace" | "editorial" | "elegant"

export interface UserDesignPreferences {
  theme: Theme
  palette: Palette
  animation: AnimationStyle
  layout: LayoutStyle
  typography: TypographyStyle
}

export interface StoredDesignState {
  preferences: UserDesignPreferences
  wizardComplete: boolean
}

export interface PaletteTokens {
  primary: string
  accent: string
  highlight: string
  surface: string
  panel: string
  muted: string
  heading: string
}

export interface MotionTokens {
  transition: string
  transitionSlow: string
  hoverLift: string
  hoverScale: string
  revealBase: string
  revealHidden: string
  revealVisible: string
  revealUp: string
  revealLeft: string
  revealRight: string
  revealScale: string
  revealFade: string
  marquee: string
}

export interface LayoutTokens {
  container: string
  section: string
  sectionAlt: string
  heroGrid: string
  aboutGrid: string
  traitsGrid: string
  skillsGrid: string
  projectsGrid: string
  projectFeatured: string
  projectDefault: string
  experienceList: string
  experienceItem: string
  contactGrid: string
  statsGrid: string
}

export interface ThemeTokens {
  panel: string
  panelInner: string
  btnPrimary: string
  btnGhost: string
  tag: string
  input: string
  nav: string
  navLink: string
  badge: string
  iconBox: string
  headingPrefix: string
  sectionDivider: string
  linkPrimary: string
  linkAccent: string
  photoFrame: string
  photoGlow: string
  marquee: string
  rootFx: string
}

export interface TypographyTokens {
  fontDisplay: string
  fontBody: string
  heading: string
  label: string
  body: string
  bodyMuted: string
}

export interface DesignTokens {
  cssVariables: Record<string, string>
  dataAttributes: Record<string, string>
  theme: ThemeTokens
  motion: MotionTokens
  layout: LayoutTokens
  typography: TypographyTokens
  semantic: {
    primary: string
    accent: string
    highlight: string
    surface: string
    panel: string
    muted: string
    heading: string
    border: string
    borderAccent: string
  }
  fx: {
    scanlines: boolean
    vignette: boolean
    glitch: boolean
    gridFloor: boolean
    photoScan: boolean
    uppercaseLabels: boolean
  }
}
