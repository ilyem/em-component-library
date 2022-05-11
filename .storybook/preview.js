import React from "react";

import { ThemeProvider } from "../src/components";

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
