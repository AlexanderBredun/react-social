import { memo } from 'react';
import cls from './SidebarLinkItem.module.scss';

import { AppLink } from '@/shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

export interface LinkItem{
    url: string;
    name: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}


interface SidebarLinkItemProps{
    item: LinkItem
}

const SidebarLinkItem = memo(({ item }: SidebarLinkItemProps) => {

	const { t } = useTranslation();

	return (
		<AppLink to={item.url}>
			<item.Icon />
			<span>
				{t(item.name)}
			</span>
		</AppLink>
	);
});

export {
	SidebarLinkItem
};