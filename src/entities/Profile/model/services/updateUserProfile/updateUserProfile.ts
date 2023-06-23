import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArgs } from '@/app/store/types/stateScheme';
import { Profile } from '../../types/profile';


export const updateUserProfile = createAsyncThunk<Profile, Profile, {rejectValue: string, extra: ThunkExtraArgs}>(
	'profile/updateUserProfile',
	async (data: Profile, thunkAPI) => {
		
		try {
			const response = await thunkAPI.extra.$api?.put<Profile>('/profile/' + data.id, data);
			
			if(!response?.data){
				throw new Error('error');
			}
			
			return response.data;
		} catch (error) {
			
			return thunkAPI.rejectWithValue('error');
		}
		
	}
);