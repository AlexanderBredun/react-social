import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchUserProfile } from '../services/fetchUserProfile/fetchUserProfile';
import { updateUserProfile } from '../services/updateUserProfile/updateUserProfile';


const initialState: ProfileSchema = {
	data: null,
	isLoading: true,
	error: null,
	form: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {

		changeForm(state: ProfileSchema, action: PayloadAction<Profile>){
			state.form = {
				...state.data,
				...action.payload
			};
		}

	},
	extraReducers: (builder) => {
		builder
		  .addCase(fetchUserProfile.pending, (state) => {
				state.isLoading = true;
				state.error = '';
		  })
		  .addCase(fetchUserProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
		  })
		  .addCase(fetchUserProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
		  })

		  .addCase(updateUserProfile.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(updateUserProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
			})
			.addCase(updateUserProfile.rejected, (state, action) => {
				
				
				state.isLoading = false;
				state.error = action.payload;
				console.log(state.error);
			});
	  },
});
  
export const { actions: profileActions, reducer: profileReducer } = profileSlice;
  
