import { StateSchema } from '@/app/store';

export const getLoginUsername = (state: StateSchema) => state.login?.username || '';
  