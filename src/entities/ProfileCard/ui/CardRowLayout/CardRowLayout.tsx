import { FC } from 'react';
import cls from './CardRowLayout.module.scss';

interface CardRowLayoutProps{

}

const CardRowLayout:FC<CardRowLayoutProps> = ({ children }) => {
	return (
		<div className={cls['row-layout']}>
			{children}
		</div>
	);
};

export {
	CardRowLayout
};