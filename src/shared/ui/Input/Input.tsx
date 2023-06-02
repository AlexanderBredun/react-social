import { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/helpers';


interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'>{
    label?: string;
    className?: string;
    type?: string;
	focused?: boolean;
}

const Input = memo(({ label, focused, className, type = 'text', ...otherAttrs }: InputProps) => {

	const [isFull, setIsFull] = useState(false);
	const [showingPass, setShowingPass] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const blurHandler = (e: React.FocusEvent<HTMLInputElement>)=> {
		console.log(Boolean(e.target.value.trim()));
        
		setIsFull(Boolean(e.target.value.trim()));
	};

	
	useEffect(()=> {
		setIsFull(Boolean(inputRef.current.value.trim()));
		if(focused){
			inputRef.current.focus();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const wrapperClasses = [
		className,
		isFull ? cls['has-value'] : undefined,
		type === 'password' ? cls['password-type'] : undefined
	];

	return (
		<div className={classNames(cls['input-field'], wrapperClasses)}>
			{label && <label>{ label }</label>}
			<input ref={inputRef} onBlur={blurHandler} {...otherAttrs} className={cls.input} type={showingPass ? 'text' : type} />
			{
				type === 'password' && 
                <i onClick={()=> setShowingPass((val)=> !val)} 
                	className={classNames(showingPass ? `far fa-eye-slash ${cls['pass-icon']}` : `far fa-eye ${cls['pass-icon']}`)}></i>
			}
		</div>
	);
});

export {
	Input
};