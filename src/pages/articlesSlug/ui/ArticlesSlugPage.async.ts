import { lazy } from 'react';

const lazySlugArticles = lazy(()=> import('./ArticlesSlugPage'));

export default lazySlugArticles;