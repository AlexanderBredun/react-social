import {  ReactNode, memo } from 'react';
import cls from './CommentsList.module.scss';
import { iComment } from '../../types/comment';
import { Heading } from '@/shared/ui/Heading';
import { useTranslation } from 'react-i18next';
import { CommentItem } from '../CommentItem/CommentItem';
import { classNames } from '@/shared/lib/helpers';


interface CommentsListProps{
    comments: iComment[],
    className?: string;
    loading?: boolean;
    error?: string;
}

const CommentsList = memo(({ comments, loading, error, className }: CommentsListProps) => {
	const { t }  = useTranslation('translation');

	let content: ReactNode;

	if(error){
		content = (
			<Heading className={cls.heading} size='L' type='danger' heading={t('error.load')} />
		);
	}
	else if(!comments.length){
		content = (
			<Heading size='L' heading={t('There is no comments yet')} />
		);
	}
	else{
		content = (
			comments.map(comment => (
				<CommentItem loading={loading} key={comment.id} comment={comment} />
			))
		);
	}
   
	return (
		<div className={classNames(cls.comments, [className])}>
			{content}
		</div>
	);
});

export {
	CommentsList
};