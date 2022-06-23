import { ThemeType } from "../types";

export const themeDefault: ThemeType = {
  colours: {
    primary: "#303f9f",
    secondary: "#ffffff",
    accent: "#c85a54",
    primaryLight: "#666ad1",
    primaryDark: "#001970",
    disabled: "#cccccc",
    textOnPrimary: "#ffffff",
    textOnSecondary: "#000000",
    textPlaceholder: "#0000004d",
    textOnDisabled: "#888888",
    border: "#0000001f",
    error: "#C8102E",
  },
  font: {
    family: "Verdana, sans-serif",
    weight: {
      regular: "400",
      bold: "700",
    },
    size: {
      title: 34,
      subtitle: 24,
      boldText: 16,
      text: 13,
    },
  },
  border: {
    size: "2px",
    radius: "4px",
  },
  spacing: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px",
  },
};
