import {Theme} from "../apply-theme.ts";
import {ColorPalette} from "../tokens/color-palette.ts";
import {shadows, invertColorPalette} from "../tokens/token-utils.ts";
import {spacings, Spacings} from "../tokens/spacings.ts";

const shadowLightColor = 'rgba(20, 20, 20, 0.1)';
const shadowDarkColor = 'rgba(20, 20, 20, 0.4)';

const shadowBuilder = {
    light: shadows({
        xs: [[0, 0.063, 0.125, 0, shadowLightColor]],
        sm: [[0, 0.125, 0.25, 0, shadowLightColor]],
        md: [[0, 0.25, 0.5, 0, shadowLightColor]],
        lg: [[0, 0.5, 1, 0, shadowLightColor]],
        xl: [[0, 1, 2, 0, shadowLightColor]],
    }),
    dark: shadows({
        xs: [[0, 0.063, 0.125, 0, shadowDarkColor]],
        sm: [[0, 0.125, 0.25, 0, shadowDarkColor]],
        md: [[0, 0.25, 0.5, 0, shadowDarkColor]],
        lg: [[0, 0.5, 1, 0, shadowDarkColor]],
        xl: [[0, 1, 2, 0, shadowDarkColor]],
    }),
};

const baseSize = 0.25;

const spacingBuilder = () => {
    const result = {} as Spacings;
    for (const key of spacings) {
        result[key as unknown as keyof Spacings] = Number(key) * baseSize;
    }
    return result;
};

const lightColors: ColorPalette = {
    primary: {
        500: '#002A52',
        400: '#003C75',
        300: '#0057AA',
        200: '#0061BF',
        100: '#006DD6',
        90: '#0478E7',
        80: '#4BA6FD',
        70: '#6BB7FF',
        60: '#82C2FF',
        50: '#B6DCFF',
        40: '#DCEEFF',
        30: '#F1F7FE',
    },
    secondary: {
        500: '#4A1D00',
        400: '#6E2C00',
        300: '#963C00',
        200: '#A94300',
        100: '#BB4B00',
        90: '#D75500',
        80: '#F5863D',
        70: '#FF9B5A',
        60: '#FFAF7A',
        50: '#FFD3B7',
        40: '#FFE3D2',
        30: '#FFF5EF',
    },
    neutral: {
        500: '#2D2E31',
        400: '#444445',
        300: '#575757',
        200: '#616161',
        100: '#6E6D6D',
        90: '#7C7C7C',
        80: '#ABABAB',
        70: '#CFCFCF',
        60: '#E0E0E0',
        50: '#ECECEC',
        40: '#F3F3F3',
        30: '#F8F8F8',
    },
    success: {
        500: '#00311F',
        400: '#00452B',
        300: '#005837',
        200: '#007146',
        100: '#027E4F',
        90: '#00AF6D',
        80: '#00BC74',
        70: '#00D381',
        60: '#02E28C',
        50: '#48F8B4',
        40: '#8FFFD5',
        30: '#E1FFF4',
    },
    warning: {
        500: '#421F00',
        400: '#663000',
        300: '#8F4300',
        200: '#984700',
        100: '#AF5301',
        90: '#C95E00',
        80: '#F48320',
        70: '#FF9F4B',
        60: '#FEB06B',
        50: '#FFD2AB',
        40: '#FFE6CF',
        30: '#FFF6ED',
    },
    error: {
        500: '#571000',
        400: '#7B1700',
        300: '#A72508',
        200: '#BD2402',
        100: '#D12D08',
        90: '#E7401B',
        80: '#FF7A5C',
        70: '#FD9D87',
        60: '#FFAC9A',
        50: '#FFCFC4',
        40: '#FFE6E0',
        30: '#FFF2EE',
    },
    black: '#141414',
    white: '#FFFFFF',
    overlay: 'rgba(20,20,20,0.4)',
    ai: {
        purple: '#7442E2',
        teal: '#02D4E1',
    },
};

const theme: Theme = {
    color: {
        light: lightColors,
        dark: {
            ...invertColorPalette(lightColors),
            ai: {
                purple: '#B18DFF',
                teal: '#0DF1FF',
            },
        },
    },
    fontFamily: {
        sans: 'Roboto, sans-serif',
        mono: 'Courier New, monospace'
    },
    fontSize: {
        label: 0.75,
        p: 0.875,
        h6: 1,
        h5: 1.125,
        h4: 1.25,
        h3: 1.5,
        h2: 1.875,
        h1: 2.25,
        'h1-xl': 3,
        'h1-2xl': 3.75,
        'h1-3xl': 4.5,
        code: 0.875,
    },
    lineHeight: {
        label: '133.333%',
        p: '171.429%',
        h6: '125%',
        h5: '133.333%',
        h4: '120%',
        h3: '133.333%',
        h2: '120%',
        h1: '122.222%',
        'h1-xl': '125%',
        'h1-2xl': '120%',
        'h1-3xl': '122.222%',
        code: '171.429%',
    },
    //TODO reference base font-weights (display-xs -> semibold, etc.)
    fontWeight: {
        label: '400',
        p: '400',
        h6: '600',
        h5: '600',
        h4: '600',
        h3: '600',
        h2: '600',
        h1: '600',
        'h1-xl': '600',
        'h1-2xl': '600',
        'h1-3xl': '600',
        code: '400',
        regular: '400',
        semibold: '600',
        bold: '700',
    },
    shadow: {
        light: {
            box: shadowBuilder.light.box(),
            drop: shadowBuilder.light.drop(),
        },
        dark: {
            box: shadowBuilder.dark.box(),
            drop: shadowBuilder.dark.drop(),
        },
    },
    borderWidth: {
        xs: 0.063,
        sm: 0.125,
    },
    borderRadius: {
        xs: 0.5,
        sm: 0.75,
        md: 1,
        lg: 1.25,
        xl: 1.625,
    },
    iconSize: {
        xs: 1,
        sm: 1.25,
        md: 1.5,
    },
    spacings: spacingBuilder(),
};

export default theme;
