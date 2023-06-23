import { StateSchema } from '@/app/store';

export const getArticleSlugLoading = (state: StateSchema)=> state.articleSlug?.isLoading;
export const getArticleSlugError = (state: StateSchema)=> state.articleSlug?.error;
export const getArticleSlugData = (state: StateSchema)=> state.articleSlug?.data;