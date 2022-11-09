import { decode } from 'html-entities';
import { Post, PostCategory } from '@/types/post';
import { POST_CATEGORY_KEYS } from '@/constants/post-category';
import { PostEditorSchema } from '@/constants/schema';
import { base64ToFile } from './image';

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
  return category && parseInt(postId) && POST_CATEGORY_KEYS.includes(category);
}

export function decodeHTML(html: string) {
  return decode(html, { level: 'html5', scope: 'strict' });
}

export function handleQuery(query: string | string[] | undefined) {
  if (Array.isArray(query)) {
    return undefined;
  }
  return query;
}

export function convertPostToPostSchema(post: Post): Partial<PostEditorSchema> {
  return {
    title: post.title,
    category: post.category,
    tags: post.tags || [],
    content: decodeHTML(post.content),
    totalHeadCount: post.totalHeadCount || 1,
    startDate: new Date(post.startDate || new Date()),
    endDate: new Date(post.endDate || new Date()),
    thumbnail: base64ToFile(post.thumbnail, 'thumnbnail'),
  };
}
