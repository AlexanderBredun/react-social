import { StateSchema } from '@/app/store';

export const getLoginError = (state: StateSchema) => state.login?.error || '';