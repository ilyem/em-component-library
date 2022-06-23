import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";

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
