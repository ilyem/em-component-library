import React, { ReactNode } from "react";
import styled from "styled-components";
import Text from "../Text";
import { TextProps } from "../Text/Text";

const StyledLink = styled.a`
  font-family: ${({ theme }) => theme.font.family};
  p {
    color: ${({ theme }) => theme.colours.primaryLight};

    :hover {
      color: ${({ theme }) => theme.colours.primaryDark};
    }
  }
`;

export interface Props extends TextProps {
  to: string;
  children: ReactNode;
}

const Link: React.FC<Props> = ({ to, children, ...props }) => {
  return (
    <StyledLink href={to}>
      <Text {...props}>{children}</Text>
    </StyledLink>
  );
};

export default Link;
