import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Componente/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  label: "Checkbox label",
};
