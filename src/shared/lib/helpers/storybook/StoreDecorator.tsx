
import { StoreProvider } from '@/app/providers/store';
import { StateSchema } from '@/app/store';
import { articleSlugReducer } from '@/entities/Article';

import { profileReducer } from '@/entities/Profile';
import { ReducersList } from '@/features/DynamicModuleLoader';
import { loginReducer } from '@/features/ModalLogin/model/slice/loginSlice';
import { allArticlesReducer } from '@/pages/articles';
import { articleCommentsReducer } from '@/pages/articlesSlug';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';


// eslint-disable-next-line react/display-name
export const StoreDecorator = (store: DeepPartial<StateSchema>)=> (Story: StoryFn) => {

	const asyncReducers: ReducersList = {
		login: loginReducer,
		profile: profileReducer,
		articleSlug: articleSlugReducer,
		articleComments: articleCommentsReducer,
		allArticles: allArticlesReducer
	};
	
	return (
		<StoreProvider initialState={store} asyncReducers={asyncReducers}>
			<Story />
		</StoreProvider>
		
	);
};
  