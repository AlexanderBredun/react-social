import { lazy } from 'react';

const lazyArticles = lazy(()=> import('./ArticlesPage'));

export default lazyArticles;