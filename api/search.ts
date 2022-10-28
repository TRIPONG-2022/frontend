import axios from 'axios';
import instance from './instance';

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

  console.log(data);
  return data.data;
};

export const postList = async () => {
  const { data } = await instance.get('/posts');

  console.log(data);

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
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/search`,
      {
        params: {
          ...params,
          page: pageParam,
          size: 6,
          sort: ['id', 'desc'].join(','),
        },
      },
    );

    return data;
  }

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
    {
      params: {
        ...params,
        page: pageParam,
        size: 6,
        sort: ['id', 'desc'].join(','),
      },
    },
  );

  return data;
};
