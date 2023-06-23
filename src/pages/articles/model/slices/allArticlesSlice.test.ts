import { DeepPartial } from '@reduxjs/toolkit';

import { Article } from '@/entities/Article';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';
import { fetchAllArticles } from '../services/fetchAllArticles/fetchAllArticles';
import { AllArticlesSchema } from '../types/allArticlesSchema';
import { allArticlesReducer } from './allArticlesSlice';

describe('allArticlesSlice', () => {

	const mockArticles: Article[] = [
		{ ...articleMock, id: '2test' },
		{ ...articleMock, id: '3test' },
	];
    
	test('all articles pending state', () => {
		const state: DeepPartial<AllArticlesSchema> = {
            
		};
		expect(allArticlesReducer(state as AllArticlesSchema, fetchAllArticles.pending)).toEqual({ isLoading: true, error: undefined });
	});
	test('article fullfilled state has next true', () => {
		const state: DeepPartial<AllArticlesSchema> = {
			isLoading: true,
			'hasNext': true,
			entities: {},
			ids: [],
		};
		expect(allArticlesReducer(state as AllArticlesSchema, fetchAllArticles.fulfilled(mockArticles, '', 1)))
			.toEqual(
				{
					isLoading: false,
					'hasNext': true,
					ids: mockArticles.map(el => el.id),
					entities: {
						'2test': {
							...mockArticles[0]
						},
						'3test': {
							...mockArticles[1]
						},
					}
				}
			);
	});
	test('article fullfilled state has next false', () => {
		const state: DeepPartial<AllArticlesSchema> = {
			isLoading: true,
			'hasNext': true,
			entities: {},
			ids: [],
		};
		expect(allArticlesReducer(state as AllArticlesSchema, fetchAllArticles.fulfilled([], '', 1)))
			.toEqual(
				{
					isLoading: false,
					'hasNext': false,
					ids: [],
					entities: {}
				}
			);
	});
  
});