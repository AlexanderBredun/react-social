import { Button } from '@/shared/ui/Button';
import React, { FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/helpers';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { useTranslation } from 'react-i18next';

export const Sidebar:FC = ()=> {

	const { t } = useTranslation();
	

	const [collapsed, setCollapsed] = useState(false);

	const toggle = async ()=> await setCollapsed(val => !val);



	return (
		<aside data-testid="sidebar" className={classNames(cls['aside-block'], { [cls.collapsed]: collapsed })}>
			<Button data-testid="toggle-btn" onClick={toggle}>
            	{t('toggle')}
			</Button>
			<nav></nav>
			<div className={cls['aside-block__switchers']}>
			
				<ThemeSwitcher  />
				<LangSwitcher  />
			</div>
      
		</aside>
	);
};
