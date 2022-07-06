import { ThemeType } from "../types";

export const themeDefault: ThemeType = {
  colours: {
    primary: "#303f9f",
    secondary: "#ffffff",
    accent: "#ef5350",
    accentLight: "#ff867c",
    accentDark: "#b61827",
    primaryLight: "#666ad1",
    primaryDark: "#001970",
    disabled: "#cccccc",
    textOnPrimary: "#ffffff",
    textOnSecondary: "#616161",
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
export const getColourMap = (colours: ThemeType["colours"]) => ({
  unchecked: {
    label: colours.textOnSecondary,
    icon: colours.textOnSecondary,
  },
  checked: {
    label: colours.textOnSecondary,
    icon: colours.primary,
  },
  hovered: {
    label: colours.primary,
    icon: colours.primary,
  },
  disabled: {
    label: colours.disabled,
    icon: colours.disabled,
  },
});

export enum InputState {
  DISABLED = "disabled",
  HOVERED = "hovered",
  CHECKED = "checked",
  UNCHECKED = "unchecked",
}
export const getInputState = (
  disabled: boolean,
  hovered: boolean,
  checked: boolean
): InputState => {
  if (disabled) {
    return InputState.DISABLED;
  }
  if (hovered) {
    return InputState.HOVERED;
  }
  if (checked) {
    return InputState.CHECKED;
  }
  return InputState.UNCHECKED;
};
