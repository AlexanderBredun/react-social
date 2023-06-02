import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsername } from '../services/loginByUsername';


//  write tests for selectors

const initialState: LoginSchema = {
	username: '',
	password: '',
	isLoading: false,
	error: ''
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername(state, action:PayloadAction<string>){
			state.username = action.payload;
		},
		setPassword(state, action:PayloadAction<string>){
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
		  .addCase(loginByUsername.pending, (state) => {
				state.isLoading = true;
				state.error = '';
		  })
		  .addCase(loginByUsername.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);
			
		  })
		  .addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				console.log(state.error);
				
		  });
	  },
});
  
export const { actions: loginActions, reducer: loginReducer } = loginSlice;
  
