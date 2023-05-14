import { createContext } from "react";

export enum eThemes{
    light = 'light-theme',
    dark = 'dark-theme',
  }

 export interface IThemes{
    theme?: eThemes;
    setTheme?: (theme: eThemes) => void;
  }



  const themeContext = createContext<IThemes>({})

  

  export default themeContext;

  const LOCAL_STORAGE_THEME_KEY = 'theme'

  export {
    LOCAL_STORAGE_THEME_KEY
  }