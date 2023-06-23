
import { ArticleList } from '@/entities/Article';
import cls from './ArticlesPage.module.scss';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Heading } from '@/shared/ui/Heading';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ListTypes, ListViewTypeSwitcher } from '@/features/ListViewTypeSwitcher';
import { LOCAL_STORAGE } from '@/shared/lib/helpers/constants';
import { AsyncReducersReducers, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import { allArticlesActions, allArticlesReducer, getAllArticles } from '../model/slices/allArticlesSlice';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/storeHooks';
import { getAllArticlesError, getAllArticlesLoading, getAllArticlesPage, getAllArticlesType } from '../model/selectors/allArticlesSelectors';
import { fetchAllArticles } from '../model/services/fetchAllArticles/fetchAllArticles';
import { GRID_LIMIT, LIST_LIMIT } from '../lib/paginationConsts';
import { fetchAllArticlesNextPage } from '../model/services/fetchAllArticlesNextPage/fetchAllArticlesNextPage';

// const articles: Article[] = new Array(16).fill(0).map((el, id)=> ({ ...articleMock, id: String(id+1) }));

const reducers: AsyncReducersReducers = {
	allArticles: allArticlesReducer
};

const ArticlesPage = memo(()=> {
	const { t } = useTranslation('articles');

	useAsyncReducer(reducers);

	const isLoading = useAppSelector(getAllArticlesLoading);
	const error = useAppSelector(getAllArticlesError);
	const articles = useAppSelector(getAllArticles.selectAll);
	const totalArticlesLoaded = useAppSelector(getAllArticles.selectTotal);
	const page = useAppSelector(getAllArticlesPage);
	const activeType = useAppSelector(getAllArticlesType);
	const dispatch = useAppDispatch();

	const handleBtnActiveClick = useCallback((type: ListTypes)=> {
		dispatch(allArticlesActions.setListType(type));
		dispatch(allArticlesActions.setLimit(type === 'grid' ? GRID_LIMIT : LIST_LIMIT));
		localStorage.setItem(LOCAL_STORAGE.ARTICLE_VIEW, type);
		if(type === 'grid' && page === 1 && totalArticlesLoaded < GRID_LIMIT) {
			dispatch(fetchAllArticles(1));
		}
	}, [dispatch, page, totalArticlesLoaded]);

	useEffect(()=> {
		if(__PROJECT__ !== 'storybook'){
			dispatch(allArticlesActions._initStore());
			dispatch(fetchAllArticles(1));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onScrollEnd = useCallback(()=> {
		dispatch(fetchAllArticlesNextPage());
	}, [dispatch]);

	return (
		<PageWrapper isLoading={isLoading} noScroll={Boolean(error)} onScrollEnd={onScrollEnd}>
			<Heading heading='Статьи' />
			<div className={cls['utils']}>
				<ListViewTypeSwitcher active={activeType} onChangeType={handleBtnActiveClick} />
			</div>
			<ArticleList  articles={articles} cardsType={activeType} isLoading={isLoading} error={error} />
		</PageWrapper>
		
	);
});

export default ArticlesPage;