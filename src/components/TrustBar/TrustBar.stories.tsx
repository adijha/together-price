import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TrustBar from "./TrustBar";
import MaterialUiTrustBar from "./MaterialUiTrustBar";

export default {
	title: "Trust Circle",
	component: TrustBar,
} as Meta;

// export const PlusButton: Story = (args) => <SearchContactCard {...args} />;
//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof TrustBar>> = (args) => (
	<div style={{ marginTop: "30px" }}>
		<TrustBar {...args} />
	</div>
);

export const TrustScore = Template.bind({});
TrustScore.args = {
	trust: 75,
	profileImageUrl: "https://adijha.com/profile.jpg",
};
