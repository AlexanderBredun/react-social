
import { StoreProvider } from '@/app/providers/store';
import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';


// eslint-disable-next-line react/display-name
export const StoreDecorator = (store: DeepPartial<StateSchema>)=> (Story: StoryFn) => {

	
	return (
		<StoreProvider initialState={store}>
			<Story />
		</StoreProvider>
		
	);
};
  