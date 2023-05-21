import { classNames } from '@/shared/lib/helpers';
import { FC, useEffect, useState } from 'react';


import cls from './Navbar.module.scss';

import { AppLink } from '@/shared/ui/AppLink';
import { eVariant } from '@/shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';


interface Props {
	className?: string

}


export const Navbar: FC<Props> = ({ className }) => {

	const { t } = useTranslation();

	const [error, setError] = useState(false);

	useEffect(()=> {
		if(error){
			throw new Error('Error custom');
		}
		
	}, [error]);

	return (
		<div className={classNames(cls.navbar, [className])}>
			<button onClick={()=> setError(true)}>throw</button>
			<div className={classNames(cls['navbar__left'])}>
				<h1>123</h1>
			</div>
			<div className={classNames(cls['navbar__right'])}>
				<nav className={classNames(cls.navbar__nav)}>
					<ul>
						<li>
							<AppLink to={'/'}>
								{t('header.linkHome')}
							</AppLink>
						</li>
						<li>
							<AppLink variant={eVariant.UNDERDASH} to={'/about'}>
								{t('header.linkAbout')}
							</AppLink>
						</li>
					</ul>
				</nav>

			</div>


		</div>
	);
};

