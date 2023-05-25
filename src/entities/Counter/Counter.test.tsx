import renderWithDecorators from '@/shared/lib/tests/renderWithDecorators';
import { Counter } from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter.test', () => {
	it('renders without crashing', ()=> {
		const initialState = {
			counter: {
				value: 10
			}
		};
		render(renderWithDecorators(<Counter />, { initialState }));
		expect(screen.getByTestId('counter-title')).toBeInTheDocument();
	});
	it('btn increment', ()=> {
		const initialState = {
			counter: {
				value: 10
			}
		};
		render(renderWithDecorators(<Counter />, { initialState }));
		fireEvent.click(screen.getByTestId('btn-inc'));
		expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
	});
	it('btn decrement', ()=> {
		const initialState = {
			counter: {
				value: 10
			}
		};
		render(renderWithDecorators(<Counter />, { initialState }));
		fireEvent.click(screen.getByTestId('btn-dec'));
		expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
	});
});

