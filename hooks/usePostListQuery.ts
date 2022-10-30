import { useInfiniteQuery } from 'react-query';

import { Post } from '@/types/post';
import { getPostList } from '@/api/search';

export default function usePostListQuery(
  queryParam: {
    searchType: string;
    keyword: string;
  },
  postCategory: string,
) {
  const query = useInfiniteQuery<Post[]>(
    'posts',
    ({ pageParam = 0 }) => getPostList(queryParam, pageParam),

    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length === 0 ? undefined : pages.length;
      },

      select: (data) => ({
        pages: [...data.pages].map((list) =>
          postCategory
            ? list.filter(
                ({ category }: { category: string }) =>
                  category === postCategory,
              )
            : list,
        ),
        pageParams: [...data.pageParams],
      }),
    },
  );

  return query;
}