import { Button } from '@/shared/ui/Button';
import { memo, useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/helpers';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

import { eBtnFontSize, eBtnVariant } from '@/shared/ui/Button/Button';
import IconArrow from '@/shared/assets/icons/ico_arrow.svg';
import { LINK_ITEMS } from './model/linkItems';
import { SidebarLinkItem } from './ui/SidebarLinkItem/SidebarLinkItem';

export const Sidebar = memo(()=> {
	

	const [collapsed, setCollapsed] = useState(false);


	const toggle = ()=> setCollapsed(val => !val);
	

	return (
		<aside data-testid="sidebar" className={classNames(cls['aside-block'], { [cls.collapsed]: collapsed })}>
			
			<nav className={classNames(cls.nav)}>
				<ul>
					{LINK_ITEMS.map(item => (
						<li key={item.url}>
							<SidebarLinkItem item={item} />
						</li>
					))}
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
});
