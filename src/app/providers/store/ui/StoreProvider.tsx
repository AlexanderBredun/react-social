import { StateSchema, createStore } from '@/app/store';
import { FC } from 'react';
import { Provider } from 'react-redux';

interface Props{
    initialState?: StateSchema
}

const StoreProvider:FC<Props> = ({ children, initialState }) => {

	const store = createStore(initialState);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export {
	StoreProvider
};