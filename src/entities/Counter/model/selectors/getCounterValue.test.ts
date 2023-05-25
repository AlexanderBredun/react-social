import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
	test('should return value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});