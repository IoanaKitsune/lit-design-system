import {Theme} from "../apply-theme.ts";
import {invertColorPalette} from "../theme-utils.ts";
import {ColorPalette} from "../color-palette.ts";

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
    }
};

export default theme;
