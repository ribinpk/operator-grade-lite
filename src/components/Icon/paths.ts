/*
 * Operator-grade icon registry.
 *
 * The registry + named-lookup + sized-SVG-component architecture is adapted
 * (structure only) from Palantir Blueprint's icon package (Apache-2.0). The glyphs
 * below are ORIGINAL, authored for this kit — Blueprint's icon artwork is NOT used.
 *
 * All glyphs are line-style on a 16x16 grid, drawn to be rendered with
 * fill:none, stroke:currentColor, stroke-width from --primitive-icon-stroke-width,
 * and round caps/joins (set by the Icon component). Meaning is carried by SHAPE,
 * not color — so icons double as never-color-alone cues and read in Mono/NVG.
 *
 * Values are inner-SVG markup (static, trusted, no user input).
 */

export const ICON_PATHS = {
  check: '<polyline points="3,8.5 6.5,12 13,4.5" />',
  minus: '<line x1="3.5" y1="8" x2="12.5" y2="8" />',
  plus: '<path d="M8 3.5 V12.5 M3.5 8 H12.5" />',
  close: '<path d="M4 4 L12 12 M12 4 L4 12" />',
  'chevron-up': '<polyline points="4,10 8,6 12,10" />',
  'chevron-down': '<polyline points="4,6 8,10 12,6" />',
  'chevron-left': '<polyline points="10,4 6,8 10,12" />',
  'chevron-right': '<polyline points="6,4 10,8 6,12" />',
  'arrow-right': '<path d="M3 8 H13 M9 4 L13 8 L9 12" />',
  'alert-triangle':
    '<path d="M8 2.5 L14.5 13.5 H1.5 Z" /><line x1="8" y1="6.5" x2="8" y2="9.5" /><circle cx="8" cy="11.6" r="0.55" fill="currentColor" stroke="none" />',
  info: '<circle cx="8" cy="8" r="6" /><line x1="8" y1="7.5" x2="8" y2="11" /><circle cx="8" cy="5" r="0.55" fill="currentColor" stroke="none" />',
  'alert-octagon':
    '<polygon points="10.3,2.46 13.54,5.7 13.54,10.3 10.3,13.54 5.7,13.54 2.46,10.3 2.46,5.7 5.7,2.46" /><line x1="8" y1="5" x2="8" y2="9" /><circle cx="8" cy="11.4" r="0.55" fill="currentColor" stroke="none" />',
  crosshair:
    '<circle cx="8" cy="8" r="5" /><line x1="8" y1="1" x2="8" y2="3.5" /><line x1="8" y1="12.5" x2="8" y2="15" /><line x1="1" y1="8" x2="3.5" y2="8" /><line x1="12.5" y1="8" x2="15" y2="8" />',
  target: '<circle cx="8" cy="8" r="6" /><circle cx="8" cy="8" r="2.25" />',
  signal: '<line x1="3" y1="13" x2="3" y2="10" /><line x1="7" y1="13" x2="7" y2="7" /><line x1="11" y1="13" x2="11" y2="4" />',
  lock: '<rect x="3.5" y="7" width="9" height="6.5" rx="1" /><path d="M5.5 7 V5 a2.5 2.5 0 0 1 5 0 V7" />',
  eye: '<path d="M1.5 8 C4 4.5 12 4.5 14.5 8 C12 11.5 4 11.5 1.5 8 Z" /><circle cx="8" cy="8" r="2" />',
  search: '<circle cx="7" cy="7" r="4.5" /><line x1="10.5" y1="10.5" x2="14" y2="14" />',
  menu: '<path d="M2.5 4.5 H13.5 M2.5 8 H13.5 M2.5 11.5 H13.5" />',
} as const;

export type IconName = keyof typeof ICON_PATHS;
