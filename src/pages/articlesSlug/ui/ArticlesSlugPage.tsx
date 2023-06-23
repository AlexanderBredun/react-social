
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/storeHooks';
import { ArticleConstructor, articleSlugReducer, getArticleSlugError } from '@/entities/Article';
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById';
import { PageWrapper } from '@/widgets/PageWrapper';
import { AsyncReducersReducers, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import cls from './ArticlesSlugPage.module.scss';
import { FormEvent, ReactNode, Suspense, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { articleCommentsReducer, getArticlesComments } from '../model/slices/articleCommentsSlice/articleCommentsSlice';

import { fetchArticleComments } from '../model/services/fetchArticleComments/fetchArticleComments';
import { Navigate, useParams } from 'react-router-dom';
import { eRouteNames } from '@/shared/lib/types';
import { getArticleCommentsAdded, getArticleCommentsError, getArticleCommentsLoading, getArticleNewCommentError, getArticleNewCommentLoading } from '../model/selectors/articleCommentsSelectors';

import { Heading } from '@/shared/ui/Heading';
import { CommentsSection } from '@/widgets/CommentsSection';
import { addNewComment } from '../model/services/addNewComment/addNewComment';

const asyncReducers: AsyncReducersReducers = {
	articleSlug: articleSlugReducer,
	articleComments: articleCommentsReducer
};

const ArticlesSlugPage = memo(() => {

	useAsyncReducer(asyncReducers, true);

	const { id } = useParams<{ id: string }>();

	// TODO: CREATE SELECTORS AND UPDATE RENDER 	
	const dispatch = useAppDispatch();

 
	const articleError = useAppSelector(getArticleSlugError);

	const articleComments = useAppSelector(getArticlesComments.selectAll);
	const articleCommentsLoading = useAppSelector(getArticleCommentsLoading);
	const articleCommentsError = useAppSelector(getArticleCommentsError);
	const articleCommentsAdded = useAppSelector(getArticleCommentsAdded);
	const articleNewCommentError = useAppSelector(getArticleNewCommentError);
	const articleNewCommentLoading = useAppSelector(getArticleNewCommentLoading);

	let content: ReactNode;
	
	
	useEffect(() => {
		if(__PROJECT__ !== 'storybook'){
			dispatch(fetchArticleById(id || ''));
			dispatch(fetchArticleComments(id || ''));
		}
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleAddNewComment = useCallback((value: string) => {
		dispatch(addNewComment(value));
	}, [dispatch]);

	const { t } = useTranslation(['articles', 'translation']);
	
	if (!id && __PROJECT__ !== 'storybook') {
		return <Navigate to={eRouteNames.MAIN} />;
	}
	if (articleError) {
		content = (
			<Heading className={cls.heading} size='L' type='danger' heading={t('error.load', { ns: 'translation' })} />
		);
	}
	else {
		content = (
			<>
				 
				<ArticleConstructor />

				<hr />

				<Suspense fallback=''>
					<CommentsSection
						hasSuccess={articleCommentsAdded}
						commentNewError={articleNewCommentError}
						commentNewLoading={articleNewCommentLoading}
						submit={handleAddNewComment}
						className={cls['article-comment-block']}
						error={articleCommentsError}
						loading={articleCommentsLoading}
						comments={articleComments} />
				</Suspense>
				

			</>
		);
	}
	return (
		<PageWrapper>

			{content}
		</PageWrapper>
	);
});

export default ArticlesSlugPage;