import './styles/index.scss';
import { classNames } from '@/shared/lib/helpers';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';

import { Sidebar } from '@/widgets/Sidebar';
import { useRealHeight } from './hooks/useRealHeight';

import { Suspense } from 'react';




function App() {

	useRealHeight();

	return (
		<div className={classNames('app')}>
			<Suspense fallback="">
				<Navbar />
				<div className='page-with-sidebar'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
   
	);
}

export default App;