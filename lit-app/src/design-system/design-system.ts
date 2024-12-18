import { NamedTheme, Theme, ThemeMode, applyTheme } from './theme/apply-theme.ts';
import { LitElement } from 'lit';
import {DesignToken} from "./design-token.ts";

export interface DesignSystemConfig {
    readonly assetsUrl: string;
    readonly theme: Theme | NamedTheme;
    readonly themeMode: ThemeMode;
    readonly htmlFontSize: number;
    readonly root: LitElement | HTMLElement | Document;  // Change to LitElement for Lit-based components
    readonly prefix: string;
}

export const defaultDesignSystemConfig: DesignSystemConfig = {
    prefix: 'nova',
    assetsUrl: 'https://cdn.matrix42.design/assets',
    theme: 'nova',
    themeMode: 'light',
    root: document,
    htmlFontSize: 16,
};

export function provideNovaDesignSystem(c?: Partial<DesignSystemConfig>): void {
    const config: DesignSystemConfig = {
        ...defaultDesignSystemConfig,
        ...c,
    };

    // Apply the selected theme and mode
    applyTheme(config.theme, config.themeMode, config.htmlFontSize);
    // DesignToken.registerDefaultStyleTarget(
    //     config.root instanceof Document ? config.root : config.root.style
    // );
}
