export const spacings = [
  0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32,
  36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
];

// No readonly properties to make initialization easier
export interface Spacings<T = number> {
  0.5: T;
  1: T;
  1.5: T;
  2: T;
  2.5: T;
  3: T;
  3.5: T;
  4: T;
  5: T;
  6: T;
  7: T;
  8: T;
  9: T;
  10: T;
  12: T;
  14: T;
  16: T;
  20: T;
  24: T;
  28: T;
  32: T;
  36: T;
  40: T;
  44: T;
  48: T;
  52: T;
  56: T;
  60: T;
  64: T;
  72: T;
  80: T;
  96: T;
}
