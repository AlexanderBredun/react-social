import axios, { AxiosStatic } from 'axios';

import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { userActions } from '@/entities/User';
import { Article } from '../../types/article';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';
import { fetchArticleById } from './fetchArticleById';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('fetchArticleById.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;

	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn();
		$api = mockedAxios;
	});


	test('success get article', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ data: articleMock }));
		const action = fetchArticleById('1');
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(mockedAxios.get).toHaveBeenCalled();
	});
	test('fail get article', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = fetchArticleById('2');
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.get).toHaveBeenCalled();
		
		expect(result.payload).toBe('error');
	}); 
});