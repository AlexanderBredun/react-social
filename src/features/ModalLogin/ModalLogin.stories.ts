import type { Meta, StoryObj } from '@storybook/react';
import { ModalLogin } from './ModalLogin';
import { StoreDecorator } from '@/shared/lib/helpers/storybook/StoreDecorator';


const meta: Meta<typeof ModalLogin> = {
	title: 'features/ModalLogin',
	component: ModalLogin,
	tags: ['autodocs'],
	argTypes: {},
	decorators: [StoreDecorator({
		user: {
			authData: undefined
		}
	})]
};

export default meta;
type Story = StoryObj<typeof ModalLogin>;

export const Primary: Story = {
	args: {
		isOpen: true,
	},
};