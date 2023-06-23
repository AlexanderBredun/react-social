import type { Meta, StoryObj } from '@storybook/react';
import { UserLink } from './UserLink';


const meta: Meta<typeof UserLink> = {
	title: 'features/UserLink',
	component: UserLink,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof UserLink>;

export const Primary: Story = {
	args: {
		username: 'test user',
		avatar: 'https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png',
		profileId: 'test',
		time: 'test time'

	},
};

export const Skelet: Story = {
	args: {
		username: 'test user',
		avatar: 'https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png',
		profileId: 'test',
		time: 'test time',
		skeleton: true

	},
};