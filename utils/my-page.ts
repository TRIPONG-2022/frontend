import {
  getMyPageLikePosts,
  getMyPagePosts,
  getMyPageReplies,
} from '@/api/myPage';
import { Post } from '@/types/post';
import { Reply } from '@/types/reply';
import { GetMyPageDataOptions, GetMyPageReturnData } from '@/types/my-page';

interface MyPageDataOptions extends GetMyPageDataOptions {
  type: 'post' | 'reply' | 'like';
}

type SetDataType<T> = T extends 'post' ? Post : Reply;

const myPageApi = <T extends 'post' | 'reply'>({
  type,
  page,
  size,
  category,
  endDate,
  startDate,
  userId,
}: MyPageDataOptions): Promise<GetMyPageReturnData<SetDataType<T>>> => {
  if (type === 'post')
    return getMyPagePosts({
      page,
      size,
      category,
      startDate,
      endDate,
    });
  if (type === 'reply')
    return getMyPageReplies({
      page,
      size,
      userId,
      startDate,
      endDate,
    });
  return getMyPageLikePosts({
    page,
    size,
    category,
  });
};

export default myPageApi;
