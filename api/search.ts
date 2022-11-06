import axios, { AxiosError } from 'axios';
import instance from './instance';
import publicInstance from './public-instance';

export const search = async ({
  searchType,
  keyword,
}: {
  searchType: string | string[] | undefined;
  keyword: string | string[] | undefined;
}) => {
  const data = await instance.get(`/search`, {
    params: { searchType, keyword },
  });

  return data.data;
};

export const postList = async () => {
  const { data } = await instance.get('/posts');

  return data;
};

export const getPostList = async (
  params: {
    searchType: string | string[] | undefined;
    keyword: string | string[] | undefined;
  },
  pageParam?: number,
) => {
  if (params.keyword) {
    try {
      const { data } = await publicInstance.get('/search', {
        params: {
          ...params,
          page: pageParam,
          size: 2,
          // 6으로 했을 떄...
          sort: ['id', 'desc'].join(','),
        },
      });

      return data;
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        return [];
      }
    }
  }

  try {
    const { data } = await publicInstance.get('/posts', {
      params: {
        ...params,
        page: pageParam,
        size: 2,
        sort: ['id', 'desc'].join(','),
      },
    });

    return data;
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      return [];
    }
  }
};
