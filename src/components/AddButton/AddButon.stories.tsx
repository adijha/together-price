import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AddButton from "./AddButton";

export default {
	title: "Add Button",
	component: AddButton,
} as Meta;

export const PlusButton: Story = (args) => <AddButton />;
