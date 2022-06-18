import React from 'react';
import styled, { useTheme } from 'styled-components';
import { FontType, ThemeType } from '../../types';



interface StyledTextProps {
  $size: number;
  $type: FontType;
  tag: string;
  $color?: string;
  $isUppercase?: boolean;
  $lineHeight?: number;
  children?: React.ReactNode;
  theme: ThemeType

}

const StyledText = styled(({ theme, children, tag, ...props }: StyledTextProps) =>
  React.createElement(tag, props, children)
)<StyledTextProps>`
  font-size: ${({ $size }) => `${$size}px`};
  line-height: ${({ $lineHeight }) =>
    $lineHeight ? `${$lineHeight}px` : '1.25em'};
  font-family: ${({ theme }) =>
    `${theme.font.family}, serif`};
    font-weight: ${({ theme, $type }) => `${theme.font.weight[$type]}`};
  color: ${({ theme, $color }) => $color || theme.colours.primary};
  text-transform: ${({ $isUppercase }) =>
    $isUppercase ? 'uppercase' : 'none'};
`;

export interface TextProps {
  color?: string;
  isUppercase?: boolean;
  lineHeight?: number;
  size?: number;
  tag?: string;
  type?: FontType;
  children?: React.ReactNode;

}

function Text<T>({
  children,
  tag = 'p',
  type = 'regular',
  size,
  lineHeight,
  color,
  isUppercase = false,
  ...props
}: TextProps & T): JSX.Element {
  const {font} = useTheme() as ThemeType;
  const inputSize = size || font.size.text;
  return (
    <StyledText
      $color={color}
      $isUppercase={isUppercase}
      $lineHeight={lineHeight}
      $size={inputSize}
      $type={type}
      tag={tag}
      {...props}
    >
      {children}
    </StyledText>
  );
}

export default Text;
