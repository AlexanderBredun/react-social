import { FC, ReactNode } from 'react';
import cls from './ProfileInfo.module.scss';
import { CardRowLayout } from '../CardRowLayout/CardRowLayout';
import { useTranslation } from 'react-i18next';
import { getProfileData } from '@/entities/Profile';
import { useAppSelector } from '@/app/store/hooks/storeHooks';
import { CopyText } from '@/shared/ui/CopyText';

interface ProfileInfoProps{

}

const ProfileInfo:FC<ProfileInfoProps> = () => {
	const profileData = useAppSelector(getProfileData);
	const { t } = useTranslation(['profile', 'translation']);
	let content: ReactNode;

	if(profileData){
		content = (
			<>
				<CardRowLayout>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('Name')}:
						</p>
						<p>
							{profileData?.firstname}
						</p>
					</div>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('Username')}:
						</p>
						<p>
							{profileData?.username}
						</p>
					</div>
				</CardRowLayout>

				<CardRowLayout>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('Lastname')}:
						</p>
						<p>
							{profileData?.lastname}
						</p>
					</div>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('LinkAvatar')}:
						</p>
						<p>
							{profileData.avatar && <CopyText title={profileData?.avatar}>{profileData.avatar}</CopyText>}
						</p>

					</div>
                
				</CardRowLayout>
				<CardRowLayout>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('Age')}:
						</p>
						<p>
							{profileData?.age}
						</p>
					</div>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('City')}:
						</p>
						<p>
							{profileData?.city} 
						</p>

					</div>
                
				</CardRowLayout>
				<CardRowLayout>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('Currency', { ns: 'translation' })}:
						</p>
						<p>
							{profileData?.currency}
						</p>
					</div>
					<div className={cls['content-item']}>
						<p className={cls['title']}>
							{t('Country', { ns: 'translation' })}:
						</p>
						<p>
							{profileData?.country} 
						</p>

					</div>
                
				</CardRowLayout>
			</>
		);
	}

	return (
		<div>
			{content}
		</div>
	);
};

export {
	ProfileInfo
};