import {ColorPalette} from "./color-palette.ts";
import {normalizeTheme} from "./theme-utils.ts";
import {designTokens} from "../design-tokens.ts";

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
    designTokens.colors.primary.setValue(colors.primary);
    designTokens.colors.secondary.setValue(colors.secondary)
    designTokens.colors.neutral.setValue(colors.neutral);
    designTokens.colors.warning.setValue(colors.warning)
    designTokens.colors.error.setValue(colors.error);
    designTokens.colors.success.setValue(colors.success)
    designTokens.colors.black.setValue(colors.black);
    designTokens.colors.white.setValue(colors.white)
    designTokens.colors.overlay.setValue(colors.overlay);
    designTokens.colors.ai.purple.setValue(colors.ai.purple);
    designTokens.colors.ai.teal.setValue(colors.ai.teal);
}

