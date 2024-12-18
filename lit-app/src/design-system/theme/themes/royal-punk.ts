import {Theme} from "../apply-theme.ts";
import {invertColorPalette} from "../theme-utils.ts";

const lightColors = {
    primary: '#00BA52',
    secondary: '#FF9B8A',
    neutral: '#AAABAB',
    success: '#02F28C',
    warning: '#CB1E00',
    error: '#DE473D',
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
