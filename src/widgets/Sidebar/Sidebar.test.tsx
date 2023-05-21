import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar';
import renderWithTranslation from '@/shared/lib/tests/renderWithTranslation';


describe('Sidebar', ()=> {
	it('renders without crashing', ()=> {
		render(renderWithTranslation(<Sidebar />));
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	it('toggle sidebar', ()=> {
		render(renderWithTranslation(<Sidebar />));
		const btnToggle = screen.getByTestId('toggle-btn');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(btnToggle);
       
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
		
	});

	
});