import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components";

import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { ThemeType } from "../../types";
import { getColourMap, getInputState, InputState } from "../../config";

const CheckboxWrapper = styled.label`
  position: relative;
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  top: 0;
  left: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Label = styled(Text)`
  margin-left: 8px;
`;
export interface Props {
  checked: boolean;
  disabled?: boolean;
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<Props> = ({
  checked,
  disabled = false,
  label,
  name,
  value,
  onChange,
}) => {
  const { colours } = useTheme() as ThemeType;

  const colourMap = getColourMap(colours);
  const [isChecked, setIsChecked] = useState(checked);
  const [isHovered, setIsHovered] = useState(false);

  const [state, setState] = useState<InputState>(
    getInputState(disabled, isHovered, isChecked)
  );

  const handleHover = (event: React.MouseEvent<HTMLLabelElement>) => {
    const isHovered = event.type === "mouseenter" && !disabled;
    const checkedState = isChecked ? InputState.CHECKED : InputState.UNCHECKED;
    setState(isHovered ? InputState.HOVERED : checkedState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    setState(checked ? InputState.UNCHECKED : InputState.CHECKED);
    if (onChange) onChange(event);
  };
  return (
    <CheckboxWrapper
      htmlFor={name}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <HiddenCheckbox
        checked={isChecked}
        disabled={disabled}
        id={value}
        name={name}
        onChange={handleChange}
        type="checkbox"
        value={value}
      />
      <Icon
        color={colourMap[state].icon}
        type={isChecked ? "checkboxChecked" : "checkboxUnchecked"}
      />
      {label && <Label color={colourMap[state].label}>{label}</Label>}
    </CheckboxWrapper>
  );
};

export default Checkbox;
