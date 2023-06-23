import axios, { AxiosStatic } from 'axios';

import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { commentMock } from '@/shared/lib/tests/mocks/commentMock';
import { fetchArticleComments } from './fetchArticleComments';
import { iComment } from '@/entities/Comments';


jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('addNewComment.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;

	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn(() => ({}) as StateSchema);
		$api = mockedAxios;
	});

	const mockComments: iComment[] = [
		commentMock,
		commentMock,
		commentMock
	];
	
	test('success fetch comments', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockComments }));
		const action = fetchArticleComments('1');
	
		const result = await action(dispatch, getState, { $api });
		
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(mockedAxios.get).toHaveBeenCalled();
		expect(result.payload).toStrictEqual(mockComments);
	});
	test('fail add new comment ', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = fetchArticleComments('1');
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.get).toHaveBeenCalled();
		
		expect(result.payload).toBe('error');
	}); 
});