import { DesignToken, StyleElementPropertyTarget } from './design-token';

// Register a target for all tokens (global style management)
DesignToken.registerTarget(new StyleElementPropertyTarget());

// Design Tokens Object
export const designTokens = {
    colors: {
        primary: new DesignToken('color-primary', '#6200ee'),
        secondary: new DesignToken('color-secondary', '#03dac6'),
        background: new DesignToken('color-background', '#ffffff'),
        text: new DesignToken('color-text', '#000000'),
    },
    spacing: {
        small: new DesignToken('spacing-small', '8px'),
        medium: new DesignToken('spacing-medium', '12px'),
        large: new DesignToken('spacing-large', '16px'),
    },
    typography: {
        fontSize: {
            small: new DesignToken('font-size-small', '12px'),
            medium: new DesignToken('font-size-medium', '16px'),
            large: new DesignToken('font-size-large', '20px'),
        },
        fontWeight: {
            regular: new DesignToken('font-weight-regular', '400'),
            bold: new DesignToken('font-weight-bold', '700'),
        },
    },
};

