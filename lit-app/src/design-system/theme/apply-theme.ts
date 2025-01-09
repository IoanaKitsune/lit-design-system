import {ColorPalette} from "./tokens/color-palette.ts";
import {normalizeTheme} from "./theme-utils.ts";
import {designTokens} from "../design-tokens.ts";
import {DesignToken} from "../design-token.ts";
import {colorRange, ColorRange} from "./tokens/color-range.ts";
import {FontFamilies, FontSizeRelevant, FontSizes, FontWeights, LineHeights} from "./tokens/font.ts";

export type NamedTheme = 'nova' | 'royal-punk';

export type ThemeMode = 'light' | 'dark';

export interface Theme {
    readonly color: {
        readonly [mode in ThemeMode]: ColorPalette;
    };
    readonly fontFamily: FontFamilies;
    readonly fontSize: FontSizes;
    readonly lineHeight: LineHeights;
    readonly fontWeight: FontWeights;
}


export function applyTheme(
    theme: Theme | NamedTheme,
    mode: ThemeMode,
    htmlFontSize: number = 16
): void {
    const normalizedTheme = normalizeTheme(theme);  // Normalize the theme if needed

    applyThemeColorPalette(designTokens.colors, normalizedTheme.color[mode]);
    applyThemeToken(designTokens.fontFamily.sans, normalizedTheme.fontFamily.sans);
    applyThemeToken(designTokens.fontFamily.mono, normalizedTheme.fontFamily.mono);
    applyFontSizeTokens(designTokens.fontSize, normalizedTheme.fontSize, htmlFontSize);
    applyFontTokens(designTokens.lineHeight, normalizedTheme.lineHeight);
    applyFontTokens(designTokens.fontWeight, normalizedTheme.fontWeight);
}


function applyThemeColorPalette(
    tokens: ColorPalette<DesignToken>,
    colors: ColorPalette
): void {
    applyThemeColorRange(tokens.primary, colors.primary);
    applyThemeColorRange(tokens.secondary, colors.secondary);
    applyThemeColorRange(tokens.neutral, colors.neutral);
    applyThemeColorRange(tokens.success, colors.success);
    applyThemeColorRange(tokens.warning, colors.warning);
    applyThemeColorRange(tokens.error, colors.error);

    applyThemeToken(tokens.black, colors.black);
    applyThemeToken(tokens.white, colors.white);
    applyThemeToken(tokens.overlay, colors.overlay);
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

function applyFontSizeTokens(
    tokens: FontSizeRelevant<DesignToken>,
    theme: FontSizeRelevant,
    htmlFontSize: number
) {
    applyThemeSizingToken(tokens['label'], theme['label'], htmlFontSize);
    applyThemeSizingToken(tokens['p'], theme['p'], htmlFontSize);
    applyThemeSizingToken(tokens['h6'], theme['h6'], htmlFontSize);
    applyThemeSizingToken(tokens['h5'], theme['h5'], htmlFontSize);
    applyThemeSizingToken(tokens['h4'], theme['h4'], htmlFontSize);
    applyThemeSizingToken(tokens['h3'], theme['h3'], htmlFontSize);
    applyThemeSizingToken(tokens['h2'], theme['h2'], htmlFontSize);
    applyThemeSizingToken(tokens['h1'], theme['h1'], htmlFontSize);
    applyThemeSizingToken(tokens['h1-xl'], theme['h1-xl'], htmlFontSize);
    applyThemeSizingToken(tokens['h1-2xl'], theme['h1-2xl'], htmlFontSize);
    applyThemeSizingToken(tokens['h1-3xl'], theme['h1-3xl'], htmlFontSize);
    applyThemeSizingToken(tokens['code'], theme['code'], htmlFontSize);
}

function applyThemeSizingToken(
    token: DesignToken,
    value: number,
    htmlFontSize: number
): void {
    token.setValue(
        `${Math.round((1000 * value * 16) / htmlFontSize) / 1000}rem`
    );
}

function applyFontTokens(
    tokens: FontSizeRelevant<DesignToken>,
    theme: FontSizeRelevant<string>
) {
    applyThemeToken(tokens['label'], theme['label']);
    applyThemeToken(tokens['p'], theme['p']);
    applyThemeToken(tokens['h6'], theme['h6']);
    applyThemeToken(tokens['h5'], theme['h5']);
    applyThemeToken(tokens['h4'], theme['h4']);
    applyThemeToken(tokens['h3'], theme['h3']);
    applyThemeToken(tokens['h2'], theme['h2']);
    applyThemeToken(tokens['h1'], theme['h1']);
    applyThemeToken(tokens['h1-xl'], theme['h1-xl']);
    applyThemeToken(tokens['h1-2xl'], theme['h1-2xl']);
    applyThemeToken(tokens['h1-3xl'], theme['h1-3xl']);
    applyThemeToken(tokens['code'], theme['code']);
}



