import { StateSchema } from '@/app/store';

export const getProfileError = (state: StateSchema)=> state.profile?.error || null;