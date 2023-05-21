import { useEffect } from 'react';
import { eThemes, useTheme } from '../../../src/shared/lib/providers/theme';
export const ThemeDecorator = (Story, context) => {
	
	const { setTheme } = useTheme();
	useEffect(()=> {
		const values = Object.values(eThemes);
		values.forEach(el=> document.body.classList.remove(el));
		document.body.classList.add(eThemes[context.globals.theme]);
	}, [context.globals.theme]);
	return (
		<Story />
	);
};
  