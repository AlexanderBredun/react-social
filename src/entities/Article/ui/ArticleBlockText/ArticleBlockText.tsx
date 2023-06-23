import { FC, memo, useCallback } from 'react';
import cls from './ArticleBlockText.module.scss';
import { ArticleBlockText as iArticleBlockText } from '../../types/article';
import { Heading } from '@/shared/ui/Heading';

interface ArticleBlockTextProps{
    block: iArticleBlockText
}

const ArticleBlockText = memo(({ block }: ArticleBlockTextProps) => {

	const paragraps = useCallback((item: string, id)=> {
		return (
			<p key={id} dangerouslySetInnerHTML={{ __html: item }}></p>
		);
	}, []);

	return (
		<div className={cls['article-text-block']}>
			{block.title && <Heading className={cls['heading']} size='L' heading={block.title} />}
			{block.paragraphs.length && block.paragraphs.map(paragraps)}
		</div>
	);
});

export {
	ArticleBlockText
};