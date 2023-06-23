import axios, { AxiosStatic } from 'axios';

import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';

import { Article } from '@/entities/Article';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';
import { fetchAllArticles } from './fetchAllArticles';


jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('fetchAllArticles.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;

	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn(() => ({}) as StateSchema);
		$api = mockedAxios;
	});
 
	const mockArticles: Article[] = [
		articleMock,
		{ ...articleMock, id: '2test' },
		{ ...articleMock, id: '3test' },
	];
	
	test('success fetch articles', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockArticles }));
		const action = fetchAllArticles(1);
	
		const result = await action(dispatch, getState, { $api });
		
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(mockedAxios.get).toHaveBeenCalled();
		expect(result.payload).toStrictEqual(mockArticles);
	});
	test('fail fetch articles ', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = fetchAllArticles(1);
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.get).toHaveBeenCalled();
		
		expect(result.payload).toBe('error');
	}); 
});