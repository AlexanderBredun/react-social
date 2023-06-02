import { StateSchema, createStore } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';

interface Props{
    initialState?:  DeepPartial<StateSchema>
}

const StoreProvider:FC<Props> = ({ children, initialState }) => {

	const store = createStore(initialState as StateSchema);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export {
	StoreProvider
};