import { classNames } from '@/shared/lib/helpers';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';


interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'|'value'>{
    label?: string;
    className?: string;
    type?: string;
	value?: string;
	focused?: boolean;
}

const Input = memo(({ label, focused, className, value = '', type = 'text', ...otherAttrs }: InputProps) => {

	const [isFull, setIsFull] = useState(false);
	const [showingPass, setShowingPass] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const blurHandler = (e: React.FocusEvent<HTMLInputElement>)=> {
		setIsFull(Boolean(e.target.value.trim()));
	};

	
	useEffect(()=> {
		setIsFull(Boolean(inputRef.current?.value.trim()));
		if(focused){
			inputRef.current?.focus();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const wrapperClasses = [
		className,
		isFull ? cls['has-value'] : undefined,
		type === 'password' ? cls['password-type'] : undefined
	];

	return (
		<div className='form-group'>
			<div className={classNames(cls['input-field'], wrapperClasses)}>
				{label && <label>{ label }</label>}
				<input ref={inputRef} onBlur={blurHandler} {...otherAttrs} value={value} className={cls.input} type={showingPass ? 'text' : type} />
				{
					type === 'password' && 
                <i onClick={()=> setShowingPass((val)=> !val)} 
                	className={classNames(showingPass ? `far fa-eye-slash ${cls['pass-icon']}` : `far fa-eye ${cls['pass-icon']}`)}></i>
				}
			</div>
		</div>
		
	);
});

export {
	Input
};
