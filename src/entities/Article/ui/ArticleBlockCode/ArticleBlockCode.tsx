import { FC, memo } from 'react';
import cls from './ArticleBlockCode.module.scss';
import { ArticleBlockCode as iArticleBlockCode } from '../../types/article';
import { CopyText } from '@/shared/ui/CopyText';

interface ArticleBlockCodeProps{
    block: iArticleBlockCode
}

const ArticleBlockCode = memo(({ block }:ArticleBlockCodeProps) => {
	return (
		<CopyText className={cls['article-code-block']} code>
			{block.code}
		</CopyText>
	);
});

export {
	ArticleBlockCode
};