import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../lib/routes';

import { PageLoader } from '@/widgets/PageLoader';

function AppRouter() {


	return (
		<div className='page-wrapper'>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					{routes.map(({ path, element }, indx) => (
						<Route key={indx} path={path} element={element} />
					))}
				</Routes>
			</Suspense>
		</div>

	);
}

export default AppRouter;