import { format } from 'date-fns';

import { Post, PostCategory } from '@/types/post';
import { PostEditorSchema } from '@/constants/schema';

import instance from './instance';

export async function requestGetPostData(
  category: PostCategory,
  postId: string | number,
): Promise<Post> {
  const { data } = await instance.get<Post>(`/posts/${category}/${postId}`);
  return data;
}

export async function requestGetUserLikePost(
  category: PostCategory,
  postId: string | number,
): Promise<boolean> {
  const { data } = await instance.get<Post[]>('/users/profile/likes', {
    params: { category },
  });
  const isLike =
    data.findIndex((post) => post.id.toString() === postId.toString()) !== -1;
  return isLike;
}

export async function requestGetPost(
  category: PostCategory | null,
  postId: string | number | null,
): Promise<Post | null> {
  if (!category || !postId) {
    return null;
  }
  const [post, isLike] = await Promise.all([
    requestGetPostData(category, postId),
    requestGetUserLikePost(category, postId),
  ]);
  return {
    ...post,
    isLike,
  };
}

export async function requestUploadImage(imageFile: File) {
  const formData = new FormData();
  formData.append('file', imageFile);
  const { data } = await instance.post<string>('/posts/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
}

const createPostFormData = ({
  startDate,
  endDate,
  totalHeadCount,
  ...postEditorSchema
}: PostEditorSchema) => {
  const formData = new FormData();
  Object.entries(postEditorSchema).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        formData.append(key, v);
      });
    } else {
      formData.append(key, value);
    }
  });

  if (postEditorSchema.category === 'gathering') {
    formData.append('startDate', format(startDate ?? new Date(), 'yyyy-MM-dd'));
    formData.append('endDate', format(endDate ?? new Date(), 'yyyy-MM-dd'));
    formData.append('totalHeadCount', totalHeadCount?.toString() ?? '');
  }

  return formData;
};

export async function requestCreatePost(postEditorSchema: PostEditorSchema) {
  const formData = createPostFormData(postEditorSchema);
  const { data } = await instance.post<string>(
    `/posts/${postEditorSchema.category}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data;
}

export function requestCreateOrUpdatePost(
  category: PostCategory | null,
  postId: string | number | null,
) {
  if (!category || !postId) {
    return requestCreatePost;
  }
  return async (postEditorSchema: PostEditorSchema) => {
    const formData = createPostFormData(postEditorSchema);
    formData.append('postId', postId.toString());
    const { data } = await instance.patch(
      `/posts/${category}/${postId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data;
  };
}

export async function requestDeletePost(post: Post) {
  const { data } = await instance.delete(`/posts/${post.category}/${post.id}`);
  return data;
}

export async function requestLikePost(postId: string | number) {
  await instance.post(`/posts/like/${postId}`);
}

export async function requestDislikePost(postId: string | number) {
  await instance.delete(`/posts/like/${postId}`);
}

export function requestLikeOrDislikePost(postId: string | number) {
  return async (userLikePost: boolean) => {
    if (userLikePost) {
      await requestDislikePost(postId);
    } else {
      await requestLikePost(postId);
    }
  };
}
