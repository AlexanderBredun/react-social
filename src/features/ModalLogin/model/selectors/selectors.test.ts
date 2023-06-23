import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginLoading } from './getLoginLoading/getLoginLoading';
import { StateSchema } from '@/app/store';
import { getLoginError } from './getLoginError/getLoginError';
import { getLoginUsername } from './getLoginUsername/getLoginUsername';
import { getLoginPassword } from './getLoginPassword/getLoginPassword';
import { LoginSchema } from '../types/LoginSchema';

interface LoginPart {
	login: DeepPartial<LoginSchema>
}

describe('selectors.test', () => {
	describe('loading selector', ()=> {
		it('should return loading state', ()=> {
			const state: LoginPart = {
				login: {
					isLoading: true
				}
				
			};
			expect(getLoginLoading(state as StateSchema)).toBe(true);
		});
		it('should work with empty state', ()=> {
			const state: DeepPartial<StateSchema> = {};
			expect(getLoginLoading(state as StateSchema)).toBe(false);
		});
	});

	describe('error selector', ()=> {
		it('should return error state', ()=> {
			const state: LoginPart = {
				login: {
					error: 'test'
				}
				
			};
			expect(getLoginError(state as StateSchema)).toBe('test');
		});
		it('should work with empty state', ()=> {
			const state: DeepPartial<StateSchema> = {};
			expect(getLoginError(state as StateSchema)).toBe('');
		});
	});

	describe('username selector', ()=> {
		it('should return username state', ()=> {
			const state: LoginPart = {
				login: {
					username: 'test'
				}
				
			};
			expect(getLoginUsername(state as StateSchema)).toBe('test');
		});
		it('should work with empty state', ()=> {
			const state: DeepPartial<StateSchema> = {};
			expect(getLoginUsername(state as StateSchema)).toBe('');
		});
	});
	

	describe('password selector', ()=> {
		it('should return password state', ()=> {
			const state: LoginPart = {
				login: {
					password: 'test'
				}
				
			};
			expect(getLoginPassword(state as StateSchema)).toBe('test');
		});
		it('should work with empty state', ()=> {
			const state: DeepPartial<StateSchema> = {};
			expect(getLoginPassword(state as StateSchema)).toBe('');
		});
	});
	
});