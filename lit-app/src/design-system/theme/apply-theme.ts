import {ColorPalette} from "./color-palette.ts";
import {normalizeTheme} from "./theme-utils.ts";

export type NamedTheme = 'nova' | 'royal-punk';

export type ThemeMode = 'light' | 'dark';

export interface Theme {
    readonly color: {
        readonly [mode in ThemeMode]: ColorPalette;
    };
}


export function applyTheme(
    theme: Theme | NamedTheme,
    mode: ThemeMode,
    htmlFontSize: number = 16
): void {
    const normalizedTheme = normalizeTheme(theme);  // Normalize the theme if needed

    // Apply base styles to the document
    applyBaseStyles(normalizedTheme, mode, htmlFontSize);

    console.log(normalizedTheme)

}

/**
 * Apply base styles to the document, such as root styles and font size
 */
function applyBaseStyles(theme: Theme, mode: ThemeMode, htmlFontSize: number): void {
    applyThemeColorPalette(theme.color[mode]);

}

function applyThemeColorPalette(colors: ColorPalette): void {
    document.documentElement.style.setProperty('--primary-color', colors.primary);
    document.documentElement.style.setProperty('--secondary-color', colors.secondary);
    document.documentElement.style.setProperty('--neutral-color', colors.neutral);
    document.documentElement.style.setProperty('--black-color', colors.black);
    document.documentElement.style.setProperty('--white-color', colors.white);
    document.documentElement.style.setProperty('--overlay-color', colors.overlay);
}

