import { CSSProperties, FC } from 'react';
import cls from './Skeleton.module.scss';
import { classNames } from '@/shared/lib/helpers';
import { Mods } from '@/shared/lib/helpers/classNames';

interface SkeletonProps{
    className?: string;
    image?: boolean;
    height?: string
    width?: string
    radius?: string
    position?: 'center' | 'left' | 'right';
}

const Skeleton:FC<SkeletonProps> = ({ image, className, height, width, radius, position }) => {

	const mods:Mods = [
		image ? cls['skelet-img'] : undefined,
		position ? cls[position] : undefined,
		className
	];

	return (
		<div className={classNames(cls.skelet, mods)} style={{ '--skelet-height': height, '--skelet-width': width, '--skelet-radius': radius } as CSSProperties}>

		</div>
	);
};

export {
	Skeleton
};