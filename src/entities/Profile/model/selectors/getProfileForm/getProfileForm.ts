import { StateSchema } from '@/app/store';

export const getProfileForm = (state: StateSchema)=> state.profile?.form || null;