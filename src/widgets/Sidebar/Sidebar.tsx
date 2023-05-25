import { Button } from '@/shared/ui/Button';
import React, { FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/helpers';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { useTranslation } from 'react-i18next';
import { eBtnFontSize, eBtnVariant } from '@/shared/ui/Button/Button';
import IconArrow from '@/shared/assets/icons/ico_arrow.svg';
import IconHome from '@/shared/assets/icons/ico_nav_home.svg';
import IconAbout from '@/shared/assets/icons/ico_nav_about.svg';
import { AppLink } from '@/shared/ui/AppLink';
import { eRouteNames } from '@/shared/lib/types';

export const Sidebar:FC = ()=> {

	const { t } = useTranslation();
	
	console.log(AppLink);

	const [collapsed, setCollapsed] = useState(false);

	const toggle = async ()=> await setCollapsed(val => !val);


	return (
		<aside data-testid="sidebar" className={classNames(cls['aside-block'], { [cls.collapsed]: collapsed })}>
			
			<nav className={classNames(cls.nav)}>
				<ul>
					<li>
						<AppLink to={eRouteNames.MAIN}>
							<IconHome />
							<span>
								{t('header.linkHome')}
							</span>
						</AppLink>
					</li>
					<li>
						<AppLink to={eRouteNames.ABOUT}>
							<IconAbout aria-label="About page" aria-placeholder='About page' xlinkTitle='About page' />
							<span>
								{t('header.linkAbout')}
							</span>
							
						</AppLink>
					</li>
				</ul>
			</nav>
			<Button className={cls.btn_toggle} data-testid="toggle-btn" variant={eBtnVariant.CLEAR} fontSize={eBtnFontSize.S} onClick={toggle}>
            	<IconArrow />
			</Button>
			<div className={cls['switchers']}>
			
				<ThemeSwitcher  />
				<LangSwitcher shortLang={collapsed}  />
			</div>
      
		</aside>
	);
};
