import { lazy } from 'react';

const LazyAddCommentForm = lazy(()=> import('./AddCommentForm'));

export { LazyAddCommentForm };