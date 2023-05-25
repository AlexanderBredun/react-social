import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './types/stateScheme';
import { counterReducer } from '@/entities/Counter';

export const createStore = (initialState?: StateSchema) => {
	return configureStore<StateSchema>({
		reducer: {
			counter: counterReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
};

const store = createStore();

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch