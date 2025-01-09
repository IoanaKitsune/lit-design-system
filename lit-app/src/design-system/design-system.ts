import { NamedTheme, Theme, ThemeMode, applyTheme } from './theme/apply-theme.ts';
import { LitElement } from 'lit';
import {Button} from "../components/button.ts";

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

export function registerComponents(config: DesignSystemConfig): void {
    if (!customElements.get(`lit-button`)) {
        customElements.define(`lit-button`, Button);
    }

}

let designSystemProvided = false;

export function provideNovaDesignSystem(c?: Partial<DesignSystemConfig>): void {
    if (designSystemProvided) return;

    const config: DesignSystemConfig = {
        ...defaultDesignSystemConfig,
        ...c,
    };

    applyTheme(config.theme, config.themeMode, config.htmlFontSize);
    registerComponents(config);

    designSystemProvided = true;
}
