import { format } from 'date-fns';

import { Post, PostCategory } from '@/types/post';
import { PostEditorSchema } from '@/constants/schema';

import instance from './instance';

export async function requestGetPost(
  category: PostCategory | null,
  postId: string | number | null,
) {
  if (!category || !postId) {
    return null;
  }
  const { data } = await instance.get<Post>(`/posts/${category}/${postId}`);
  return data;
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
