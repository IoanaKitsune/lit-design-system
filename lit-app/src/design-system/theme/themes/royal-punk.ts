import {Theme} from "../apply-theme.ts";
import {invertColorPalette} from "../theme-utils.ts";
import {ColorPalette} from "../color-palette.ts";

const lightColors: ColorPalette = {
    primary: {
        500: '#220069',
        400: '#370D90',
        300: '#582BB8',
        200: '#6433CD',
        100: '#7442E2',
        90: '#8A59F4',
        80: '#A075FD',
        70: '#B592FF',
        60: '#CBB3FF',
        50: '#E1D2FF',
        40: '#F0E9FF',
        30: '#F8F5FF',
    },
    secondary: {
        500: '#002B2E',
        400: '#00464B',
        300: '#00656C',
        200: '#00787F',
        100: '#009CA5',
        90: '#00B6C1',
        80: '#02D4E1',
        70: '#20E1EC',
        60: '#77EEF5',
        50: '#A4F6FB',
        40: '#C6FCFF',
        30: '#E2FDFF',
    },
    neutral: {
        500: '#2D2E31',
        400: '#444445',
        300: '#575757',
        200: '#696969',
        100: '#818181',
        90: '#939393',
        80: '#ABABAB',
        70: '#CFCFCF',
        60: '#E0E0E0',
        50: '#ECECEC',
        40: '#F3F3F3',
        30: '#F8F8F8',
    },
    success: {
        500: '#003810',
        400: '#005618',
        300: '#007C23',
        200: '#008E28',
        100: '#0DAA39',
        90: '#29B951',
        80: '#38D363',
        70: '#57E57F',
        60: '#80F3A0',
        50: '#99F9B4',
        40: '#BBFACD',
        30: '#E4FFEC',
    },
    warning: {
        500: '#432000',
        400: '#653000',
        300: '#924500',
        200: '#B35400',
        100: '#DC6E0D',
        90: '#EE8426',
        80: '#F39746',
        70: '#FFAF69',
        60: '#FFC089',
        50: '#FFD6B1',
        40: '#FFE6D0',
        30: '#FFF6ED',
    },
    error: {
        500: '#4A0500',
        400: '#690700',
        300: '#971006',
        200: '#A91F16',
        100: '#CA3A30',
        90: '#DE473D',
        80: '#F35D51',
        70: '#FF867B',
        60: '#FBAEA7',
        50: '#FFC4BE',
        40: '#FFDFDC',
        30: '#FFEFED',
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
