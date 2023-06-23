import { FC, FormEvent, memo, useCallback, useEffect, useRef } from 'react';
import cls from './AddCommentForm.module.scss';
import { FormValidate } from '@/features/FormValidate';
import { Textarea } from '@/shared/ui/Textarea';
import { Button } from '@/shared/ui/Button';

interface AddCommentFormProps{
    submit: (value: string)=> void;
    hasSuccess?: boolean;
    commentNewError?: string
    commentNewLoading?: boolean
}

const AddCommentForm = memo(({ submit, hasSuccess, commentNewError, commentNewLoading }: AddCommentFormProps) => {

	const commentRef = useRef<HTMLTextAreaElement>(null);
	const handleSubmit = useCallback((e:FormEvent<HTMLFormElement>)=> {
		submit((e.target as HTMLFormElement).commentNew.value);
	}, [submit]);

	useEffect(()=> {
		if(hasSuccess && commentRef.current){
			commentRef.current.value = '';
		}
	}, [hasSuccess]);

	return (
		<FormValidate className={cls['comment-form']} submit={handleSubmit}>
			<Textarea ref={commentRef} className={cls['comment-input']} name='commentNew' required />
			<Button className={cls['comment-btn']} square type='submit' disabled={commentNewLoading} shake={Boolean(commentNewError)}>
				<i className="fas fa-paper-plane"></i>
			</Button>
		</FormValidate>
	);
});

export default AddCommentForm;