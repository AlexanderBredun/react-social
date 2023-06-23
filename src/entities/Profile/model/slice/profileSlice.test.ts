import { DeepPartial } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { eCurrency } from '@/entities/Currency';
import { eCountry } from '@/entities/Country';
import { profileReducer } from './profileSlice';
import { profileActions } from './profileSlice';
import { updateUserProfile } from '../services/updateUserProfile/updateUserProfile';


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

describe('userSlice.test', () => {
	test('should change form', () => {

		const state: DeepPartial<ProfileSchema> = {
			form: mockUser
		};

		const changedUser:Profile = {
			...mockUser,
			firstname: 'test'
		};
	
		expect(profileReducer(state as ProfileSchema, profileActions.changeForm(changedUser))).toEqual({ form: changedUser });
	});

	test('test profile update pending', () => {

		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			error: 'error'
		};

	
		expect(profileReducer(state as ProfileSchema, updateUserProfile.pending)).toEqual({
			isLoading: true,
			error: ''
		});
	});

	test('test profile update fulfilled', () => {

		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			form: null,
			data: null,
			error: null
		};

	
		expect(profileReducer(state as ProfileSchema, updateUserProfile.fulfilled(mockUser, '', mockUser))).toEqual({
			isLoading: false,
			error: null,
			form: mockUser,
			data: mockUser
		});
	});

    
});