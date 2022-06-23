import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Componente/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Router>
    <Link {...args}>Link</Link>
  </Router>
);

export const DefautLink = Template.bind({});
DefautLink.args = {
  to: "/",
};
