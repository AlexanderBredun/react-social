export {
	profileActions,
	profileReducer,
} from './model/slice/profileSlice';

export { fetchUserProfile } from './model/services/fetchUserProfile/fetchUserProfile';
export { updateUserProfile } from './model/services/updateUserProfile/updateUserProfile';

export { ProfileSchema } from './model/types/profile';

export { getProfileData, getProfileError, getProfileLoading, getProfileForm } from './model/selectors';