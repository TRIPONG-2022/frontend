import instance from './instance';
import { PostEditorSchema } from '@/constants/schema';

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
    formData.append('startDate', startDate?.toDateString() || '');
    formData.append('endDate', endDate?.toDateString() || '');
    formData.append('totalHeadCount', totalHeadCount?.toString() || '');
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
