import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { Reducer } from '@reduxjs/toolkit';
import { ReduxWithReducerManager, StateSchemaKeys } from '@/app/store';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
	const {
		children,
		reducers,
		removeAfterUnmount,
	} = props;

	const store = useStore() as ReduxWithReducerManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as StateSchemaKeys, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.remove(name as StateSchemaKeys);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
		// eslint-disable-next-line
    }, []);

	return (
	// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{children}
		</>
	);
};
