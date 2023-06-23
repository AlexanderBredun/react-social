import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';


const meta: Meta<typeof Heading> = {
	title: 'shared/Heading',
	component: Heading,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
	args: {
		heading: 'Heading',
	},
};
export const WithSubheading: Story = {
	args: {
		heading: 'Heading',
		subheading: 'Subheading',
	},
};
export const WithType: Story = {
	args: {
		heading: 'Heading',
		subheading: 'Subheading',
		type: 'danger'
	},
};
export const WithPosition: Story = {
	args: {
		heading: 'Heading',
		subheading: 'Subheading',
		align: 'center'
	},
};