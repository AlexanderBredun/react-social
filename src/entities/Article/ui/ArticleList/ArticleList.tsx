import { FC, memo, useMemo } from 'react';
import cls from './ArticleList.module.scss';
import { ListTypes } from '@/features/ListViewTypeSwitcher';
import { Article } from '../../types/article';

import { ArticleListItem } from '../ArticleListItem';
import { classNames } from '@/shared/lib/helpers';
import { Heading } from '@/shared/ui/Heading';
import { useTranslation } from 'react-i18next';


interface ArticleListProps{
    articles: Article[],
    isLoading?: boolean
    error?: string
    cardsType: ListTypes
	gridLimit?: number
	listLimit?: number
}


const ArticleList:FC<ArticleListProps> = memo(({ articles, gridLimit = 12, listLimit = 4, isLoading, error, cardsType }:ArticleListProps) => {

	const { t } = useTranslation('translation');

	const getSkeletons = useMemo(()=> {
		return new Array(cardsType === 'grid' ? gridLimit : listLimit).fill(0).map((el, i) => (
			<ArticleListItem key={i} cardsType={cardsType} skeleton />
		));
	}, [cardsType, listLimit, gridLimit]);

	
	if(error){
		return (
			<Heading align='center' type='danger' heading={t('error.load')} />
		);
	}
	return (
        
		<div className={classNames(cls['article-list'], [cls[cardsType]])} >
			{articles.map(article => (
				<ArticleListItem cardsType={cardsType} key={article.id} article={article} />
			))}
			{isLoading && getSkeletons}
		</div>
	);
});

export {
	ArticleList
};