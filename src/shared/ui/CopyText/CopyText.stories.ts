import type { Meta, StoryObj } from '@storybook/react';
import { CopyText } from './CopyText';


const meta: Meta<typeof CopyText> = {
	title: 'features/CopyText',
	component: CopyText,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CopyText>;

export const Primary: Story = {
	args: {
		children: 'CopyText',
	},
};