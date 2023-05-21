import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, eVariant } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	args: {
		to: '/',
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//  backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		children: 'AppLink',
	},
};


export const Underdash: Story = {
	args: {
		children: 'AppLink',
		variant: eVariant.UNDERDASH,
	},
};

export const Underline: Story = {
	args: {
		children: 'AppLink',
		variant: eVariant.UNDERLINE,
	},
};

