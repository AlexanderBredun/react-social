
import { memo } from 'react';
import cls from './Profile.module.scss';
import { AsyncReducersReducers, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import { profileReducer } from '@/entities/Profile';

interface ProfileProps{

}

const asyncReducers: AsyncReducersReducers = {
	profile: profileReducer
};

const ProfilePage = memo(() => {

	useAsyncReducer(asyncReducers, true);

	return (
		<div>Profile</div>
	);
});

export default ProfilePage;