import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/shared/lib/providers/theme';
import './app/styles/index.scss';

import '@/shared/config/i18n';
import { ErrorBoundary } from '@/widgets/ErrorBoundary';
import { StoreProvider } from '@/app/providers/store';

render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,
	
	document.getElementById('root')
);
