import { User } from '@/entities/User';

export type tArticleType = 'IT' | 'MEDICINE' | 'CODE'
export enum eArticleBlockType {
    'TEXT' = 'TEXT',
    'CODE' = 'CODE',
    'IMAGE' = 'IMAGE',
}

export interface ArticleBlockBase{
    id: string;
}

export interface ArticleBlockText extends ArticleBlockBase{
    type: eArticleBlockType.TEXT;
    title: string;
    paragraphs: string[]
}

export interface ArticleBlockCode extends ArticleBlockBase{
    type: eArticleBlockType.CODE;
    code: string;
}

export interface ArticleBlockImage extends ArticleBlockBase{
    type: eArticleBlockType.IMAGE;
    src: string;
    title?: string
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage;

export interface ArticleAuthor {
    id: string;
    username: string;
    avatar: string;
}

export interface Article{
    id: string;
    title: string;
    subtitle: string;
    user: User;
    img: string;
    views: number,
    createdAt: string,
    type: tArticleType[],
    blocks: ArticleBlock[]
}