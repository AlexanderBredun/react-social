import { Article } from '../../types/article';

export interface ArticleSlugSchema {
    isLoading?: boolean;
    error?: string | null;
    data?: Article | null
}