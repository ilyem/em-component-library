import React from "react";
import styled from "styled-components";
import { ThemeType } from "../../types";
import { useTheme } from "styled-components";
import { themeDefault } from "../../config/theme";

type ButtonType = "accent" | "light";

const StyledButton = styled.button<{
  $colours: { [prop: string]: string };
  $coloursHovered: { [prop: string]: string };
}>`
  cursor: pointer;
  border: ${({ theme }) => `${theme.border.size} solid`};
  border-radius: ${({ theme }) => theme.border.radius};
  ${({ $colours }) => $colours};
  padding: ${({ theme }) => theme.spacing.s};
  min-width: 100px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.boldText}px;
  &:disabled,
  &:disabled:hover {
    pointer-events: none;
  }
  :hover {
    ${({ $coloursHovered }) => $coloursHovered};
  }
`;

export interface Props {
  label: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  type = "accent",
  disabled = false,
}) => {
  const { colours } = useTheme() as ThemeType;

  const stylesMap = {
    accent: {
      enabled: {
        "background-color": colours.primary,
        color: colours.textOnPrimary,
        "border-color": colours.primary,
      },
      disabled: {
        "background-color": colours.disabled,
        color: colours.textOnDisabled,
        "border-color": "transparent",
      },
      hovered: {
        "background-color": colours.primaryDark,
        color: colours.textOnPrimary,
        "border-color": colours.primaryDark,
      },
    },
    light: {
      enabled: {
        "background-color": "transparent",
        color: colours.primary,
        "border-color": colours.primary,
      },
      disabled: {
        "background-color": "transparent",
        color: colours.disabled,
        "border-color": colours.disabled,
      },
      hovered: {
        "background-color": "transparent",
        color: colours.primaryDark,
        "border-color": colours.primaryDark,
      },
    },
  };

  const buttonColours = disabled
    ? stylesMap[type].disabled
    : stylesMap[type].enabled;

  return (
    <StyledButton
      disabled={disabled}
      $colours={buttonColours}
      $coloursHovered={stylesMap[type].hovered}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
