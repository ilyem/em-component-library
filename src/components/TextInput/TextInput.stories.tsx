import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

export default {
  title: "Componente/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => 
<TextInput {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
 label: 'Default Input'
};
export const LabelOnTopInput = Template.bind({});
LabelOnTopInput.args = {
 label: 'Default Input',
 labelPlacement: 'top'
};
export const InputWithPlaceholder =  Template.bind({});
InputWithPlaceholder.args = {
  label: "Select",
  placeholder: "This is a placeholder"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true
};