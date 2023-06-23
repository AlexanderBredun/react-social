import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { articleSlugReducer } from './articleSlugSlice';
import { fetchArticleById } from '../services/fetchArticleById';
import { ArticleSlugSchema } from '../types/ArticleSlugSchema';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';

describe('articleSlugSlice.test', () => {
	test('article pending state', () => {
		const state: DeepPartial<ArticleSlugSchema> = {
            
		};
		expect(articleSlugReducer(state as ArticleSlugSchema, fetchArticleById.pending)).toEqual({ isLoading: true, error: '' });
	});
	test('article fullfilled state', () => {
		const state: DeepPartial<ArticleSlugSchema> = {
			isLoading: true,
			data: undefined
		};
		expect(articleSlugReducer(state as ArticleSlugSchema, fetchArticleById.fulfilled(articleMock, '', '')))
			.toEqual(
				{
					isLoading: false,
					data: articleMock
				}
			);
	});
  
});