import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";
import { useTheme } from "styled-components";
import { ThemeType } from "../../types";

export default {
  title: "Componente/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link</Link>
);

export const DefautLink = Template.bind({});
DefautLink.args = {
  to: "/",
};
export const LinkOnPrimaryBackground = Template.bind({});
LinkOnPrimaryBackground.decorators = [
  (Story) => {
    const { colours } = useTheme() as ThemeType;
    return (
      <div style={{ backgroundColor: colours.primary }}>
        <Story />
      </div>
    );
  },
];
LinkOnPrimaryBackground.args = {
  to: "/",
  background: "primary",
};
