import { useContext, useEffect } from 'react';
import themeContext, { LOCAL_STORAGE_THEME_KEY, eThemes } from './context';

export default function useTheme(){
	const { theme, setTheme } = useContext(themeContext);

	const toggleTheme = () => {
		if(setTheme){
			let newTheme: eThemes;

			switch(theme){
			case eThemes.light:
				newTheme = eThemes.dark;
				break;
			case eThemes.dark:
				newTheme = eThemes.blue;
				break;
			case eThemes.blue:
				newTheme = eThemes.light;
				break;
			default:
				newTheme = eThemes.dark;
				break;
			}

			setTheme(newTheme);
		}
		
	};
    
	useEffect(() => {
		const values = Object.values(eThemes);
		values.forEach(el=> document.body.classList.remove(el));
		if(theme){
			document.body.classList.add(theme);
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
		}
		
	}, [theme]);

	return {
		theme,
		setTheme: toggleTheme
	};
}