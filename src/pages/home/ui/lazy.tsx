import { lazy } from 'react';

const lazyHome = lazy(()=> import('./Home'));

export default lazyHome;