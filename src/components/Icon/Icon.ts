import React from "react";
import styled from "styled-components";
import icons from "../../assets/icons";

export type iconType = keyof typeof icons;

export type Props = {
  type: iconType;
  color?: string;
  disableHover?: boolean;
  hasPointer?: boolean;
  hoverColor?: string;
  noFill?: boolean;
  rotate?: boolean;
  size?: number;
};

const Icon = styled(
  ({
    type,
    color,
    disableHover,
    size,
    rotate,
    noFill,
    hasPointer,
    ...props
  }: Props & React.HTMLAttributes<SVGElement>) => {
    if (!icons[type]) {
      throw new Error(`Cannot find type "${type}" in the list of icons`);
    }

    return React.createElement(icons[type], props);
  }
)`
  ${({ size }) =>
    size
      ? `
        width: ${size}px;
        height: ${size}px;
        min-width: ${size}px;
        min-height: ${size}px;
      `
      : ""}
  ${({ rotate }) => (rotate ? "transform: rotate(180deg)" : "")}
${({ disableHover, hasPointer }) =>
    hasPointer && !disableHover ? "cursor: pointer" : ""};
  ${({ disableHover }) => (disableHover ? "pointer-events: none;" : "")}
  path {
    transition: 0.25s ease;
    ${({ color, noFill, theme }) =>
      !noFill && { fill: color || theme.colours.primary }};
  }
  &:hover {
    path {
      fill: ${({ hoverColor, theme }) => hoverColor || theme.colours.hover};
    }
  }
`;

export default Icon;
