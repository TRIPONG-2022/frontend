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

// 해당 타입이 router.query 로 넘겨줄 때 타입을 찾지 못해주어서... 이렇게 넘겨주고 있다.
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
        params: { ...params, page: pageParam, size: 2 },
      },
    );

    return data;
  }

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
    {
      params: { ...params, page: pageParam, size: 2 },
    },
  );

  return data;
};
