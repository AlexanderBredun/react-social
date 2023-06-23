import type { Meta, StoryObj } from '@storybook/react';
import { ListViewTypeSwitcher } from './ListViewTypeSwitcher';


const meta: Meta<typeof ListViewTypeSwitcher> = {
	title: 'features/ListViewTypeSwitcher',
	component: ListViewTypeSwitcher,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ListViewTypeSwitcher>;

export const Primary: Story = {
	args: {
		active: 'grid'
	},
};