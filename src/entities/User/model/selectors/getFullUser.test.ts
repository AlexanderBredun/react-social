import { StateSchema } from '@/app/store';
import { getFullUser } from './getFullUser';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getFullUser.test', () => {
	test('should return user object', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: 'test',
					username: 'test'
				}
			}
		};
		expect(getFullUser(state as StateSchema)).toEqual({
			authData: {
				id: 'test',
				username: 'test'
			}
		});
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getFullUser(state as StateSchema)).toEqual(undefined);
	});
});