/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#f9f8f5",
      "foreground": "#1a1e1c",
      "border": "#d8d6d0",
      "card": "#ffffff",
      "cardForeground": "#1a1e1c",
      "popover": "#ffffff",
      "popoverForeground": "#1a1e1c",
      "primary": "#93d75b",
      "primaryForeground": "#131614",
      "secondary": "#e9e7e2",
      "secondaryForeground": "#1a1e1c",
      "muted": "#eeede7",
      "mutedForeground": "#616b66",
      "accent": "#93d75b",
      "accentForeground": "#131614",
      "destructive": "#dc4038",
      "destructiveForeground": "#ffffff",
      "input": "#d8d6d0",
      "ring": "#93d75b",
      "chart1": "#93d75b",
      "chart2": "#3f8f72",
      "chart3": "#1a1e1c",
      "chart4": "#e3a84b",
      "chart5": "#dc4038",
      "sidebar": "#f9f8f5",
      "sidebarForeground": "#1a1e1c",
      "sidebarBorder": "#d8d6d0",
      "sidebarPrimary": "#131614",
      "sidebarPrimaryForeground": "#f9f8f5",
      "sidebarAccent": "#eeede7",
      "sidebarAccentForeground": "#1a1e1c",
      "sidebarRing": "#93d75b"
    },
    "dark": {
      "background": "#101412",
      "foreground": "#f9f8f5",
      "border": "#373f3b",
      "card": "#1c211f",
      "cardForeground": "#f9f8f5",
      "popover": "#1c211f",
      "popoverForeground": "#f9f8f5",
      "primary": "#93d75b",
      "primaryForeground": "#101412",
      "secondary": "#282e2b",
      "secondaryForeground": "#f9f8f5",
      "muted": "#262c29",
      "mutedForeground": "#afaca1",
      "accent": "#93d75b",
      "accentForeground": "#101412",
      "destructive": "#a62f2a",
      "destructiveForeground": "#ffffff",
      "input": "#373f3b",
      "ring": "#93d75b",
      "chart1": "#93d75b",
      "chart2": "#55b68d",
      "chart3": "#f0d36a",
      "chart4": "#e3a84b",
      "chart5": "#e87368",
      "sidebar": "#1e2421",
      "sidebarForeground": "#f9f8f5",
      "sidebarBorder": "#373f3b",
      "sidebarPrimary": "#93d75b",
      "sidebarPrimaryForeground": "#101412",
      "sidebarAccent": "#282e2b",
      "sidebarAccentForeground": "#f9f8f5",
      "sidebarRing": "#93d75b"
    }
  },
  "fontFamily": {
    "sans": [
      "Manrope",
      "sans-serif"
    ],
    "serif": [
      "Space Grotesk",
      "sans-serif"
    ],
    "mono": [
      "Space Mono",
      "monospace"
    ]
  },
  "radius": "0.375rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
