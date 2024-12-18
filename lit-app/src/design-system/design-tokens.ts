import {DesignToken, StyleElementPropertyTarget} from './design-token';

// Register a target for all tokens (global style management)
DesignToken.registerTarget(new StyleElementPropertyTarget());

export const designTokens = {
    colors: {
        primary: new DesignToken('primary', '#6200ee'),
        secondary: new DesignToken('secondary', '#03dac6'),
        neutral: new DesignToken('neutral', '#ffffff'),
        success: new DesignToken('success', '#000000'),
        warning: new DesignToken('warning', '#6200ee'),
        error: new DesignToken('error', '#03dac6'),
        black: new DesignToken('black', '#ffffff'),
        white: new DesignToken('white', '#000000'),
        overlay: new DesignToken('overlay', '#6200ee'),
        ai: {
            purple: new DesignToken('purple', '#6200ee'),
            teal: new DesignToken('teal', '#03dac6'),
        }
    },
};

