import { classNames } from '.';

describe('classNames', () => {
	describe( 'right', () => {
		it('run with main class', ()=> {
			expect(classNames('hello')).toBe('hello');
		});
    
		it('run with secondary class as array', ()=> {
			expect(classNames('hello', ['test'])).toBe('hello test');
		});
    
		it('run with secondary class as object', ()=> {
			expect(classNames('hello', { test: true, test1: true })).toBe('hello test test1');
		});
    
		it('run with secondary class as object with false', ()=> {
			expect(classNames('hello', { test: false, test1: true })).toBe('hello test1');
		});

		it('run with secondary class as object with undefined', ()=> {
			expect(classNames('hello', { test: undefined, test1: true })).toBe('hello test1');
		});
	});
	

});