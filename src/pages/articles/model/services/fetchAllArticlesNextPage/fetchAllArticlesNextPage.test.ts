import axios, { AxiosStatic } from 'axios';
import { DeepPartial, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { fetchAllArticlesNextPage } from './fetchAllArticlesNextPage';
import { fetchAllArticles } from '../fetchAllArticles/fetchAllArticles';

jest.mock('../fetchAllArticles/fetchAllArticles');
jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('fetchAllArticles.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;
	const state: DeepPartial<StateSchema> = {
		allArticles: {
			isLoading: false,
			error: undefined,
			page: 1,
			hasNext: true,
			limit: 4,
			ids: [],
			entities: {}
		}
	};
	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn(() => state as StateSchema);
		$api = mockedAxios;
	});
	
	test('success', async () => {
		
		const action = fetchAllArticlesNextPage();
	
		await action(dispatch, getState, { $api });
		
		expect(dispatch).toBeCalledTimes(4);
		expect(fetchAllArticles).toBeCalledWith(2);
	});
	test('fail doesnt have more items ', async () => {
		const stateFail: DeepPartial<StateSchema> = {
			allArticles: {
				isLoading: false,
				error: undefined,
				page: 1,
				hasNext: false,
				limit: 4,
				ids: [],
				entities: {}
			}
		};
		getState = jest.fn(() => stateFail as StateSchema);
		const action = fetchAllArticlesNextPage();
	
		const result = await action(dispatch, getState, { $api });

		expect(dispatch).toBeCalledTimes(2);
		expect(fetchAllArticles).not.toBeCalled();
	}); 
	test('fail isLoading active ', async () => {
		const stateFail: DeepPartial<StateSchema> = {
			allArticles: {
				isLoading: true,
				error: undefined,
				page: 1,
				hasNext: true,
				limit: 4,
				ids: [],
				entities: {}
			}
		};
		getState = jest.fn(() => stateFail as StateSchema);
		const action = fetchAllArticlesNextPage();
	
		const result = await action(dispatch, getState, { $api });

		expect(dispatch).toBeCalledTimes(2);
		expect(fetchAllArticles).not.toBeCalled();
	}); 
});