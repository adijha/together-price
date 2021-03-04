import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SearchContactCard from "./SearchContactCard";

export default {
	title: "Search Contact Card",
	component: SearchContactCard,
} as Meta;

const contact_data = {
	userId: 1234,
	fullName: "Gina Snelly",
	profileImageUrl: "https://randomuser.me/api/portraits/women/24.jpg",
	trust: 80,
};

// export const PlusButton: Story = (args) => <SearchContactCard {...args} />;
//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof SearchContactCard>> = (args) => (
	<div style={{ marginTop: "30px" }}>
		<SearchContactCard {...args} />
	</div>
);

export const ContactCard = Template.bind({});
ContactCard.args = {
	contact: contact_data,
};
