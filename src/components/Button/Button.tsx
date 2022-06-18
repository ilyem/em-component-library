import React from "react";
import styled from "styled-components";
import { ThemeType } from "../../types";
import { useTheme } from 'styled-components';
import { themeDefault } from "../../config/theme";

type ButtonType = 'accent' | 'light';

const StyledButton = styled.button<{theme?: ThemeType, $colours: {[prop: string]: string} }>`
cursor: pointer;
border: ${({theme}) => `${theme.border.size} solid`};
border-radius: ${({theme}) => theme.border.radius};
${({$colours}) => $colours};
padding: ${({theme}) => theme.spacing.eightPx};
min-width: 100px;
text-transform: uppercase;
&:disabled,
&:disabled:hover {
  pointer-events: none;
}
`;

export interface Props {
  label: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void,
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({label, onClick, type = "accent", disabled = false}) => {
 const {colours} = useTheme() as ThemeType;

 const stylesMap = {
   accent: {
    enabled: {
      'background-color': colours.primary,
      color: colours.textOnPrimary,
      'border-color': colours.primary,
    },
    disabled: {
      'background-color': colours.disabled,
      color: colours.textOnDisabled,
      'border-color': 'transparent',
    }
   },
   light: {
     enabled: {
      'background-color': 'transparent',
      color:  colours.primary,
      'border-color': colours.primary,
     },
     disabled: {
      'background-color': 'transparent',
      color: colours.disabled,
      'border-color': colours.disabled,
     }
   }
 }

 const buttonColours = disabled ? stylesMap[type].disabled : stylesMap[type].enabled;

  return <StyledButton
  $colours={buttonColours}
  onClick={onClick}>
    {label}
    </StyledButton>;
};

export default Button;
