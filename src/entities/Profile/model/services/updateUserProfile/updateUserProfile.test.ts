import axios, { AxiosStatic } from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/store';
import { updateUserProfile } from './updateUserProfile';
import { Profile } from '../../types/profile';
import { eCurrency } from '@/entities/Currency';
import { eCountry } from '@/entities/Country';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('updateUserProfile.test', () => {

	let dispatch: Dispatch;
	let $api:jest.MockedFunctionDeep<AxiosStatic>;
	let getState: () => StateSchema;

	beforeEach(()=> {
		dispatch = jest.fn();
		getState = jest.fn();
		$api = mockedAxios;
	});

	const mockUser:Profile = {
		'firstname': 'me',
		'lastname': 'my lastname',
		'age': '12',
		'currency': eCurrency.EUR,
		'country': eCountry.France,
		'city': 'Kramatorsk',
		'username': 'alal111',
		'avatar': 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg'
	};

	test('success update profile', async () => {
		mockedAxios.put.mockReturnValue(Promise.resolve({ data: mockUser }));
		const action = updateUserProfile(mockUser);
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(mockedAxios.put).toHaveBeenCalled();
	});
	test('fail update profile', async () => {
		mockedAxios.put.mockReturnValue(Promise.resolve({ status: 500 }));
		const action = updateUserProfile(mockUser);
	
		const result = await action(dispatch, getState, { $api });
		expect(result.meta.requestStatus).toBe('rejected');
		expect(mockedAxios.put).toHaveBeenCalled();
		expect(result.payload).toBe('error');
	}); 
});