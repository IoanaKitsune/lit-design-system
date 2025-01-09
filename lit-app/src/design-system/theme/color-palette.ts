import { ColorRange } from './color-range';

export interface ColorPalette<T = string> {
    readonly primary: ColorRange<T>;
    readonly secondary: ColorRange<T>;
    readonly neutral: ColorRange<T>;
    readonly success: ColorRange<T>;
    readonly warning: ColorRange<T>;
    readonly error: ColorRange<T>;
    readonly black: T;
    readonly white: T;
    readonly overlay: T;
    readonly ai: {
        readonly purple: T;
        readonly teal: T;
    };
}
