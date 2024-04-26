import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";
import { type ButtonProps } from "./button.types";

const meta: Meta<ButtonProps> = {
  title: "SharedLib/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    label: {
      description: "The text to display on the button",
      control: { type: "text" }
    }
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default"
  }
};
