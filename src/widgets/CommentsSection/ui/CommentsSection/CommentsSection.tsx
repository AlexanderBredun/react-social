import { memo } from 'react';
import cls from './CommentsSection.module.scss';

import { CommentsList, iComment } from '@/entities/Comments';
import { AddCommentForm } from '@/features/AddCommentForm';
import { classNames } from '@/shared/lib/helpers';
import { Heading } from '@/shared/ui/Heading';
import { useTranslation } from 'react-i18next';

interface CommentsSectionProps {
    comments: iComment[],
    className?: string;
    loading?: boolean;
    error?: string;
    submit: (value: string) => void;
    hasSuccess?: boolean
    commentNewError?: string
    commentNewLoading?: boolean
}

const CommentsSection = memo(({ comments, loading, error, className, hasSuccess, submit, commentNewError, commentNewLoading }: CommentsSectionProps) => {
	const { t }  = useTranslation('translation');
	return (
		<div className={classNames(cls['comment-section'],[className])}>
			<Heading className={classNames(cls.heading)} size='XL' heading={t('Comments')} />

			<AddCommentForm submit={submit} hasSuccess={hasSuccess} commentNewError={commentNewError} commentNewLoading={commentNewLoading} />
			<CommentsList error={error} loading={loading} className={cls['article-comments']} comments={comments} />
		</div>
	);
});

export {
	CommentsSection
};
