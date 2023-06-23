import { NotFoundPage } from '@/pages/404';
import { AboutPage } from '@/pages/about';
import { ArticlesPage } from '@/pages/articles';
import { ArticlesSlugPage } from '@/pages/articlesSlug';
import { HomePage } from '@/pages/home';
import { ProfilePage } from '@/pages/profile';
import { eRouteNames } from '@/shared/lib/types';
import { RouteProps } from 'react-router-dom';

export interface RouteApp extends RouteProps{
	needAuth?: boolean;
}


export const routes: RouteApp[] = [
	{
		path: eRouteNames.MAIN,
		element: <HomePage />,
	},
	{
		path: eRouteNames.ABOUT,
		element: <AboutPage />
	},
	{
		path: eRouteNames.PROFILE + ':id',
		element: <ProfilePage />,
		needAuth: true
	},

	{
		path: eRouteNames.ARTICLES,
		element: <ArticlesPage />,
		needAuth: true
	},
	{
		path: eRouteNames.ARTICLES_SLUG + ':id',
		element: <ArticlesSlugPage />,
		needAuth: true
	},

	// last route
	{
		path: eRouteNames.NOT_FOUND,
		element: <NotFoundPage />
	},
];


