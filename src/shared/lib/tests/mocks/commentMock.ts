import { iComment } from '@/entities/Comments';
import { userMock } from './userMock';

export const commentMock:iComment = {
	id: 'test',
	body: 'test comment',
	createdAt: '20062023',
	user: userMock,
	articleId: 'test article',
	userId: 'test user',
};