import testConfig from '@/shared/config/i18n/testConfig';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

function renderWithTranslation(component: ReactNode) {
	return (
		<I18nextProvider i18n={testConfig}>
			{component}
		</I18nextProvider>
	);
}

export default renderWithTranslation;