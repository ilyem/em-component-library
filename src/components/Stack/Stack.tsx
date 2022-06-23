import React from "react";
import styled, { useTheme } from "styled-components";
import { SizeSpace, ThemeType } from "../../types";

const StyledStack = styled.div<{ $spaceSize: string }>`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: ${({ $spaceSize }) => $spaceSize};
  }
`;

type StackProps = React.ComponentPropsWithoutRef<"div"> & {
  space?: keyof SizeSpace;
};

const Stack: React.FC<StackProps> = ({ children, space, ...props }) => {
  const { spacing } = useTheme() as ThemeType;
  const spaceSize = space ? spacing[space] : "0px";
  return (
    <StyledStack $spaceSize={spaceSize} {...props}>
      {children}
    </StyledStack>
  );
};

export default Stack;
