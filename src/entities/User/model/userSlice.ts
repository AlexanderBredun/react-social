import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from './types/userSchema';
import { LOCAL_STORAGE } from '@/shared/lib/helpers/constants';

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>){
			state.authData = action.payload;
			
		},
		removeUser(state){
			state.authData = undefined;
		},
		initSetUser(state){
			const user = localStorage.getItem(LOCAL_STORAGE.USER);
			if(user){
				state.authData = JSON.parse(user);
			}
			state._inited = true;

		}
	}
});
  
export const { actions: userActions, reducer: userReducer } = userSlice;
  
