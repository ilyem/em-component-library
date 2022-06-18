import {  createGlobalStyle, ThemeProvider as Theme } from "styled-components";
import React from "react";
import { ThemeType } from "../../types";
import { themeDefault } from "../../config";

export const GlobalStyles = createGlobalStyle`
 * {
     line-height: 1.5;
 }
 input, label {
    border: 0;
    padding: 0;
    margin: 0;
 }
`;



interface Props {
theme?: ThemeType,
children: React.ReactNode
}
const ThemeProvider: React.FC<Props> = ({theme, children } ) => {
    return <Theme theme={theme || themeDefault}>
        <GlobalStyles/>
{children}
    </Theme>
}
export default ThemeProvider;