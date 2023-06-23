import { eCountry } from '@/entities/Country';
import { eCurrency } from '@/entities/Currency';


export interface Profile {
    id?: string;
    firstname?: string
    lastname?: string
    age?: string
    currency?: eCurrency
    country?: eCountry
    city?: string
    username?: string
    avatar?: string
  }

export interface ProfileSchema{
    data?: Profile | null;
    isLoading: boolean;
    error?: string | null;
    form?: Profile | null;
  }