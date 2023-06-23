import { Article } from '@/entities/Article';
import { ListTypes } from '@/features/ListViewTypeSwitcher';
import { EntityState } from '@reduxjs/toolkit';
import { GRID_LIMIT, LIST_LIMIT } from '../../lib/paginationConsts';

export type LimitType = typeof GRID_LIMIT | typeof LIST_LIMIT

export interface AllArticlesSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string
    listType?: ListTypes

    // pagination
    page?: number;
    hasNext?: boolean;
    limit?: LimitType;

}