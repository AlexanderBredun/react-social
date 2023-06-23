import { FC, ReactNode, useCallback, useEffect } from 'react';
import cls from './ArticleConstructor.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/storeHooks';
import { getArticleSlugData, getArticleSlugError, getArticleSlugLoading } from '../../model/selectors/articleSlugSelectors';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Heading } from '@/shared/ui/Heading';
import { ArticleBlock, eArticleBlockType } from '../../types/article';
import { ArticleBlockText } from '../ArticleBlockText/ArticleBlockText';
import { ArticleBlockCode } from '../ArticleBlockCode/ArticleBlockCode';
import { ArticleBlockImage } from '../ArticleBlockImage/ArticleBlockImage';
import { CommentsList } from '@/entities/Comments/ui/CommentsList/CommentsList';
import { UserLink } from '@/features/UserLink';
import { useTranslation } from 'react-i18next';
import { Views } from '@/shared/ui/Views/Views';

interface ArticleConstructorProps {

}

const SkeletFiller: ReturnType<typeof Skeleton>[] = [
	<Skeleton width='60%' height='1.5rem' key={1} />,
	<Skeleton width='80%' height='3.5rem' key={2} />,
	<Skeleton height='2.5rem' key={3} />,
	<Skeleton width='100%' height='17.5rem' key={4} image />,
	<Skeleton height='5.5rem' key={5} />,
	<Skeleton height='3.5rem' key={6} />,
	<Skeleton height='1.5rem' key={7} />,
	<Skeleton height='1.5rem' key={8} />,
	<Skeleton height='1.5rem' key={9} />,
	<Skeleton height='1.5rem' key={10} />,
	<Skeleton height='1.5rem' key={11} />,
];

const ArticleConstructor: FC<ArticleConstructorProps> = () => {

	const isLoading = useAppSelector(getArticleSlugLoading);

	const articleData = useAppSelector(getArticleSlugData);

	const articleBlocks = useCallback((block: ArticleBlock) => {
		switch (block.type) {
		case eArticleBlockType.TEXT:
			return <ArticleBlockText block={block} key={block.id} />;
		case eArticleBlockType.CODE:
			return <ArticleBlockCode block={block} key={block.id} />;
		case eArticleBlockType.IMAGE:
			return <ArticleBlockImage block={block} key={block.id} />;
		default: 
			return '';
		}
	}, []);

	let content: ReactNode;

	if (isLoading) {
		content = (
			<>
				<Skeleton width='30%' height='1rem' />
				<Skeleton height='6rem' />
				<Skeleton />
				<Skeleton image />
				{SkeletFiller}
			</>
		);
	}
	if (articleData) {
		content = (
			<>
				<div className={cls['user-date-block']}>
					<UserLink username={articleData.user.username} avatar={articleData.user.avatar} profileId={articleData.user.id} />
					<p>
						{articleData.createdAt}
					</p>
				</div>
				
				<div className={cls['article-heading-block']}>
					<div className={cls['article-heading-heading']}>
						<Heading
							size='XL'
							heading={articleData.title}
							subheading={articleData.subtitle}
						/>
					</div>
					<div className={cls['article-info-block']}>
						<Views count={articleData.views} />
					</div>
					
					<div className={cls['article-heading-img']}>
						<img src={articleData.img} alt={articleData.title} />
					</div>

				</div>

				{articleData.blocks.length > 0 && articleData.blocks.map(articleBlocks)}
               

			</>
		);
	}

	return (
		<article className={cls['article-constructor']}>
			{content}
		</article>
	);
};

export {
	ArticleConstructor
};