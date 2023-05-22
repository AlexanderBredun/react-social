import type { Meta, StoryObj } from '@storybook/react';

import { Button, eBtnFontSize, eBtnVariant } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//  backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		children: 'Button',
	},
};

export const Clear: Story = {
	args: {
		children: 'Button',
		variant: eBtnVariant.CLEAR,
	},
};

export const SizeS: Story = {
	args: {
		children: 'Button',
		fontSize: eBtnFontSize.S,
	},
};

export const SizeL: Story = {
	args: {
		children: 'Button',
		fontSize: eBtnFontSize.L,
	},
};

export const SizeXL: Story = {
	args: {
		children: 'Button',
		fontSize: eBtnFontSize.XL,
	},
};

export const Square: Story = {
	args: {
		children: 'Button',
		square: true
	},
};

