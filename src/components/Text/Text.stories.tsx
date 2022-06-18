import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Componente/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Text</Text>;

export const DefautText = Template.bind({});
DefautText.args = {
  
};
