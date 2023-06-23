import axios, { AxiosStatic } from 'axios';
import { fetchUserProfile } from './fetchUserProfile';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { userActions } from '@/entities/User';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('fetchUserProfile.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;

	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn();
		$api = mockedAxios;
	});

	const mockUser = {
		'firstname': 'me',
		'lastname': 'my lastname',
		'age': '12',
		'currency': 'USD',
		'country': 'Ukraine',
		'city': 'Kramatorsk',
		'username': 'alal111',
		'avatar': 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg'
	};

	test('success get profile', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockUser }));
		const action = fetchUserProfile('1');
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(mockedAxios.get).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledTimes(2);
	});
	test('fail get profile', async () => {
		mockedAxios.get.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = fetchUserProfile('1');
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.get).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(result.payload).toBe('error');
	}); 
});