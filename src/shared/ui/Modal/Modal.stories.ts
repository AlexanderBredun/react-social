import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';


const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		children: 'Modal',
		isOpen: true
	},
};