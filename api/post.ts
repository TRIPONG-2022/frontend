import instance from './instance';

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
