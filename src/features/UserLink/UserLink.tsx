import { FC } from 'react';
import cls from './UserLink.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { classNames } from '@/shared/lib/helpers';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { eRouteNames } from '@/shared/lib/types';

interface UserLinkProps {
    username: string;
    avatar?: string;
    className?: string;
    skeleton?: boolean;
    profileId?: string;
    time?: string;
}

const UserLink: FC<UserLinkProps> = ({ skeleton, username, avatar, className, profileId, time }: UserLinkProps) => {
	if (skeleton) {
		return (
			<div className={classNames(cls['user'], [className])} >
				<Skeleton image width='32px' height='32px' className={cls.avatar} />
				<Skeleton width='200px' height='15px' className={cls.avatar} />

			</div>
		);
	}
	return (
		<div className={classNames(cls['user-link-holder'], [className, time ? cls['with-time'] : undefined])}>
			<AppLink title={username} className={classNames(cls['user'])} to={`${eRouteNames.PROFILE}${profileId}`}>
				<Avatar className={cls.avatar} width='32px' src={avatar} />
				<span>
					{username}
				</span>
			</AppLink>
			{time && <p>
				{time}
			</p>}
		</div>

	);
};

export {
	UserLink
};