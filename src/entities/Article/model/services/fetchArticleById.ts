import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';
import { ThunkExtraArgs } from '@/app/store/types/stateScheme';


export const fetchArticleById = createAsyncThunk<Article, string, {rejectValue: string, extra: ThunkExtraArgs}>(
	'fetchArticleById',
	async (id: string, thunkAPI)=> {
		try {
		
			const response = await thunkAPI.extra.$api?.get<Article>(`/articles/${id}`, {
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