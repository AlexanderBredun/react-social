import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileForm } from './getProfileForm';


describe('getFullUser.test', () => {
	test('should return user object', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: false,
				form: {
					age: '12'
				}
			}
		};
		expect(getProfileForm(state as StateSchema)).toEqual({
			age: '12'
		});
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(null);
	});
});