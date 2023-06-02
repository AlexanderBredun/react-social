import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';


const initialState: ProfileSchema = {
	data: undefined,
	isLoading: false,
	error: undefined,
	readonly: false, 
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
	}
});
  
export const { actions: profileActions, reducer: profileReducer } = profileSlice;
  
