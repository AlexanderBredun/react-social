import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArgs } from '@/app/store/types/stateScheme';
import { Profile } from '../../types/profile';


export const fetchUserProfile = createAsyncThunk<Profile, string, {rejectValue: string, extra: ThunkExtraArgs}>(
	'profile/fetchUserProfile',
	async (profileId, thunkAPI) => {
		
		try {
		
			const response = await thunkAPI.extra.$api?.get<Profile>('/profile/' + profileId);
			
			if(!response?.data){
				throw new Error('error');
			}

			return response.data;
		} catch (error) {
			
			return thunkAPI.rejectWithValue('error');
		}
		
	}
);