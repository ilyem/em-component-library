import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Componente/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  label: "Login",
};

export const Select = Template.bind({});
Select.args = {
  label: "Select",
  type: "light",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};
export const Accent = Template.bind({});
Accent.args = {
  label: "accent",
  isAccent: true,
};
