import { FC, memo } from 'react';
import cls from './CommentItem.module.scss';
import { iComment } from '../../types/comment';
import { AppLink } from '@/shared/ui/AppLink';
import { UserLink } from '@/features/UserLink';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface CommentItemProps{
    comment: iComment;
    loading?: boolean;
}

const CommentItem = memo(({ comment, loading }: CommentItemProps) => {
	if(loading){
		return (
			<div className={cls['comment-item']}>
				<UserLink skeleton className={cls.heading} username={comment.user.username} avatar={comment.user.avatar} />
				<Skeleton height='7.5rem' className={cls.body} />
			</div>
            
		);
	}
	return (
		<div className={cls['comment-item']}>
			<UserLink profileId={comment.user.id} time={comment.createdAt} className={cls.heading} username={comment.user.username} avatar={comment.user.avatar} />
			<p className={cls.body}>
				{comment.body}
			</p>
		</div>
	);
});

export {
	CommentItem
};