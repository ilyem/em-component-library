import React from "react";
import styled from "styled-components";
import { ThemeType } from "../../types";
import { useTheme } from "styled-components";
import Text from "../Text";

type ButtonType = "primary" | "light";

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
  sizeText?: number;
  isAccent?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  type = "primary",
  isAccent = false,
  disabled = false,
  sizeText,
}) => {
  const { colours } = useTheme() as ThemeType;
  const colourPrimary = isAccent ? colours.accent : colours.primary;
  const colourHover = isAccent ? colours.accentLight : colours.primaryDark;
  const stylesMap = {
    primary: {
      enabled: {
        "background-color": colourPrimary,
        color: colours.textOnPrimary,
        "border-color": colourPrimary,
      },
      disabled: {
        "background-color": colours.disabled,
        color: colours.textOnDisabled,
        "border-color": "transparent",
      },
      hovered: {
        "background-color": colourHover,
        color: colours.textOnPrimary,
        "border-color": colourHover,
      },
    },
    light: {
      enabled: {
        "background-color": "transparent",
        color: colourPrimary,
        "border-color": colourPrimary,
      },
      disabled: {
        "background-color": "transparent",
        color: colours.disabled,
        "border-color": colours.disabled,
      },
      hovered: {
        "background-color": "transparent",
        color: colourHover,
        "border-color": colourHover,
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
      <Text
        size={sizeText}
        weight="bold"
        isUppercase
        color={buttonColours.color}
      >
        {label}
      </Text>
    </StyledButton>
  );
};

export default Button;
