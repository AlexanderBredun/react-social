import { StateSchema } from '@/app/store';

export const getArticleCommentsError = (state: StateSchema)=> state.articleComments?.error;
export const getArticleCommentsLoading = (state: StateSchema)=> state.articleComments?.isLoading;

export const getArticleNewCommentError = (state: StateSchema)=> state.articleComments?.newComment.error;
export const getArticleNewCommentLoading = (state: StateSchema)=> state.articleComments?.newComment.isLoading;
export const getArticleCommentsAdded = (state: StateSchema)=> state.articleComments?.newComment.addedComment;
