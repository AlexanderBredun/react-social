import { classNames } from '@/shared/lib/helpers';
import { InputHTMLAttributes, forwardRef } from 'react';
import cls from './Textarea.module.scss';


interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    label?: string;
    className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
 
	const { label, className, ...otherAttrs } = props;

	const wrapperClasses = [
		className,
	];

	return (
		<div className={classNames('form-group', wrapperClasses)}>
			<div className={classNames(cls['input-field'])}>
				{label && <label>{ label }</label>}
				<textarea ref={ref}  {...otherAttrs}  className={cls.input} />
				
			</div>
		</div>
		
	);
});

export {
	Textarea
};
