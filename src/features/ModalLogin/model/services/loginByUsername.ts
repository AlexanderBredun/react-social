import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from '@/entities/User';
import { LOCAL_STORAGE } from '@/shared/lib/helpers/constants';
import { ThunkExtraArgs } from '@/app/store/types/stateScheme';


interface AuthDataType {
    username: string;
    password: string;
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<User, AuthDataType, {rejectValue: string, extra: ThunkExtraArgs | undefined}>(
	'login/loginByUsername',
	async (authData: AuthDataType, thunkAPI) => {
		
		try {
			const response = await thunkAPI.extra?.$api?.post<User>('/login', authData);
			
			if(!response?.data){
				throw new Error('error');
			}
			thunkAPI.dispatch(userActions.setUser(response.data));
			
			localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(response.data));
			return response.data;
		} catch (error) {
			
			return thunkAPI.rejectWithValue('error');
		}
		
	}
);