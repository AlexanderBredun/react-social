import { AnyAction, CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ReduxWithReducerManager } from './types/stateScheme';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { ReducersList } from '@/features/DynamicModuleLoader';

const initialReducers: ReducersMapObject<StateSchema, AnyAction> = {
	counter: counterReducer,
	user: userReducer,
};

export const createStore = (initialState?: StateSchema, asyncReducers?: ReducersList) => {
	const reducerManager = createReducerManager({
		...initialReducers,
		...asyncReducers
	});

	const initStore = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					$api
				}
			}
		})
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	initStore.reducerManager = reducerManager;

	return initStore;
};


export type RootState = ReturnType< ReturnType<typeof createStore>['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType< typeof createStore>['dispatch']