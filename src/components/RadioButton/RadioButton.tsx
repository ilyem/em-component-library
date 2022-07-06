import React, { useState, useEffect, MouseEventHandler } from "react";
import styled, { useTheme } from "styled-components";
import { getColourMap, getInputState, InputState } from "../../config";
import { ThemeType } from "../../types";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const RadioButtonWrapper = styled.label<{ disabled: boolean }>`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

// Hide checkbox visually
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadioButton = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledIcon = styled(Icon)`
  flex-shrink: 0;
  &.disabled {
    opacity: 0.3;
  }
`;

const Label = styled(Text)`
  margin-left: 8px;
`;

export interface Props {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const RadioButton: React.FC<Props> = ({
  checked = false,
  disabled = false,
  label,
  name,
  value,
  handleChange,
}) => {
  const { colours } = useTheme() as ThemeType;
  const colourMap = getColourMap(colours);
  const [isHovered, setIsHovered] = useState(false);
  const [state, setState] = useState<InputState>(
    getInputState(disabled, isHovered, checked)
  );

  const handleHover = (event: React.MouseEvent<HTMLLabelElement>) => {
    const isHovered = event.type === "mouseenter" && !disabled;
    const checkedState = checked ? InputState.CHECKED : InputState.UNCHECKED;
    setState(isHovered ? InputState.HOVERED : checkedState);
  };

  useEffect(() => {
    const checkedState = checked ? InputState.CHECKED : InputState.UNCHECKED;
    setState(disabled ? InputState.DISABLED : checkedState);
  }, [checked, disabled]);

  return (
    <RadioButtonWrapper
      disabled={disabled}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      htmlFor={value}
    >
      <HiddenRadioButton
        checked={checked}
        disabled={disabled}
        name={name}
        id={value}
        value={value}
        onChange={handleChange}
      />

      <StyledIcon
        color={colourMap[state].icon}
        size={20}
        type={checked ? "radioChecked" : "radioUnchecked"}
      />

      {label && <Label color={colourMap[state].label}>{label}</Label>}
    </RadioButtonWrapper>
  );
};

export default RadioButton;
