import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from '@/shared/lib/helpers/storybook/StoreDecorator';
import { Profile } from '@/entities/Profile/model/types/profile';
import { eCurrency } from '@/entities/Currency';
import { eCountry } from '@/entities/Country';


const profileMock: Profile = {
	'firstname': 'sad',
	'lastname': 'my lastnamesdssss',
	'age': '324',
	'currency': eCurrency.EUR,
	'country': eCountry.France,
	'city': 'Kramatorsk',
	'username': 'alal111',
	'avatar': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
};

const meta: Meta<typeof ProfileCard> = {
	title: 'widgets/ProfileCard',
	component: ProfileCard,
	tags: ['autodocs'],
	argTypes: {},
	decorators: [StoreDecorator({
		profile: {
			isLoading: false,
			data: profileMock,
			form: profileMock
		}
	})]
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
	
};