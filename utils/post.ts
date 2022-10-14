import { decode } from 'html-entities';
import { PostCategory } from '@/types/post';
import { POST_CATEGORY_KEYS } from '@/constants/post-category';

export const removeHTMLTag = (html: string) => {
  return html.replace(/<[^>]*>?/g, '');
};

export const createPostLink = (postId: number, postCategory: PostCategory) => {
  return `/posts/${postCategory}/${postId}`;
};

export function handlePostPageParam(param: string | string[] | undefined) {
  if (!param || !Array.isArray(param)) {
    return [];
  }
  return param;
}

export function checkIsValidPostPageParam(category: string, postId: string) {
  return category && postId && POST_CATEGORY_KEYS.includes(category);
}

export function decodeHTML(html: string) {
  return decode(html, { level: 'html5', scope: 'strict' });
}
