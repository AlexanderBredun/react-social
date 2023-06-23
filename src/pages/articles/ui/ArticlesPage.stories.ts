import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/lib/helpers/storybook/StoreDecorator';
import { Article } from '@/entities/Article';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';

const mockArticles: Article[] = [
	{ ...articleMock, id: '1' },
	{ ...articleMock, id: '2' },
];

const meta: Meta<typeof ArticlesPage> = {
	title: 'pages/ArticlesPage',
	component: ArticlesPage,
	tags: ['autodocs'],
	argTypes: {},
	decorators: [StoreDecorator({
		allArticles: {
			ids: mockArticles.map(el => el.id),
			entities: {
				'1': mockArticles[0],
				'2': mockArticles[1],
			}
		}
	})]
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
	args: {
       
	},
};