import { useContext, useEffect } from "react";
import themeContext, { LOCAL_STORAGE_THEME_KEY, eThemes } from "./context";

export default function useTheme(){
    const {theme, setTheme} = useContext(themeContext)

    const toggleTheme = () => {
        setTheme(theme === eThemes.light ? eThemes.dark : eThemes.light)
      }
    
      useEffect(() => {
        const values = Object.values(eThemes);
        values.forEach(el=> document.body.classList.remove(el))
        
        document.body.classList.add(theme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
      }, [theme])

      return {
        theme,
        setTheme: toggleTheme
      }
}