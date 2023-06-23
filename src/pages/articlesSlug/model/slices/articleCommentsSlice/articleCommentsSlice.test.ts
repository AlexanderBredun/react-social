import { StateSchema } from '@/app/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { articleMock } from '@/shared/lib/tests/mocks/articleMock';
import { articleCommentsReducer } from './articleCommentsSlice';
import { ArticleCommentsScheme } from '../../types/ArticleCommentsScheme';
import { fetchArticleComments } from '../../services/fetchArticleComments/fetchArticleComments';
import { iComment } from '@/entities/Comments';

const mockedComents: iComment[] = [
	{
		'id': '1',
		'body': 'some comment',
		'createdAt': '19.06.2023, 13:51',
		articleId: '1',				
		userId: '1',
		'user': {
			'id': '1',
			'username': 'alal111',
			'avatar': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
		}
	},
	{
		'id': '2',
		'body': 'some comment 2',
		articleId: '1',
		createdAt: '19.06.2023, 13:51',
		userId: '1',
		'user': {
			'id': '2',
			'username': 'uder 2',
			
			'avatar': ''
		}
	},
	
];
const reversedMock: iComment[] = mockedComents.reverse();
describe('articleCommentsSlice.test', () => {
	test('article comments pending state', () => {
		const state: DeepPartial<ArticleCommentsScheme> = {
           
		};
		expect(articleCommentsReducer(state as ArticleCommentsScheme, fetchArticleComments.pending)).toEqual({ isLoading: true, error: '' });
	});
	test('article fullfilled state', () => {
		const state: DeepPartial<ArticleCommentsScheme> = {
			isLoading: true,
			entities: undefined,
			ids: undefined,
		};
	
		expect(articleCommentsReducer(state as ArticleCommentsScheme, fetchArticleComments.fulfilled(mockedComents, '', '')))
			.toEqual(
				{
					isLoading: false,
			        ids: mockedComents.map(el => el.id),
					entities: {
						'1': {
							...mockedComents[0]
						},
						'2': {
							...mockedComents[1]
						},
					}
				}
			);
	});
  
});