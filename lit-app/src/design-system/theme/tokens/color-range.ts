export const colorRange = [500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30];

export interface ColorRange<T = string> {
    readonly 500: T;
    readonly 400: T;
    readonly 300: T;
    readonly 200: T;
    readonly 100: T;
    readonly 90: T;
    readonly 80: T;
    readonly 70: T;
    readonly 60: T;
    readonly 50: T;
    readonly 40: T;
    readonly 30: T;
}
