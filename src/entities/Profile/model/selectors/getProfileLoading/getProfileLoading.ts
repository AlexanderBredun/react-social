
import { StateSchema } from '@/app/store';

export const getProfileLoading = (state: StateSchema)=> state.profile?.isLoading || false;