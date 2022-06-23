import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "./Stack";
import Text from "../Text";

export default {
  title: "Componente/Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Text>First stack item</Text>
    <Text>Second stack item</Text>
    <Text>Third stack item</Text>
  </Stack>
);

export const StackWithSmallSpaces = Template.bind({});

StackWithSmallSpaces.args = {
  space: "xs",
};
