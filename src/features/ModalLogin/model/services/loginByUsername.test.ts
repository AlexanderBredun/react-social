import axios, { AxiosStatic } from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { userActions } from '@/entities/User';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;

	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn();
		$api = mockedAxios;
	});

	test('success login', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: 'test', id: '12' } }));
		const action = loginByUsername({ username: '123', password: '123' });
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledTimes(3);
		expect(dispatch).toHaveBeenCalledWith(userActions.setUser({ username: 'test', id: '12' }));
	});
	test('fail login', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = loginByUsername({ username: '123', password: '123' });
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(result.payload).toBe('error');
	}); 
});