import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileError } from './getProfileError';

describe('getFullUser.test', () => {
	test('should return user object', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: false,
				error: 'error'
			}
		};
		expect(getProfileError(state as StateSchema)).toEqual('error');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileError(state as StateSchema)).toEqual(null);
	});
});