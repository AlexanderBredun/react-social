import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';


const meta: Meta<typeof Avatar> = {
	title: 'shared/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		src: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
	},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
	
};

export const Centered: Story = {
	args: {
		position: 'center'
	},
};

export const CustomSize: Story = {
	args: {
		width: '50px'
	},
};