import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ui/Profile';
import { StoreDecorator } from '@/shared/lib/helpers/storybook/StoreDecorator';
import { eCountry } from '@/entities/Country';
import { eCurrency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile/model/types/profile';


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
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ProfilePage> = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//  backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({
		profile: {
			isLoading: false,
			data: profileMock,
			form: profileMock
		}
	})]
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	
};

