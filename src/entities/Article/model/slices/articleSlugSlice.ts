import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleSlugSchema } from '../types/ArticleSlugSchema';
import { fetchArticleById } from '../services/fetchArticleById';


const initialState: ArticleSlugSchema = {
	data: null,
	isLoading: true,
	error: null,
	
};

export const articleSlugSlice = createSlice({
	name: 'articleSlug',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder
		  .addCase(fetchArticleById.pending, (state) => {
				state.isLoading = true;
				state.error = '';
		  })
		  .addCase(fetchArticleById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
		  })
		  .addCase(fetchArticleById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
		  });
	  },
});
  
export const { actions: articleSlugActions, reducer: articleSlugReducer } = articleSlugSlice;
  
