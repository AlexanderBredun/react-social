import { useEffect } from 'react';
import testConfig from './i18next';
import { I18nextProvider } from 'react-i18next';
export const i18nDecorator = (Story, context) => {
	const { locale } = context.globals;

	useEffect(() => {
		testConfig.changeLanguage(locale);
	}, [locale]);
	return (
		<I18nextProvider i18n={testConfig}>
			<Story />
		</I18nextProvider>
	);
};
  