import {
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { iComment } from '@/entities/Comments';
import { StateSchema } from '@/app/store';
import { ArticleCommentsScheme } from '../../types/ArticleCommentsScheme';
import { fetchArticleComments } from '../../services/fetchArticleComments/fetchArticleComments';
import { addNewComment } from '../../services/addNewComment/addNewComment';
  
const articleCommentsAdapter = createEntityAdapter<iComment>({
	selectId: (comment) => comment.id,
});

export const getArticlesComments = articleCommentsAdapter.getSelectors<StateSchema>(
	(state)=> state.articleComments || articleCommentsAdapter.getInitialState()
);
  
const articleCommentsSlice = createSlice({
	name: 'articleCommentsSlice',
	initialState: articleCommentsAdapter.getInitialState<ArticleCommentsScheme>({
		isLoading: false,
		newComment: {
			addedComment: false,
			isLoading: false,
			error: undefined,
		},
		error: undefined,
		ids: [],
		entities: {}
	}),
	reducers: {

	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleComments.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchArticleComments.fulfilled, (state, action) => {
				state.isLoading = false;
				articleCommentsAdapter.setAll(state, action.payload.reverse());
			})
			.addCase(fetchArticleComments.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(addNewComment.pending, (state) => {
				state.newComment.addedComment = false;
				state.newComment.isLoading = true;
				state.newComment.error = undefined;
			})
			.addCase(addNewComment.fulfilled, (state) => {
				state.newComment.addedComment = true;
				state.newComment.isLoading = false;
				state.newComment.error = undefined;
			})
			.addCase(addNewComment.rejected, (state, action) => {
				state.newComment.addedComment = false;
				state.newComment.isLoading = false;
				state.newComment.error = action.payload;
			});
	},
});

export const { reducer: articleCommentsReducer, actions: articleCommentsActions } = articleCommentsSlice;
  
