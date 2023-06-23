import { StateSchema, ThunkExtraArgs } from '@/app/store/types/stateScheme';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllArticlesHasNext, getAllArticlesLoading, getAllArticlesPage } from '../../selectors/allArticlesSelectors';
import { allArticlesActions } from '../../slices/allArticlesSlice';
import { fetchAllArticles } from '../fetchAllArticles/fetchAllArticles';


export const fetchAllArticlesNextPage = createAsyncThunk<undefined, undefined, {rejectValue: string, extra: ThunkExtraArgs}>(
	'fetchAllArticlesNextPage',
	async (_, thunkAPI)=> {
		try {
			const { dispatch, getState } = thunkAPI;
			const state = getState() as StateSchema;
			const hasNext = getAllArticlesHasNext(state);
			const isLoading = getAllArticlesLoading(state);
			const page = getAllArticlesPage(state);
			if(hasNext && !isLoading){
				dispatch(allArticlesActions.setPage(page + 1));
					
				dispatch(fetchAllArticles(page + 1));
			}
		} catch (error) {
			
			return thunkAPI.rejectWithValue('error');
		}
	}
); 