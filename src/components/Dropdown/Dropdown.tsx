import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import RadioButton from "../RadioButton";
import Checkbox from "../Checkbox";
import Icon from "../Icon";
import Text from "../Text";
import { ThemeType } from "../../types";

const Wrapper = styled.div<{ $alignVertical: boolean }>`
  display: flex;
  flex-direction: ${({ $alignVertical }) =>
    $alignVertical ? "column" : "row"};
`;
const Select = styled.select`
  display: none;
`;
const SelectionWrapper = styled.div`
  position: relative;
  min-width: 320px;
  flex: 1;
`;
const SelectedWrapper = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.border.radius};
  border-bottom: ${({ theme }) => theme.border.size} solid
    ${({ theme }) => theme.colours.border};
  cursor: pointer;
  padding: 0 6px 0 14px;
`;

const DropdownWrapper = styled.div<{ $showDropdown: boolean }>`
  display: ${({ $showDropdown }) => ($showDropdown ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 0;
  border-radius: ${({ theme }) => theme.border.radius};
  border-bottom: ${({ theme }) => theme.border.size} solid
    ${({ theme }) => theme.colours.border};
  box-shadow: 0 1px 40px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 35px;
  > svg {
    position: absolute;
    z-index: 1;
    top: 8px;
    right: 7px;
    cursor: pointer;
  }
`;
const OptionsWrapper = styled.div`
  max-height: 187px;
  overflow-y: auto;
  scrollbar-width: thin;
  display: flex;
  position: sticky;
  cursor: pointer;
  background: white;
`;
const OptionsSpacer = styled.div`
  padding: 12px;
`;

const RowWrapper = styled.div`
  &:last-child > label {
    margin-bottom: 0;
  }
`;
const LabelWrapper = styled.div<{ $alignVertical: boolean }>`
  display: flex;
  margin: ${({ $alignVertical }) =>
    $alignVertical ? "0 8px 4px 0" : "8px 8px 0 0"};
`;
interface DropdownOption {
  id: string;
  value: string;
  isSelected?: boolean;
}
const getSelectedOptions = (options: DropdownOption[]): DropdownOption[] => {
  return options.filter((option) => option.isSelected);
};
const setSelectedOptions = (
  options: DropdownOption[],
  selectedId: string,
  isMultiselect: boolean
): DropdownOption[] => {
  return options.map((option) => {
    if (isMultiselect) {
      if (option.value === selectedId) {
        return {
          ...option,
          isSelected: !option.isSelected,
        };
      }
      return { ...option };
    }
    return {
      ...option,
      isSelected: option.value === selectedId,
    };
  });
};

export interface Props {
  options: DropdownOption[];
  name: string;
  placeholder: string;
  label: string;
  labelPlacement?: "top" | "left";
  isMultiselect: boolean;
  onSelect: (value: DropdownOption["value"]) => void;
}
const Dropdown: React.FC<Props> = ({
  options,
  name,
  placeholder,
  label,
  labelPlacement = "left",
  isMultiselect,
  onSelect,
}) => {
  const { colours } = useTheme() as ThemeType;
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(getSelectedOptions(options));
  const [dropdownOptions, setDropdownOptions] = useState(options);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const alignVertical = labelPlacement === "top";

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      !dropdownRef.current ||
      !(dropdownRef && dropdownRef.current.contains(target))
    ) {
      setShow(false);
    }
  };
  const handleShowOptions = () => {
    setShow(true);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  const handleChange = (event: ChangeEvent) => {
    const selectedId = event.target.id;
    const updatedOptions = setSelectedOptions(
      dropdownOptions,
      selectedId,
      isMultiselect
    );
    console.log(updatedOptions);
    const selectedOptions = getSelectedOptions(updatedOptions);
    setSelected(selectedOptions);
    setDropdownOptions(updatedOptions);
    onSelect(event.target.id);
  };
  return (
    <Wrapper $alignVertical={alignVertical}>
      <Select id={name} multiple={isMultiselect} name={name}>
        {dropdownOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </Select>

      <LabelWrapper $alignVertical={alignVertical}>
        <Text tag="label" htmlFor={name} color={colours.primary}>
          {label}
        </Text>
      </LabelWrapper>

      <SelectionWrapper>
        <SelectedWrapper onClick={handleShowOptions}>
          {selected.length ? (
            <Text>{selected.map((option) => option.value).join(", ")}</Text>
          ) : (
            <Text color={colours.textPlaceholder}>{placeholder}</Text>
          )}
          <Icon
            color={colours.textOnSecondary}
            hoverColor={colours.primary}
            type="chevronDown"
          />
        </SelectedWrapper>
        <DropdownWrapper ref={dropdownRef} $showDropdown={show}>
          <Icon
            color={colours.textOnSecondary}
            hoverColor={colours.primary}
            onClick={handleToggle}
            type="chevronUp"
          />

          <OptionsWrapper>
            {dropdownOptions.length > 0 && (
              <OptionsSpacer>
                {dropdownOptions.map(({ value, isSelected }) => {
                  return (
                    <RowWrapper key={value}>
                      {isMultiselect ? (
                        <Checkbox
                          checked={!!isSelected}
                          label={value}
                          onChange={handleChange}
                          name={value}
                          value={value}
                        />
                      ) : (
                        <RadioButton
                          checked={isSelected}
                          name="dropdownOptions"
                          handleChange={handleChange}
                          label={value}
                          value={value}
                        />
                      )}
                    </RowWrapper>
                  );
                })}
              </OptionsSpacer>
            )}
          </OptionsWrapper>
        </DropdownWrapper>
      </SelectionWrapper>
    </Wrapper>
  );
};

export default Dropdown;
