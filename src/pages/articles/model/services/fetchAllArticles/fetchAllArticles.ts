import { StateSchema, ThunkExtraArgs } from '@/app/store/types/stateScheme';
import { Article } from '@/entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllArticlesLimit } from '../../selectors/allArticlesSelectors';

export const fetchAllArticles = createAsyncThunk<Article[], number, {rejectValue: string, extra: ThunkExtraArgs}>(
	'fetchAllArticles',
	async (page, thunkAPI)=> {
		try {
			const limit = getAllArticlesLimit(thunkAPI.getState() as StateSchema);
			const response = await thunkAPI.extra.$api?.get<Article[]>('articles', {
				params: {
					_expand: 'user',
					_page: page,
					_limit: limit
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