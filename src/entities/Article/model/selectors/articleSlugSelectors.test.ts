import { StateSchema } from '@/app/store';

import { DeepPartial } from '@reduxjs/toolkit';
import { getArticleSlugData, getArticleSlugError, getArticleSlugLoading } from './articleSlugSelectors';
import { Article } from '../../types/article';


describe('articleSlugSelectors.test', () => {
	const data: Article = {
		'id': '1',
		'title': 'Javascript news',
		'subtitle': 'Что нового в JS за 2022 год?',
		'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
		'views': 1022,
		'user': {
			'id': '1',
			'username': 'alal111',
			'avatar': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
		},
		'createdAt': '26.02.2022',
		'type': ['IT'],
		'blocks': []
	};
	const state: DeepPartial<StateSchema> = {
		articleSlug: {
			isLoading: true,
			error: 'error',
			data
		}
	};
	test('should return loading', () => {
		
		expect(getArticleSlugLoading(state as StateSchema)).toEqual(true);
	});
	test('should return error', () => {
		
		expect(getArticleSlugError(state as StateSchema)).toEqual('error');
	});
	test('should return article data', () => {
		expect(getArticleSlugData(state as StateSchema)).toEqual(data);
	});
	
});