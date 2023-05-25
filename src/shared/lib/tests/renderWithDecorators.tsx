import { StoreProvider } from '@/app/providers/store';
import { StateSchema } from '@/app/store';
import testConfig from '@/shared/config/i18n/testConfig';
import { DeepPartial } from '@reduxjs/toolkit';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

interface IOptions{
	route?: string;
	initialState?: StateSchema
}

function renderWithDecorators(component: ReactNode, options: IOptions = {}) {
	const {
		route = '/',
		initialState
	} = options;
	return (
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={testConfig}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
		
		
	);
}

export default renderWithDecorators;