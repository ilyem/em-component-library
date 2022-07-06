import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "Componente/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  options: [
    {
      id: "1",
      value: "option 1",
    },
    {
      id: "2",
      value: "option 2",
    },
    {
      id: "3",
      value: "option 3",
    },
    {
      id: "4",
      value: "option 4",
    },
  ],
  placeholder: "Select an option",
  label: "Dropdown label",
  onSelect: () => {},
};
