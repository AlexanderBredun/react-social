import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';


const meta: Meta<typeof LangSwitcher> = {
	title: 'features/LangSwitcher',
	component: LangSwitcher,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Primary: Story = {
	args: {
		
	},
};
export const ShortLang: Story = {
	args: {
		shortLang: true,
	},
};