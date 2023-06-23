import { memo } from 'react';

import { useAppSelector } from '@/app/store/hooks/storeHooks';
import { getFullUser } from '@/entities/User';
import { eRouteNames } from '@/shared/lib/types';
import { AppLink } from '@/shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

export interface LinkItem{
    url: string;
    name: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	needAuth?: boolean
}


interface SidebarLinkItemProps{
    item: LinkItem
}

const SidebarLinkItem = memo(({ item }: SidebarLinkItemProps) => {

	const { t } = useTranslation();
	const isAuth = useAppSelector(getFullUser).authData;

	if(!isAuth && item.needAuth){
		return null;
	}

	return (
		<AppLink to={item.url === eRouteNames.PROFILE ? item.url + isAuth?.id : item.url}>
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
