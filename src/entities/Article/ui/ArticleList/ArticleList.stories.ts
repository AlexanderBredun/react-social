import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';


const meta: Meta<typeof ArticleList> = {
	title: 'entities/ArticleList',
	component: ArticleList,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		articles: [
			{ ...articleMock, id: '1' },
			{ ...articleMock, id: '2' },
			{ ...articleMock, id: '3' },
		],
		cardsType: 'grid'
	}
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Primary: Story = {
	args: {
		
	},
};
export const Skelet: Story = {
	args: {
		isLoading: true
	},
};
export const Error: Story = {
	args: {
		error: 'error'
	},
};
export const List: Story = {
	args: {
		cardsType: 'list'
	},
};