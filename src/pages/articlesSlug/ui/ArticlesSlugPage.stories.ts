import type { Meta, StoryObj } from '@storybook/react';
import ArticlesSlugPage from './ArticlesSlugPage';
import { StoreDecorator } from '@/shared/lib/helpers/storybook/StoreDecorator';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';


const meta: Meta<typeof ArticlesSlugPage> = {
	title: 'pages/ArticlesSlugPage',
	component: ArticlesSlugPage,
	tags: ['autodocs'],
	argTypes: {},
	decorators: [StoreDecorator({
		articleSlug: {
			data: articleMock
		},
		
	})]
};

export default meta;
type Story = StoryObj<typeof ArticlesSlugPage>;

export const Primary: Story = {
	args: {
       
	},
};