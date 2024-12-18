import {Theme} from "../apply-theme.ts";
import {invertColorPalette} from "../theme-utils.ts";

const lightColors = {
    primary: '#002A52',
    secondary: '#FF9B5A',
    neutral: '#ABABAB',
    success: '#02E28C',
    warning: '#C95E00',
    error: '#FFAC9A',
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
