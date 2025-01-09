import {DesignToken, StyleElementPropertyTarget} from './design-token';

// Register a target for all tokens (global style management)
DesignToken.registerTarget(new StyleElementPropertyTarget());

export const designTokens = {
    colors: {
        primary: {
            500: new DesignToken('primary-500', '#6200ee'),
            400: new DesignToken('primary-400', '#7f3ce8'),
            300: new DesignToken('primary-300', '#9b5ce8'),
            200: new DesignToken('primary-200', '#b97de3'),
            100: new DesignToken('primary-100', '#d4a9df'),
            90: new DesignToken('primary-90', '#e0b1e6'),
            80: new DesignToken('primary-80', '#e8b7eb'),
            70: new DesignToken('primary-70', '#eabbed'),
            60: new DesignToken('primary-60', '#edc3f0'),
            50: new DesignToken('primary-50', '#f0c9f2'),
            40: new DesignToken('primary-40', '#f3d0f4'),
            30: new DesignToken('primary-30', '#f7d8f6'),
        },
        secondary: {
            500: new DesignToken('secondary-500', '#03dac6'),
            400: new DesignToken('secondary-400', '#03d1b0'),
            300: new DesignToken('secondary-300', '#03b79a'),
            200: new DesignToken('secondary-200', '#03a284'),
            100: new DesignToken('secondary-100', '#038b6e'),
            90: new DesignToken('secondary-90', '#027e61'),
            80: new DesignToken('secondary-80', '#01754f'),
            70: new DesignToken('secondary-70', '#016b45'),
            60: new DesignToken('secondary-60', '#01603b'),
            50: new DesignToken('secondary-50', '#015833'),
            40: new DesignToken('secondary-40', '#014f2b'),
            30: new DesignToken('secondary-30', '#014725'),
        },
        neutral: {
            500: new DesignToken('neutral-500', '#ffffff'),
            400: new DesignToken('neutral-400', '#f1f1f1'),
            300: new DesignToken('neutral-300', '#e3e3e3'),
            200: new DesignToken('neutral-200', '#d4d4d4'),
            100: new DesignToken('neutral-100', '#c5c5c5'),
            90: new DesignToken('neutral-90', '#b7b7b7'),
            80: new DesignToken('neutral-80', '#a8a8a8'),
            70: new DesignToken('neutral-70', '#999999'),
            60: new DesignToken('neutral-60', '#8b8b8b'),
            50: new DesignToken('neutral-50', '#7d7d7d'),
            40: new DesignToken('neutral-40', '#6f6f6f'),
            30: new DesignToken('neutral-30', '#616161'),
        },
        success: {
            500: new DesignToken('success-500', '#000000'),
            400: new DesignToken('success-400', '#141414'),
            300: new DesignToken('success-300', '#292929'),
            200: new DesignToken('success-200', '#3e3e3e'),
            100: new DesignToken('success-100', '#535353'),
            90: new DesignToken('success-90', '#676767'),
            80: new DesignToken('success-80', '#7b7b7b'),
            70: new DesignToken('success-70', '#8f8f8f'),
            60: new DesignToken('success-60', '#a3a3a3'),
            50: new DesignToken('success-50', '#b7b7b7'),
            40: new DesignToken('success-40', '#cbcbcb'),
            30: new DesignToken('success-30', '#dfdfdf'),
        },
        warning: {
            500: new DesignToken('warning-500', '#6200ee'),
            400: new DesignToken('warning-400', '#5a00d8'),
            300: new DesignToken('warning-300', '#5300c2'),
            200: new DesignToken('warning-200', '#4c00ac'),
            100: new DesignToken('warning-100', '#440096'),
            90: new DesignToken('warning-90', '#3c007f'),
            80: new DesignToken('warning-80', '#340069'),
            70: new DesignToken('warning-70', '#2c0053'),
            60: new DesignToken('warning-60', '#24003d'),
            50: new DesignToken('warning-50', '#1c0027'),
            40: new DesignToken('warning-40', '#140011'),
            30: new DesignToken('warning-30', '#0c0000'),
        },
        error: {
            500: new DesignToken('error-500', '#03dac6'),
            400: new DesignToken('error-400', '#03c2b8'),
            300: new DesignToken('error-300', '#03a99e'),
            200: new DesignToken('error-200', '#039f84'),
            100: new DesignToken('error-100', '#039a6a'),
            90: new DesignToken('error-90', '#038e50'),
            80: new DesignToken('error-80', '#037b36'),
            70: new DesignToken('error-70', '#026920'),
            60: new DesignToken('error-60', '#015d10'),
            50: new DesignToken('error-50', '#01510f'),
            40: new DesignToken('error-40', '#00450d'),
            30: new DesignToken('error-30', '#003a0b'),
        },
        black: new DesignToken('black', '#ffffff'),
        white: new DesignToken('white', '#000000'),
        overlay: new DesignToken('overlay', '#6200ee'),
        ai: {
            purple: new DesignToken('ai-purple', '#6200ee'),
            teal: new DesignToken('ai-teal', '#03dac6'),
        },
    },
};


