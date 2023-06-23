import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';


const meta: Meta<typeof AddCommentForm> = {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
	args: {
		
	},
}; 