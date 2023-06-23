import { FC, memo } from 'react';
import cls from './ArticleBlockImage.module.scss';
import { ArticleBlockImage as iArticleBlockImage } from '../../types/article';

interface ArticleBlockImageProps{
    block: iArticleBlockImage
}

const ArticleBlockImage = memo(({ block }: ArticleBlockImageProps) => {
	return (
		<figure className={cls['article-image-block']}>
			<img src={block.src} alt="" />
			{block.title && <figcaption>
				{block.title}
			</figcaption>}
		</figure>
	);
});

export {
	ArticleBlockImage
};