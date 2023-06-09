import { lazy } from 'react';

const LazyLoginForm = lazy(()=> import('./LoginForm'));

export { LazyLoginForm };