import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeType } from "../../types";
import Text from "../Text";
import { TextProps } from "../Text/Text";

const StyledLink = styled.a<{
  $colours: { colour: string; hoverColour: string };
}>`
  font-family: ${({ theme }) => theme.font.family};
  p {
    color: ${({ $colours }) => $colours.colour};

    :hover {
      color: ${({ $colours }) => $colours.hoverColour};
    }
  }
`;

export interface Props extends TextProps {
  to: string;
  children: ReactNode;
  background?: "primary" | "secondary";
}

const Link: React.FC<Props> = ({
  to,
  children,
  background = "secondary",
  ...props
}) => {
  const { colours } = useTheme() as ThemeType;

  const linkColours = {
    primary: {
      colour: colours.textOnPrimary,
      hoverColour: colours.accent,
    },
    secondary: {
      colour: colours.primaryLight,
      hoverColour: colours.primaryDark,
    },
  };

  return (
    <StyledLink $colours={linkColours[background]} href={to}>
      <Text {...props}>{children}</Text>
    </StyledLink>
  );
};

export default Link;
