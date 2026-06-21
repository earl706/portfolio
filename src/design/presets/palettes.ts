import type { Palette, PaletteTokens } from "../types"

export const PALETTE_PRESETS: Record<Palette, PaletteTokens> = {
  monochrome: {
    primary: "229 229 229",
    accent: "163 163 163",
    highlight: "212 212 212",
    surface: "10 10 10",
    panel: "23 23 23",
    muted: "115 115 115",
    heading: "250 250 250",
  },
  "ocean-blue": {
    primary: "0 240 255",
    accent: "37 99 235",
    highlight: "125 211 252",
    surface: "3 3 8",
    panel: "10 10 18",
    muted: "100 116 139",
    heading: "241 245 249",
  },
  "emerald-green": {
    primary: "52 211 153",
    accent: "16 185 129",
    highlight: "110 231 183",
    surface: "4 12 10",
    panel: "10 20 16",
    muted: "100 130 115",
    heading: "236 253 245",
  },
  "royal-purple": {
    primary: "192 132 252",
    accent: "147 51 234",
    highlight: "216 180 254",
    surface: "10 6 18",
    panel: "18 10 30",
    muted: "130 110 150",
    heading: "250 245 255",
  },
  "sunset-orange": {
    primary: "251 146 60",
    accent: "255 42 109",
    highlight: "252 238 10",
    surface: "12 6 4",
    panel: "22 12 8",
    muted: "150 110 90",
    heading: "255 247 237",
  },
}
