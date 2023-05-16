import React, { FC, useMemo, useState } from 'react';

import ThemeContext, { LOCAL_STORAGE_THEME_KEY, eThemes } from '../lib/context';

const ThemeProvider:FC = ({ children })=>  {

	const curTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as eThemes || eThemes.light;



	const [theme, setTheme] = useState<eThemes>(curTheme);

	const themeValue = useMemo(()=> {
		return {
			theme,
			setTheme
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={themeValue}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;