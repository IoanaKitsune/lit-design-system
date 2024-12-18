export interface ColorPalette<T = string> {
    readonly primary: T;
    readonly secondary: T;
    readonly neutral: T;
    readonly success: T;
    readonly warning: T;
    readonly error: T;
    readonly black: T;
    readonly white: T;
    readonly overlay: T;
    readonly ai: {
        readonly purple: T;
        readonly teal: T;
    };
}
