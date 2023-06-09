import type { Meta, StoryObj } from '@storybook/react';

import Page from './ui/index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Page> = {
	title: 'pages/AboutPage',
	component: Page,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//  backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof Page>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	
};

