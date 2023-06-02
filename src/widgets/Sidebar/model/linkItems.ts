import { eRouteNames } from '@/shared/lib/types';
import { LinkItem } from '../ui/SidebarLinkItem/SidebarLinkItem';
import IconHome from '@/shared/assets/icons/ico_nav_home.svg';
import IconAbout from '@/shared/assets/icons/ico_nav_about.svg';
import IconProfile from '@/shared/assets/icons/ico_nav_profile.svg';

export const LINK_ITEMS: LinkItem[] = [
	{
		url: eRouteNames.MAIN,
		name: 'header.linkHome',
		Icon: IconHome
	},
	{
		url: eRouteNames.ABOUT,
		name: 'header.linkAbout',
		Icon: IconAbout
	},
	{
		url: eRouteNames.PROFILE,
		name: 'header.linkProfile',
		Icon: IconProfile
	},
];