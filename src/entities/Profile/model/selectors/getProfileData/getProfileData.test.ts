import { StateSchema } from '@/app/store';

import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileData } from './getProfileData';

describe('getFullUser.test', () => {
	test('should return user object', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: false,
				data: {
					age: '12'
				}
			}
		};
		expect(getProfileData(state as StateSchema)).toEqual({
			age: '12'
		});
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});