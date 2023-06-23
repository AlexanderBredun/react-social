import lazySlugArticles from './ui/ArticlesSlugPage.async';

export {
	lazySlugArticles as ArticlesSlugPage
}; 

export {
	ArticleCommentsScheme
} from './model/types/ArticleCommentsScheme';

export {
	articleCommentsActions,
	articleCommentsReducer
} from './model/slices/articleCommentsSlice/articleCommentsSlice';