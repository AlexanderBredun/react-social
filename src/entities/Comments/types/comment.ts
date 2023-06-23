import { User } from '@/entities/User';

export interface iComment{
    id: string;
    user: User;
    body: string;
    articleId?: string;
    userId?: string;
    createdAt: string;
}