import { StateSchema } from '@/app/store';

export const getLoginLoading = (state: StateSchema) => state.login?.isLoading || false;