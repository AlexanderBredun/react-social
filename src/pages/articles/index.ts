import lazyArticles from './ui/ArticlesPage.async';

export {
	lazyArticles as ArticlesPage
}; 

export {
	AllArticlesSchema
} from './model/types/allArticlesSchema';

export {
	allArticlesActions,
	allArticlesReducer,
	getAllArticles
} from './model/slices/allArticlesSlice';