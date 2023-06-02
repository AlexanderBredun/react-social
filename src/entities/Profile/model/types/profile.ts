import { eCountry, eCurrency } from '@/shared/lib/types';

export interface Profile {
    'firstname': string
    'lastname': string
    'age': string
    'currency': eCurrency
    'country': eCountry
    'city': string
    'username': string
    'avatar': string
  }

export interface ProfileSchema{
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean; 
  }