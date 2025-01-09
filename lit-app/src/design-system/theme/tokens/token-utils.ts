import { ColorPalette } from './color-palette';
import { ColorRange, colorRange } from './color-range';
import { Shadows } from './shadows';

export type ShadowDefinition =
  | [number, number, number, string]
  | [number, number, number, number, string];

export interface ShadowBuilder {
  box(): Shadows<string>;

  drop(): Shadows<string>;
}

function boxShadow(shadows: ShadowDefinition[]): string {
  return shadows
    .map(
      (shadow) =>
        `${shadow[0]}em ${shadow[1]}em ${shadow[2]}em ${shadow[3]}em ${shadow[4]}`
    )
    .join(', ');
}

function dropShadow(shadows: ShadowDefinition[]): string {
  return shadows
    .map((shadow) => {
      if (shadow.length === 5) {
        return `drop-shadow(${shadow[0]}em ${shadow[1]}em ${shadow[2]}em ${shadow[4]})`;
      }
      return `drop-shadow(${shadow[0]}em ${shadow[1]}em ${shadow[2]}em ${shadow[3]})`;
    })
    .join(' ');
}

export function shadows(shadows: Shadows<ShadowDefinition[]>): ShadowBuilder {
  return {
    box() {
      return {
        xs: boxShadow(shadows.xs),
        sm: boxShadow(shadows.sm),
        md: boxShadow(shadows.md),
        lg: boxShadow(shadows.lg),
        xl: boxShadow(shadows.xl),
      };
    },
    drop(): Shadows<string> {
      return {
        xs: dropShadow(shadows.xs),
        sm: dropShadow(shadows.sm),
        md: dropShadow(shadows.md),
        lg: dropShadow(shadows.lg),
        xl: dropShadow(shadows.xl),
      };
    },
  };
}



export function invertColorPalette<T>(colorPalette: ColorPalette<T>) {
  const invertedColorPalette: any = {};
  for (const [key, value] of Object.entries(colorPalette)) {
    if (key === 'black' || key === 'white' || key === 'overlay') continue;
    invertedColorPalette[key] = invertColorRange(value);
  }
  invertedColorPalette.black = colorPalette.white;
  invertedColorPalette.white = colorPalette.black;
  invertedColorPalette.overlay = colorPalette.overlay;
  return invertedColorPalette;
}

function invertColorRange<T>(original: any): ColorRange<T> {
  const result: any = {};
  for (
    let i = 0, ii = colorRange.length - 1;
    i < colorRange.length;
    i++, ii--
  ) {
    result[colorRange[i]] = original[colorRange[ii]];
  }
  return result;
}
