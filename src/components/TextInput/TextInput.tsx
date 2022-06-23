import React, { RefObject } from "react";
import styled, { useTheme } from "styled-components";
import Text from "../Text/Text";
import { ThemeType } from "../../types";

const Wrapper = styled.div<{ $alignVertical: boolean }>`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: ${({ $alignVertical }) =>
    $alignVertical ? "column" : "row"};
`;

const Label = styled((props) => <Text tag="label" {...props} />)`
  color: ${({ $error, theme }) =>
    $error ? theme.colours.error : theme.colours.primary};
  margin: ${({ $alignVertical }) =>
    $alignVertical ? "0 8px 4px 0" : "8px 8px 0 0"};
  white-space: nowrap;
`;

const Input = styled.input<{ $error: boolean; theme: ThemeType }>`
  && {
    font-family: ${({ theme }) => theme.font.family}, sans-serif;
    font-size: 13px;
    letter-spacing: 0.3px;
    line-height: 16px;
    color: ${({ theme }) => theme.colours.textOnSecondary};
    width: 100%;
    border-bottom: ${({ theme }) => theme.border.size} solid
      ${({ theme }) => theme.colours.border};
    height: 35px;
    padding: 0 24px 0 12px;
    text-overflow: ellipsis;
    &:placeholder-shown {
      border-color: ${({ theme }) => theme.colours.border};
    }
    &:hover {
      border-color: ${({ theme }) => theme.colours.primary};
    }
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colours.primary};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colours.textPlaceholder};
    }
    ${({ $error, theme }) =>
      $error ? `border-color: ${theme.colours.error};` : ""}
    &:disabled {
      cursor: not-allowed;
      border-color: ${({ theme }) => theme.colours.disabled};
    }
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Error = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.s};
`;

export type TextInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "ref"
> & {
  error?: string;
  inputRef?: RefObject<HTMLInputElement> | ((ref: HTMLInputElement) => void);
  label?: string;
  labelPlacement?: "top" | "left";
  testId?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  error,
  label,
  labelPlacement = "left",
  type = "text",
  inputRef,
  name,
  testId,
  ...props
}) => {
  const { colours } = useTheme() as ThemeType;

  const alignVertical = labelPlacement === "top";
  return (
    <Wrapper $alignVertical={alignVertical}>
      {label && (
        <Label $alignVertical={alignVertical} $error={!!error} htmlFor={name}>
          {label}
        </Label>
      )}

      <InputWrapper>
        <Input
          {...props}
          ref={inputRef}
          $error={!!error}
          data-testid={testId}
          name={name}
          type={type}
        />

        {error ? <Error color={colours.error}>{error}</Error> : null}
      </InputWrapper>
    </Wrapper>
  );
};

export default TextInput;
