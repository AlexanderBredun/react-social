import { useEffect } from 'react';
import { eThemes } from '@/shared/lib/providers/theme';
import { StoryContext, StoryFn } from '@storybook/react';
export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {


	useEffect(()=> {
		const values = Object.values(eThemes);
		values.forEach((el:string) => document.body.classList.remove(el));
		document.body.classList.add(eThemes[context.globals.theme as keyof typeof eThemes]);
	}, [context.globals.theme]);
	return (
		<Story />
	);
};
  