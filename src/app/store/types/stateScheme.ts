import { CounterSchema } from '@/entities/Counter';
import { LoginSchema } from '@/features/ModalLogin';
import { UserSchema } from '@/entities/User';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from '@/entities/Profile';

export interface StateSchema{
    counter: CounterSchema;
    user: UserSchema;

    // async state
    login?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager{
    getReducerMap: ()=> ReducersMapObject<StateSchema, AnyAction>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxWithReducerManager extends EnhancedStore<StateSchema>{
   reducerManager: ReducerManager
}
