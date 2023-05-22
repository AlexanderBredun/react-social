import testConfig from '@/shared/config/i18n/testConfig';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

interface IOptions{
	route?: string;
}

function renderWithDecorators(component: ReactNode, options: IOptions = {}) {
	const {
		route = '/'
	} = options;
	return (
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={testConfig}>
				{component}
			</I18nextProvider>
		</MemoryRouter>
		
	);
}

export default renderWithDecorators;