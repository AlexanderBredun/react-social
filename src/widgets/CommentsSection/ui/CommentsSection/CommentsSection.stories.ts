import type { Meta, StoryObj } from '@storybook/react';
import { CommentsSection } from './CommentsSection';
import { iComment } from '@/entities/Comments';


const meta: Meta<typeof CommentsSection> = {
	title: 'widgets/CommentsSection',
	component: CommentsSection,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentsSection>;
const comments: iComment[] = [
	{
		'id': '1',
		'body': 'some comment',
		'createdAt': '19.06.2023, 13:51',
		user: {
			'id': '1',
			'username': 'alal111',
			'avatar': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
		},
	},
	{
		'id': '2',
		'body': 'some comment 2',
		'createdAt': '19.06.2023, 12:51',
		user: {
			'id': '1',
			'username': 'alal111',
			'avatar': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
		},
	}
    
];
export const Primary: Story = {
	args: {
		comments
	},
};