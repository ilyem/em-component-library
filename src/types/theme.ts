export interface SizeText {
  title: number;
  subtitle: number;
  boldText: number;
  text: number;
}
export interface SizeSpace {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}
export interface ThemeType {
  colours: {
    primary: string;
    secondary: string;
    accent: string;
    accentLight: string;
    accentDark: string;
    primaryLight: string;
    primaryDark: string;
    disabled: string;
    textOnPrimary: string;
    textOnSecondary: string;
    textPlaceholder: string;
    textOnDisabled: string;
    border: string;
    error: string;
  };
  font: {
    family: string;
    weight: {
      regular: string;
      bold: string;
    };
    size: SizeText;
  };
  border: {
    size: string;
    radius: string;
  };
  spacing: SizeSpace;
}
export type FontType = "regular" | "bold";
