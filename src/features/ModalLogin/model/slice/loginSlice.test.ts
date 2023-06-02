
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/LoginSchema';
import { DeepPartial } from '@reduxjs/toolkit';


describe('loginSlice.test', () => {
	test('username setted', () => {
		
		const state: DeepPartial<LoginSchema> = {
			username: '',
		};
		expect(loginReducer(state as LoginSchema, loginActions.setUsername('test')) ).toEqual({ username: 'test' });
	});

	test('password setted', () => {
		
		const state: DeepPartial<LoginSchema> = {
			password: '',
		};
		expect(loginReducer(state as LoginSchema, loginActions.setPassword('test')) ).toEqual({ password: 'test' });
	});
});