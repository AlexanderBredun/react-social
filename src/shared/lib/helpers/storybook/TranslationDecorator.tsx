import { useEffect } from 'react';
import testConfig from './i18next';
import { I18nextProvider } from 'react-i18next';
import { StoryContext, StoryFn } from '@storybook/react';
export const TranslationDecorator = (Story: StoryFn, context: StoryContext) => {
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
  