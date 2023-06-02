
import { userReducer } from './userSlice';

import { userActions } from './userSlice';
import { UserSchema } from './types/userSchema';
import { LOCAL_STORAGE } from '@/shared/lib/helpers/constants';

describe('userSlice.test', () => {
	test('should set user', () => {

		const state: UserSchema = {
			authData: undefined
		};
		const mockUser = { id: '1', username: 'test' };
		userReducer(state, userActions.setUser(mockUser));
		console.log(state);
           
		expect(userReducer(state, userActions.setUser(mockUser))).toEqual({ authData: mockUser });
	});
	test('should remove user', () => {

		const state: UserSchema = {
			authData: { id: '1', username: 'test' }
		};
		
		const modified = userReducer(state, userActions.removeUser());
		expect(modified).toEqual({ authData: undefined });
		expect(localStorage.getItem(LOCAL_STORAGE.USER)).toEqual(null);
	});
	
});