import { StateSchema, createStore } from '@/app/store';
import { ReducersList } from '@/features/DynamicModuleLoader';
import { DeepPartial } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';

interface Props{
    initialState?:  DeepPartial<StateSchema>
	asyncReducers?: ReducersList
}

const StoreProvider:FC<Props> = ({ children, initialState, asyncReducers }) => {

	const store = createStore(initialState as StateSchema, asyncReducers);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export {
	StoreProvider
};