import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from '@/entities/User';
import { LOCAL_STORAGE } from '@/shared/lib/helpers/constants';


interface AuthDataType {
    username: string;
    password: string;
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<User, AuthDataType, {rejectValue: string}>(
	'login/loginByUsername',
	async (authData: AuthDataType, thunkAPI) => {
		
		try {
			const response = await axios.post<User>('http://localhost:8000/login', authData);
			
			if(!response.data){
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