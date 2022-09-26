import { PostCategory } from '@/types/post';

export const POST_CATEGORIES: Record<PostCategory, string> = {
  [PostCategory.Review]: '후기, 리뷰',
  [PostCategory.Community]: '자유게시판',
  [PostCategory.QNA]: 'Q&A',
  [PostCategory.Gathering]: '여행메이트모집',
} as const;

export const POST_CATEGORY_KEYS = Object.keys(POST_CATEGORIES);
