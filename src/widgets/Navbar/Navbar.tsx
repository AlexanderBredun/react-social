import { classNames } from '@/shared/lib/helpers';
import { FC, useState } from 'react';


import cls from './Navbar.module.scss';

import { AppLink } from '@/shared/ui/AppLink';
import { eVariant } from '@/shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal';
import { Link } from 'react-router-dom';
import { eRouteNames } from '@/shared/lib/types';


interface Props {
	className?: string

}


export const Navbar: FC<Props> = ({ className }) => {

	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);
	

	return (
		<div className={classNames(cls.navbar, [className])}>
			<button onClick={()=> setIsOpen(true)}>
				open
			</button>
			<Modal isOpen={isOpen} onClose={()=> setIsOpen(false)} >
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate cupiditate quo expedita ipsam ex dolorem, magni nemo architecto, praesentium vero autem iure nostrum fugit ut sint atque eveniet minima.</h1>
				<Link to={eRouteNames.ABOUT}>go</Link>
			</Modal>
			<div className={classNames(cls['navbar__left'])}>
				<h1>123</h1>
			</div>
		</div>
	);
};

