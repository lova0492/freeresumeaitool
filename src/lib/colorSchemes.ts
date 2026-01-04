export interface ColorScheme {
  primary: string;
  secondary: string;
  light: string;
}

export function getColorScheme(schemeId: bigint): ColorScheme {
  const schemes: Record<number, ColorScheme> = {
    1: {
      primary: 'oklch(0.45 0.15 250)',
      secondary: 'oklch(0.35 0.1 250)',
      light: 'oklch(0.95 0.02 250)',
    },
    2: {
      primary: 'oklch(0.50 0.20 290)',
      secondary: 'oklch(0.40 0.15 290)',
      light: 'oklch(0.95 0.03 290)',
    },
    3: {
      primary: 'oklch(0.20 0 0)',
      secondary: 'oklch(0.35 0 0)',
      light: 'oklch(0.95 0 0)',
    },
    4: {
      primary: 'oklch(0.45 0.15 150)',
      secondary: 'oklch(0.35 0.1 150)',
      light: 'oklch(0.95 0.02 150)',
    },
    5: {
      primary: 'oklch(0.50 0.22 25)',
      secondary: 'oklch(0.40 0.18 25)',
      light: 'oklch(0.95 0.03 25)',
    },
    6: {
      primary: 'oklch(0.55 0.20 50)',
      secondary: 'oklch(0.45 0.15 50)',
      light: 'oklch(0.95 0.03 50)',
    },
  };

  const id = Number(schemeId);
  return schemes[id] || schemes[1];
}
