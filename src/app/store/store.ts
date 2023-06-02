import { AnyAction, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ReduxWithReducerManager } from './types/stateScheme';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

import { createReducerManager } from './reducerManager';

const initialReducers: ReducersMapObject<StateSchema, AnyAction> = {
	counter: counterReducer,
	user: userReducer,
};

export const createStore = (initialState?: StateSchema) => {
	const reducerManager = createReducerManager(initialReducers);

	const initStore = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	initStore.reducerManager = reducerManager;

	return initStore;
};


export type RootState = ReturnType< ReturnType<typeof createStore>['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType< typeof createStore>['dispatch']