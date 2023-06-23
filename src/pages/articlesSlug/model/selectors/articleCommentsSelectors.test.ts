import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { getArticleCommentsAdded, getArticleCommentsError, getArticleCommentsLoading, getArticleNewCommentError, getArticleNewCommentLoading } from './articleCommentsSelectors';


describe('allArticlesSelectors.test', () => {
	
	const state: DeepPartial<StateSchema> = {
		articleComments: {
			isLoading: false,
			newComment: {
				addedComment: false,
				isLoading: false,
				error: 'new comment test error',
			},
			error: 'test error',
			ids: [],
			entities: {}
		}
	};
	test('should return loading', () => {
		expect(getArticleCommentsLoading(state as StateSchema)).toEqual(false);
	});
	test('should return error', () => {
		expect(getArticleCommentsError(state as StateSchema)).toEqual('test error');
	});
	test('should return new comment error', () => {
		expect(getArticleNewCommentError(state as StateSchema)).toEqual('new comment test error');
	});
	test('should return new comment loading', () => {
		expect(getArticleNewCommentLoading(state as StateSchema)).toEqual(false);
	});
	test('should return new comment addded status', () => {
		expect(getArticleCommentsAdded(state as StateSchema)).toEqual(false);
	});
	
});