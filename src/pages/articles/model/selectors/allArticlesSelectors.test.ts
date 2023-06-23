import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { getAllArticlesError, getAllArticlesHasNext, getAllArticlesLimit, getAllArticlesLoading, getAllArticlesPage, getAllArticlesType } from './allArticlesSelectors';
import { GRID_LIMIT, LIST_LIMIT } from '../../lib/paginationConsts';

describe('allArticlesSelectors.test', () => {
	
	const state: DeepPartial<StateSchema> = {
		allArticles: {
			isLoading: false,
			error: 'error',
			hasNext: true,
			page: 10,
			listType: 'list',
			limit: LIST_LIMIT,
			entities: {},
			ids: []
		}
	};
	test('should return loading', () => {
		expect(getAllArticlesLoading(state as StateSchema)).toEqual(false);
	});
	test('should return error', () => {
		expect(getAllArticlesError(state as StateSchema)).toEqual('error');
	});
	test('should return hasNext', () => {
		expect(getAllArticlesHasNext(state as StateSchema)).toEqual(true);
	});
	describe('page', () => {
		test('should return page', ()=> {
			expect(getAllArticlesPage(state as StateSchema)).toEqual(10);
		});
		test('should work with empty', ()=> {
			expect(getAllArticlesPage({} as StateSchema)).toEqual(1);
		});
	});
	describe('limit', () => {
		test('should return limit', ()=> {
			expect(getAllArticlesLimit(state as StateSchema)).toEqual(LIST_LIMIT);
		});
		test('should work with empty', ()=> {
			expect(getAllArticlesLimit({} as StateSchema)).toEqual(GRID_LIMIT);
		});
	});
	describe('type', () => {
		test('should return type ', ()=> {
			expect(getAllArticlesType(state as StateSchema)).toEqual('list');
		});
		test('should work with empty', ()=> {
			expect(getAllArticlesType({} as StateSchema)).toEqual('grid');
		});
	});
});