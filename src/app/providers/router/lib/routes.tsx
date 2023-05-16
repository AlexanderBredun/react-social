import { AboutPage } from '@/pages/about';
import { HomePage } from '@/pages/home';
import { eRouteNames } from '@/shared/lib/types';
import { RouteProps } from 'react-router-dom';


export const routes: RouteProps[] = [
	{
		path: eRouteNames.MAIN,
		element: <HomePage />
	},
	{
		path: eRouteNames.ABOUT,
		element: <AboutPage />
	},
];



