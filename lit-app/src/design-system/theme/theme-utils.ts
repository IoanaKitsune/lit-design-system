import {NamedTheme, Theme} from "./apply-theme.ts";
import {ColorPalette} from "./color-palette.ts";
import novaTheme from "./themes/nova.ts";
import royalPunkTheme from "./themes/royal-punk.ts";

export type Mutable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? Mutable<T[P]> : T[P];
};

export function createTheme(from?: NamedTheme): Mutable<Theme> {
    return JSON.parse(JSON.stringify(namedTheme(from)));
}

export function namedTheme(name?: NamedTheme): Theme {
    switch (name) {
        case 'royal-punk':
            return royalPunkTheme;
        case 'nova':
        default:
            return novaTheme;
    }
}

export function normalizeTheme(theme?: Theme | NamedTheme): Theme {
    if (typeof theme === 'string') return namedTheme(theme);
    return theme ?? novaTheme;
}

export function invertColorPalette<T>(colorPalette: ColorPalette<T>) {
    const invertedColorPalette: any = JSON.parse(JSON.stringify(colorPalette));
    invertedColorPalette.black = colorPalette.white;
    invertedColorPalette.white = colorPalette.black;
    return invertedColorPalette;
}