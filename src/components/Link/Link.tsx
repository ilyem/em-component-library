import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

const StyledLink = styled(ReactLink)`
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.colours.primaryLight};

  :hover {
    color: ${({ theme }) => theme.colours.primaryDark};
  }
`;

export interface Props {
  to: string;
  children: ReactNode;
}

const Link: React.FC<Props> = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
