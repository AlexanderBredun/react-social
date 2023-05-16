

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../lib/routes';
import { useTranslation } from 'react-i18next';

function AppRouter() {

	const { t } = useTranslation();
	return (
		<Suspense fallback={<div>{t('loading')}...</div>}>
			<Routes>
				{routes.map(({ path, element }, indx) => (
					<Route key={indx} path={path} element={(
						<div className='page-wrapper'>
							{element}
						</div>
					)} />
				))}
			</Routes>
		</Suspense>
	);
}

export default AppRouter;