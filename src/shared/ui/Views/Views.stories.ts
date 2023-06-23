import type { Meta, StoryObj } from '@storybook/react';
import { Views } from './Views';


const meta: Meta<typeof Views> = {
	title: 'shared/Views',
	component: Views,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Views>;

export const Primary: Story = {
	args: {
		count: 1234,
	},
};