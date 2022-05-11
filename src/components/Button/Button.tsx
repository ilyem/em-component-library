import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{theme: any}>`
cursor: pointer;
background-color: ${({theme}) => theme.colours.main};
`;

export interface Props {
  label: string;
}

const Button: React.FC<Props> = ({label}) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
