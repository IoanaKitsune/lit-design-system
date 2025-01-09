export interface FontSizeRelevant<T = number> {
  readonly label: T;
  readonly p: T;
  readonly h6: T;
  readonly h5: T;
  readonly h4: T;
  readonly h3: T;
  readonly h2: T;
  readonly h1: T;
  readonly 'h1-xl': T;
  readonly 'h1-2xl': T;
  readonly 'h1-3xl': T;
  readonly code: T;
}

export interface FontFamilies<T = string> {
  readonly sans: T;
  readonly mono: T;
}

export interface FontSizes<T = number> extends FontSizeRelevant<T> {}

export interface LineHeights<T = string> extends FontSizeRelevant<T> {}

export interface FontWeights<T = string> extends FontSizeRelevant<T> {
  readonly regular: T;
  readonly semibold: T;
  readonly bold: T;
}
