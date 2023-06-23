import { ReduxWithReducerManager, StateSchemaKeys } from '@/app/store';
import { useAppDispatch } from '@/app/store/hooks/storeHooks';
import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

type AsyncReducerEntry = [StateSchemaKeys, Reducer]

export type AsyncReducersReducers = {
    [name in StateSchemaKeys]?: Reducer
}


export const useAsyncReducer = (reducers: AsyncReducersReducers, removeOnUnmount = true)=> {

	const dispatch = useAppDispatch();
	const store = useStore() as ReduxWithReducerManager;
	const reducersMounted = store.reducerManager.getReducerMap();
    
	useEffect(()=> {
		Object.entries(reducers).forEach(([key, value])=> {
			
			if(!reducersMounted[key as StateSchemaKeys]){
				store.reducerManager.add(key as StateSchemaKeys, value);
				dispatch({ type: `@INIT ${key} added` });
			}
		});
		
		return ()=> {
			if(removeOnUnmount){
				Object.entries(reducers).forEach(([key, value])=> {
					store.reducerManager.remove(key as StateSchemaKeys);
					dispatch({ type: `@REMOVE ${key} removed` });
				});
			}
			
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};