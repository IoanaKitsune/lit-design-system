import {ColorPalette} from "./color-palette.ts";
import {normalizeTheme} from "./theme-utils.ts";
import {designTokens} from "../design-tokens.ts";
import {DesignToken} from "../design-token.ts";
import {colorRange, ColorRange} from "./color-range.ts";

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
}

/**
 * Apply base styles to the document, such as root styles and font size
 */
function applyBaseStyles(theme: Theme, mode: ThemeMode, htmlFontSize: number): void {
    applyThemeColorPalette(designTokens.colors, theme.color[mode]);

}

// function applyThemeColorPalette(colors: ColorPalette): void {
//     designTokens.colors.primary.setValue(colors.primary);
//     designTokens.colors.secondary.setValue(colors.secondary)
//     designTokens.colors.neutral.setValue(colors.neutral);
//     designTokens.colors.warning.setValue(colors.warning)
//     designTokens.colors.error.setValue(colors.error);
//     designTokens.colors.success.setValue(colors.success)
//     designTokens.colors.black.setValue(colors.black);
//     designTokens.colors.white.setValue(colors.white)
//     designTokens.colors.overlay.setValue(colors.overlay);
//     designTokens.colors.ai.purple.setValue(colors.ai.purple);
//     designTokens.colors.ai.teal.setValue(colors.ai.teal);
// }

function applyThemeColorPalette(
    tokens: ColorPalette<DesignToken>,
    colors: ColorPalette
): void {
    applyThemeColorRange(tokens.primary, colors.primary);
    applyThemeColorRange(tokens.secondary, colors.secondary);
    applyThemeColorRange(tokens.neutral, colors.neutral);
    applyThemeToken(tokens.black, colors.black);
    applyThemeToken(tokens.white, colors.white);
    applyThemeToken(tokens.overlay, colors.overlay);
    applyThemeColorRange(tokens.success, colors.success);
    applyThemeColorRange(tokens.warning, colors.warning);
    applyThemeColorRange(tokens.error, colors.error);
    applyThemeToken(tokens.ai.purple, colors.ai.purple);
    applyThemeToken(tokens.ai.teal, colors.ai.teal);
}

function applyThemeColorRange(
    tokens: ColorRange<DesignToken>,
    colors: ColorRange
): void {
    for (const index of colorRange) {
        // Safely access each token and color based on the colorRange indices
        const token = tokens[index as keyof ColorRange<DesignToken>];
        const color = colors[index as keyof ColorRange];

        if (token && color) {
            applyThemeToken(token, color);
        }
    }
}

function applyThemeToken(token: DesignToken, color: string): void {
    token.setValue(color);
}


