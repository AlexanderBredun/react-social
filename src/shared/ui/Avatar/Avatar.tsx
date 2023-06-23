import { FC } from 'react';
import cls from './Avatar.module.scss';
import { classNames } from '@/shared/lib/helpers';
import { Mods } from '@/shared/lib/helpers/classNames';

interface AvatarProps{
    src?: string;
    width?: string;
    position?: 'left' | 'center';
	className?: string;
}

const defImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png';

const Avatar:FC<AvatarProps> = ({ src, className, position = 'left', width = '15rem' }) => {

	const mods: Mods = [
		cls[position],
		className
	];

	return (
		<div className={classNames(cls['avatar-holder'], mods) } style={{ '--avatar-size': width } as React.CSSProperties}>
			<img className={cls['avatar']} src={src ? src : defImage} alt="" />
		</div>
	);
};

export {
	Avatar
};