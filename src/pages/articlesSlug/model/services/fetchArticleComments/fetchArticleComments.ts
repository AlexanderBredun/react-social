import { ThunkExtraArgs } from '@/app/store/types/stateScheme';
import { iComment } from '@/entities/Comments';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticleComments = createAsyncThunk<iComment[], string, {rejectValue: string, extra: ThunkExtraArgs}>(
	'fetchArticleComments',
	async (articleId: string, thunkAPI)=> {
		try {
			const response = await thunkAPI.extra.$api?.get<iComment[]>(`articles/${articleId}/comments/`, {
				params: {
					_expand: 'user'
				}
			});
			
			if(!response?.data){
				throw new Error('error');
			}
			
			return response.data;
		} catch (error) {
			
			return thunkAPI.rejectWithValue('error');
		}
	}
); 