
import { fetchUserProfile, profileReducer } from '@/entities/Profile';
import { AsyncReducersReducers, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import { memo, useEffect } from 'react';

import { useAppDispatch } from '@/app/store/hooks/storeHooks';
import { ProfileCard } from '@/entities/ProfileCard';
import { eRouteNames } from '@/shared/lib/types';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Navigate, useParams } from 'react-router-dom';

interface ProfileProps{

}

const asyncReducers: AsyncReducersReducers = {
	profile: profileReducer
};

const ProfilePage = memo(() => {
	useAsyncReducer(asyncReducers, true);
	const dispatch = useAppDispatch();
	const { id } = useParams<{id: string}>();
	
	if(!id){
		return <Navigate to={eRouteNames.MAIN} />;
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect( ()=> {
		if(__PROJECT__ !== 'storybook'){
			dispatch(fetchUserProfile(id));
		}
		
	}, [dispatch, id]);
	

	return (
		<PageWrapper>
			<ProfileCard />
		</PageWrapper>
	);
});

export default ProfilePage;