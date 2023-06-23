import { Suspense, memo, useCallback, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../lib/routes';

import { PageLoader } from '@/widgets/PageLoader';
import { useAppSelector } from '@/app/store/hooks/storeHooks';
import { getFullUser } from '@/entities/User';
import { RequireAuth } from './RequireAuth';

function AppRouter() {

	const isAuth = useAppSelector(getFullUser).authData;
	
	const routesFiltered = useCallback((route)=> {
		return <Route key={route.path} path={route.path} element={route.needAuth && !isAuth ? (<RequireAuth>{route.element}</RequireAuth>) : route.element} />;
	}, [isAuth]);

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(routesFiltered)}
			</Routes>
		</Suspense>
	);
}

export default memo(AppRouter);