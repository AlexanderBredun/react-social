import { FC, memo, useCallback } from 'react';
import cls from './ArticleListItem.module.scss';
import { Article } from '../../types/article';
import { Views } from '@/shared/ui/Views/Views';
import { Link, useNavigate } from 'react-router-dom';
import { eRouteNames } from '@/shared/lib/types';

import { classNames } from '@/shared/lib/helpers';
import { Heading } from '@/shared/ui/Heading';
import { ListTypes } from '@/features/ListViewTypeSwitcher';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { UserLink } from '@/features/UserLink';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

interface ArticleListItemProps{
    article?: Article
    cardsType: ListTypes
	skeleton?: boolean
}

const ArticleListItem = memo(({ article, cardsType, skeleton }: ArticleListItemProps) => {

	const { t } = useTranslation('translation');
	const router = useNavigate();

	const goToArticle = useCallback(()=> {
		router(eRouteNames.ARTICLES_SLUG + article?.id);
	}, [article?.id, router]);


	if(skeleton){
		return (
			<article className={classNames(cls['card'], [cls[cardsType], cls['skeleton']])}>
				{ cardsType === 'list' &&
				<UserLink className={cls['user-article']} skeleton username='' />
				}
				<div className={cls['image']}>
					{ cardsType === 'list' ?
						<Skeleton height='40rem' />
						:<Skeleton height='10rem' />
					}
				</div>
				<div className={cls['info']}>
					<Skeleton width='20%' className={cls['date']} />
					<Skeleton width='20%' className={cls['views-article']} />
				</div>
				{ cardsType === 'list' ?
					<>
						<Skeleton height='6rem' className={cls['heading']} />
						<Skeleton height='4rem' className={cls['tags']} />
					</>
					:
					<>
						<Skeleton height='1rem' className={cls['heading']} />
						<Skeleton height='1rem' className={cls['tags']} />
					</>
				}
				
				
			</article>
		);
	}

	return (
		<article className={classNames(cls['card'], [cls[cardsType]])}>
		
			{ cardsType === 'list' &&
				<UserLink className={cls['user-article']} username={article?.user.username || ''} profileId={article?.user.id} avatar={article?.user.avatar} />
			}
			<Link  to={eRouteNames.ARTICLES_SLUG + article?.id}>
				<div className={cls['image']}>
					<img src={article?.img} alt={article?.title} />
				</div>
			</Link>
			
			<div className={cls['content']}>
				<div className={cls['info']}>
					<p className={cls['date']}>
						{article?.createdAt.replace(/\s.+/gm, '')}
					</p>
					<Views className={cls['views-article']} count={article?.views || 0} />
				</div>
				<Link  to={eRouteNames.ARTICLES_SLUG + article?.id}>
					<Heading tag='h3'  heading={article?.title || ''} className={cls['heading']} />
				</Link>
				
				<p className={cls['tags']} title={article?.type.join(', ')}>
					{article?.type.map(type => (
						<span key={type}>#{type}</span> 
					))}
				</p>
				<Button className={cls['btn-article']} onClick={goToArticle} >
					{t('Read more')}
				</Button>
			</div>
			
		</article>
	);
});

export {
	ArticleListItem
};