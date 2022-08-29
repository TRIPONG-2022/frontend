import axios, { AxiosError } from 'axios';
import instance from './instance';

export const getPosts = async () => {
  try {
    const { data } = await instance.get(`/posts`);
    console.log(data);
    return {
      isError: false,
      data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        isError: true,
        error: '게시글을 받아오지 못했습니다.',
      };
    } else {
      return {
        isError: true,
        error: '알 수 없는 오류가 발생하였습니다.',
      };
    }
  }
};
