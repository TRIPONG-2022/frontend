import { decode } from 'html-entities';
import { Post, PostCategory } from '@/types/post';
import { POST_CATEGORY_KEYS } from '@/constants/post-category';
import { SearchType } from '@/types/search';
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

export function checkIsValidPostCategoryAndPostId(
  category: string,
  postId: string,
) {
  return (
    Boolean(category) &&
    Boolean(parseInt(postId)) &&
    POST_CATEGORY_KEYS.includes(category)
  );
}

export function decodeHTML(html: string) {
  return decode(html, { level: 'html5', scope: 'strict' });
}

export const createSearchPostListLink = (
  searchType: SearchType,
  searchInput: string,
) => {
  return `posts?searchType=${searchType}&keyword=${searchInput}`;
};

export function handleWritePostPageQuery(
  category: string | string[] | undefined,
  postId: string | string[] | undefined,
) {
  const defaultQuery = {
    category: null,
    postId: null,
  };
  if (category === undefined || postId === undefined) {
    return defaultQuery;
  }
  if (Array.isArray(category) || Array.isArray(postId)) {
    return defaultQuery;
  }
  if (!checkIsValidPostCategoryAndPostId(category, postId)) {
    return defaultQuery;
  }
  return {
    category,
    postId: parseInt(postId),
  };
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
