import { classNames } from '@/shared/lib/helpers';
import { Mods } from '@/shared/lib/helpers/classNames';
import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';

export type tPostion = 'center' | 'left';

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
	position?: tPostion;
	shake?: boolean
}

export const Button = memo(({ children, variant, square, fontSize, position = 'left',  className, shake, ...otherProps }: Props)=> {

	const btnClasses:Mods = [
		className,
		variant ? cls[variant] : undefined,
		square ? cls.square : '',
		shake ? cls['shake-anim'] : undefined,
		fontSize ? cls[fontSize] : undefined,
		position ? cls[position] : undefined
	];

	return (
		<button  className={classNames(cls.btn, btnClasses)} {...otherProps}>
			{children}
		</button>
	);
});

