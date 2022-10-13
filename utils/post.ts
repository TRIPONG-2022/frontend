import { PostCategory } from '@/types/post';

export const removeHTMLTag = (html: string) => {
  return html.replace(/<[^>]*>?/g, '');
};

export const createPostLink = (postId: number, postCategory: PostCategory) => {
  return `/posts/${postCategory}/${postId}`;
};
