import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar';
import renderWithDecorators from '@/shared/lib/tests/renderWithDecorators';


describe('Sidebar', ()=> {
	it('renders without crashing', ()=> {
		render(renderWithDecorators(<Sidebar />));
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	it('toggle sidebar', ()=> {
		render(renderWithDecorators(<Sidebar />));
		const btnToggle = screen.getByTestId('toggle-btn');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(btnToggle);
       
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
		
	});

	
});