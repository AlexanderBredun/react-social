import { StateSchema } from '@/app/store';

export const getProfileData = (state: StateSchema)=> state.profile?.data;