import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';


const meta: Meta<typeof Select> = {
	title: 'shared/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
	args: {
		label: 'Label',
		options: [
			{
				value: 'test1',
				name: 'test1',
			},
			{
				value: 'test2',
				name: 'test2',
			},
			{
				value: 'test3',
				name: 'test3',
			},
		]
	},
};
export const WithActiveOption: Story = {
	args: {
		label: 'Label',
		active: 'test3',
		options: [
			{
				value: 'test1',
				name: 'test1',
			},
			{
				value: 'test2',
				name: 'test2',
			},
			{
				value: 'test3',
				name: 'test3',
			},
		]
	},
};