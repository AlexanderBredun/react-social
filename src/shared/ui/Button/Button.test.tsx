import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button';
import { eBtnVariant } from './Button';


describe('Button', ()=> {
	it('renders without crashing', ()=> {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	it('renders with given variant', ()=> {
		render(<Button variant={eBtnVariant.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass(eBtnVariant.CLEAR);
	});
});