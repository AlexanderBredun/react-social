import { StateSchema, ThunkExtraArgs } from '@/app/store/types/stateScheme';
import { getArticleSlugData } from '@/entities/Article';
import { iComment } from '@/entities/Comments';
import { getFullUser } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticleComments } from '../fetchArticleComments/fetchArticleComments';

export const addNewComment = createAsyncThunk<iComment, string, {rejectValue: string, extra: ThunkExtraArgs}>(
	'addNewComment',
	async (newComment: string, thunkAPI)=> {
		const articleId = getArticleSlugData(thunkAPI.getState() as StateSchema)?.id;
		const userId = getFullUser(thunkAPI.getState() as StateSchema).authData?.id;
 
		if(!articleId || !userId || !newComment) {
			return thunkAPI.rejectWithValue('not enough data');
		}

		try {
			const response = await thunkAPI.extra.$api?.post<iComment>('comments/', {
				articleId,
				userId,
				body: newComment
			});
			
			if(!response?.data){
				throw new Error('error');
			}
			thunkAPI.dispatch(fetchArticleComments(articleId));
			return response.data;
		} catch (error) {
			
			return thunkAPI.rejectWithValue('error');
		}
	}
); 