import { StateSchema } from '@/app/store';
import { GRID_LIMIT } from '../../lib/paginationConsts';

export const getAllArticlesLoading = (state: StateSchema)=> state.allArticles?.isLoading;
export const getAllArticlesError = (state: StateSchema)=> state.allArticles?.error;
export const getAllArticlesHasNext = (state: StateSchema)=> state.allArticles?.hasNext;
export const getAllArticlesPage = (state: StateSchema)=> state.allArticles?.page || 1;
export const getAllArticlesLimit = (state: StateSchema)=> state.allArticles?.limit || GRID_LIMIT; 
export const getAllArticlesType = (state: StateSchema)=> state.allArticles?.listType || 'grid'; 