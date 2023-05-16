

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../lib/routes";

function AppRouter() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
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