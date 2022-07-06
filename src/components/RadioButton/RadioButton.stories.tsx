import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButton from "./RadioButton";

export default {
  title: "Componente/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  label: "Radio button label",
};
