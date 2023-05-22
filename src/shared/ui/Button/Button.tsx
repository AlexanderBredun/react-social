import { classNames } from '@/shared/lib/helpers';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum eBtnVariant{
    CLEAR = 'clear',
    BORDERED = 'bordered',
}


export enum eBtnFontSize{
    S = 'small',
    L = 'large',
    XL = 'xlarge',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: eBtnVariant
    square?: boolean
    fontSize?: eBtnFontSize
}

export const Button:FC<Props> = ({ children, variant, square, fontSize,  className, ...otherProps })=> {

	const btnClasses = [
		className,
		cls[variant],
		square ? cls.square : '',
		cls[fontSize],
	];

	return (
		<button  className={classNames(cls.btn, btnClasses)} {...otherProps}>
			{children}
		</button>
	);
};

