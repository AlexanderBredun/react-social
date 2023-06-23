import {
	DeepPartial,
	PayloadAction,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { Article } from '@/entities/Article';
import { AllArticlesSchema, LimitType } from '../types/allArticlesSchema';
import { fetchAllArticles } from '../services/fetchAllArticles/fetchAllArticles';
import { ListTypes } from '@/features/ListViewTypeSwitcher';
import { LOCAL_STORAGE } from '@/shared/lib/helpers/constants';
import { GRID_LIMIT, LIST_LIMIT } from '../../lib/paginationConsts';
  
const allArticlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getAllArticles = allArticlesAdapter.getSelectors<StateSchema>(
	(state)=> state.allArticles || allArticlesAdapter.getInitialState()
);
  
const allArticlesSlice = createSlice({
	name: 'allArticlesSlice',
	initialState: allArticlesAdapter.getInitialState<AllArticlesSchema>({
		isLoading: false,
		listType: 'grid',
		error: undefined,
		page: 1,
		hasNext: true,
		limit: GRID_LIMIT,
		ids: [],
		entities: {}
	}),
	reducers: {
		_initStore(state){
			const storedType = localStorage.getItem(LOCAL_STORAGE.ARTICLE_VIEW) as ListTypes;
			
			state.listType = storedType ? storedType : 'grid';
			state.limit = state.listType === 'grid' ? GRID_LIMIT : LIST_LIMIT;
		},
		setPage(state, action: PayloadAction<number>){
			state.page = action.payload;
		},
		setLimit(state, action: PayloadAction<LimitType>){
			state.limit = action.payload;
		},
		setHasNext(state, action: PayloadAction<boolean>){
			state.hasNext = action.payload;
		},
		setListType(state, action: PayloadAction<ListTypes>){
			state.listType = action.payload;
		},
	},
	extraReducers: (builder)=> {
		builder
			.addCase(fetchAllArticles.pending, (state)=> {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchAllArticles.fulfilled, (state, action: PayloadAction<Article[]>)=> {
				state.isLoading = false;
				allArticlesAdapter.addMany(state, action.payload);
				state.hasNext = action.payload.length > 0;
			})
			.addCase(fetchAllArticles.rejected, (state, action)=> {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
	
});

export const { reducer: allArticlesReducer, actions: allArticlesActions } = allArticlesSlice;
  
