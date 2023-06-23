import axios, { AxiosStatic } from 'axios';

import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { commentMock } from '@/shared/lib/tests/mocks/commentMock';
import { addNewComment } from './addNewComment';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';
import { userMock } from '@/shared/lib/tests/mocks/userMock';


jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('addNewComment.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;

	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn(() => ({
			articleSlug: {
				data: articleMock
			},
			user: {
				authData: userMock
			}
		}) as StateSchema);
		$api = mockedAxios;
	});

	const mockCommentBody = 'test mock comment';
	
	test('success add new comment', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: { ...commentMock, body: mockCommentBody } }));
		const action = addNewComment(mockCommentBody);
	
		const result = await action(dispatch, getState, { $api });
		console.log(result.meta);
        
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.payload).toStrictEqual({ ...commentMock, body: mockCommentBody });
	});
	test('fail add new comment not enought data', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = addNewComment('');
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.post).not.toHaveBeenCalled();
		
		expect(result.payload).toBe('not enough data');
	}); 
	test('fail add new comment ', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = addNewComment('test');
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.post).toHaveBeenCalled();
		
		expect(result.payload).toBe('error');
	}); 
});