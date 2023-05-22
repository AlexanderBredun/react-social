import { classNames } from '@/shared/lib/helpers';
import { FC} from 'react';


import cls from './Navbar.module.scss';

import { AppLink } from '@/shared/ui/AppLink';
import { eVariant } from '@/shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';


interface Props {
	className?: string

}


export const Navbar: FC<Props> = ({ className }) => {

	const { t } = useTranslation();
	

	return (
		<div className={classNames(cls.navbar, [className])}>
			<div className={classNames(cls['navbar__left'])}>
				<h1>123</h1>
			</div>
		</div>
	);
};

