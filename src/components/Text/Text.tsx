import React from "react";
import styled, { useTheme } from "styled-components";
import { FontType, SizeText, ThemeType } from "../../types";

interface StyledTextProps {
  $size: number;
  tag: string;
  $color?: string;
  $isUppercase?: boolean;
  $lineHeight?: number;
  children?: React.ReactNode;
  theme: ThemeType;
  $weight: FontType;
}

const StyledText = styled(
  ({ theme, children, tag, ...props }: StyledTextProps) =>
    React.createElement(tag, props, children)
)<StyledTextProps>`
  font-size: ${({ $size }) => `${$size}px`};
  line-height: ${({ $lineHeight }) =>
    $lineHeight ? `${$lineHeight}px` : "1.25em"};
  font-family: ${({ theme }) => `${theme.font.family}, serif`};
  font-weight: ${({ theme, $weight }) => `${theme.font.weight[$weight]}`};
  color: ${({ theme, $color }) => $color || theme.colours.primary};
  text-transform: ${({ $isUppercase }) =>
    $isUppercase ? "uppercase" : "none"};
`;

export interface TextProps {
  color?: string;
  isUppercase?: boolean;
  lineHeight?: number;
  size?: number;
  tag?: string;
  type?: keyof SizeText;
  children?: React.ReactNode;
  weight?: FontType;
}

function Text<T>({
  children,
  tag = "p",
  type = "text",
  size,
  lineHeight,
  weight = "regular",
  color,
  isUppercase = false,
  ...props
}: TextProps & T): JSX.Element {
  const { font } = useTheme() as ThemeType;
  const inputSize = size || font.size[type];
  return (
    <StyledText
      $color={color}
      $isUppercase={isUppercase}
      $lineHeight={lineHeight}
      $size={inputSize}
      $weight={weight}
      tag={tag}
      {...props}
    >
      {children}
    </StyledText>
  );
}

export default Text;
