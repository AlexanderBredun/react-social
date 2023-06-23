import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileLoading } from './getProfileLoading';


describe('getFullUser.test', () => {
	test('should return user object', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true,
			}
		};
		expect(getProfileLoading(state as StateSchema)).toEqual(true);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileLoading(state as StateSchema)).toEqual(false);
	});
});