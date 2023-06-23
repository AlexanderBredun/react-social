import { iComment } from '@/entities/Comments';
import { EntityState } from '@reduxjs/toolkit';

interface iNewComment {
    addedComment?: boolean,
    isLoading?: boolean,
    error?: string;
}

export interface ArticleCommentsScheme extends EntityState<iComment>{
    isLoading?: boolean;
    newComment: iNewComment;
    error?: string;
    data?: iComment[]
}