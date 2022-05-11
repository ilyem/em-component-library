import {  ThemeProvider as Theme } from "styled-components";
import React from "react";

const themeDefault = {
 colours: {
     main: 'blue'
 }
}
interface Props {
theme?: any,
children: React.ReactNode
}
const ThemeProvider: React.FC<Props> = ({theme, children } ) => {
    return <Theme theme={theme || themeDefault}>
{children}
    </Theme>
}
export default ThemeProvider;