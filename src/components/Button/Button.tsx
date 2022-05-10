import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
cursor: pointer;
`;
export interface Props {
  label: string;
}

const Button: React.FC<Props> = ({label}) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
