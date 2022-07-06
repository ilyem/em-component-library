import React from "react";
import styled, { useTheme } from "styled-components";
import { SizeSpace, ThemeType } from "../../types";

const StyledStack = styled.div<{
  $spaceSize: string;
  $direction: "column" | "row";
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  & > *:not(:last-child) {
    ${({ $direction, $spaceSize }) =>
      ` margin-${$direction == "column" ? "bottom" : "right"}: ${$spaceSize};`};
  }
`;

type StackProps = React.ComponentPropsWithoutRef<"div"> & {
  space?: keyof SizeSpace;
  direction?: "column" | "row";
};

const Stack: React.FC<StackProps> = ({
  children,
  space = "xs",
  direction = "column",
  ...props
}) => {
  const { spacing } = useTheme() as ThemeType;
  const spaceSize = spacing[space];
  return (
    <StyledStack $spaceSize={spaceSize} $direction={direction} {...props}>
      {children}
    </StyledStack>
  );
};

export default Stack;
