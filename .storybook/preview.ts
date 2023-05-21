import type { Preview } from "@storybook/react";
import '../src/app/styles/index.scss';
import { ThemeDecorator } from "../config/storybook/helpers/ThemeDecorator";
import { RouterDecorator } from "../config/storybook/helpers/RouterDecorator";
import { eThemes } from '../src/shared/lib/providers/theme';
import { i18nDecorator } from "../config/storybook/helpers/i18nDecorator";


const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [...Object.keys(eThemes)],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: 'en', title: 'English' },
          { value: 'ru', right: 'ru', title: 'Russian' },
          
        ],
        showName: true,
      },
    },
  },
  parameters: {
    
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    
  },
  decorators: [ThemeDecorator, RouterDecorator, i18nDecorator],
    
};

export default preview;
