import { ChangeEvent, useCallback, useState } from 'react';
import cls from './ProfileCard.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/storeHooks';
import { getProfileError, getProfileLoading, profileActions, updateUserProfile } from '@/entities/Profile';
import { Loader } from '@/shared/ui/Loader';
import { Button } from '@/shared/ui/Button';
import { eBtnVariant } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Heading } from '@/shared/ui/Heading';
import { ProfileChangeForm } from './ui/ProfileChangeForm/ProfileChangeForm';
import { ProfileInfo } from './ui/ProfileInfo/ProfileInfo';
import { getProfileData, getProfileForm } from '@/entities/Profile/model/selectors';
import { Avatar } from '@/shared/ui/Avatar';
import { useParams } from 'react-router-dom';
import { getFullUser } from '@/entities/User';

interface ProfileCardProps {

}


const ProfileCard = () => {

	const profileData = useAppSelector(getProfileData);
	const profileForm = useAppSelector(getProfileForm);
	const isloading = useAppSelector(getProfileLoading);
	const error = useAppSelector(getProfileError);
	
	const dispatch = useAppDispatch();

	const [editing, setEditing] = useState(false);
	
	const { t } = useTranslation('profile');
	const authUser = useAppSelector(getFullUser).authData;
	

	const btnEditHandler = useCallback(()=> {
		setEditing(val => !val);
	}, []);

	const changeDataHandler = useCallback((e: ChangeEvent<HTMLInputElement>)=> {
		dispatch(profileActions.changeForm({
			[e.target.name]: e.target.value
		}));
	}, [dispatch]);

	const onDataChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>)=> {
		dispatch(profileActions.changeForm({
			[e.target.name]: e.target.value
		}));
	}, [dispatch]);

	const onDataSave = useCallback(()=> {
		
		if(profileForm){
			dispatch(updateUserProfile(profileForm));
			setEditing(false);
		}
	}, [dispatch, profileForm]);


	if (isloading) {
		return (
			<section className={cls['profile-loading-holder']}>
				<Loader />
			</section>
		);
	}

	if (error) {
		return (
			<section>
				<Heading type='danger'
					align='center'
					heading={t('HeadingErrorLoading')} color=''
					subheading={t('SubHeadingErrorLoading')}
					 />
			</section>
		);
	}

	return (
		<section className={cls['profile-card']}>
			<div className={cls['top-block']}>
				<Avatar src={profileData?.avatar} position='center' />
				
				{authUser?.id === profileData?.id && <Button  className={cls['btn-edit']} variant={eBtnVariant.BORDERED} onClick={btnEditHandler}>
					{editing ? t('Cancel') : t('Edit')}
				</Button>}
			</div>
			<div className={cls['content']}>
				{editing
				 ? 
					<ProfileChangeForm onDataChange={changeDataHandler} onDataChangeSelect={onDataChangeSelect} onDataSave={onDataSave} />
				 :
				 	<ProfileInfo />
				}
			</div>
		</section>
	);


};

export {
	ProfileCard
};