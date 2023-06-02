import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/lib/helpers/storybook/StoreDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Navbar> = {
	title: 'widgets/Navbar',
	component: Navbar,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//  backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({
		user: {
			authData: undefined
		}
	})]
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	
};

export const UserLoggedIn: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	decorators: [StoreDecorator({
		user: {
			authData: {}
		}
	})]
};

