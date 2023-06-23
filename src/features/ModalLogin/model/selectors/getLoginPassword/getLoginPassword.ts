import { StateSchema } from '@/app/store';

export const getLoginPassword = (state: StateSchema) => state.login?.password || '';