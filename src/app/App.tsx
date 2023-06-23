
import { classNames } from '@/shared/lib/helpers';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';

import { Sidebar } from '@/widgets/Sidebar';
import { useRealHeight } from './hooks/useRealHeight';

import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from '@/widgets/ErrorBoundary';
import { useAppDispatch, useAppSelector } from './store/hooks/storeHooks';

import { getUserInited, userActions } from '@/entities/User';


function App() {

	useRealHeight();

	const dispatch = useAppDispatch();
	const inited = useAppSelector(getUserInited);

	console.log(inited);
	
	useEffect(()=> {
		dispatch(userActions.initSetUser());
	}, [dispatch]);

	
	return (
		<div className={classNames('app')}>
			<Suspense fallback="">
				<ErrorBoundary isLocal>
					<Navbar />
				</ErrorBoundary>

				<div className='page-with-sidebar'>
					<Sidebar />
					<p>
						{inited}
					</p>
					{
						inited && <AppRouter />
					}
					
				</div>
			</Suspense>
		</div>
   
	);
}

export default App;