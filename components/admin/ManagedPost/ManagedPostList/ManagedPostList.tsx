import { ManagedPostData } from '@/types/managed-post';
import useManagedPostQuery from '../hooks/useManagedPostQuery';
import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';

import * as Styled from './ManagedPostList.styled';
import { usePostSearchParamsContext } from '../contexts/PostSearchParamsContext';

const ManagedPostList = () => {
  const { searchParams } = usePostSearchParamsContext('ManagedPostList');

  const { data } = useManagedPostQuery(searchParams);

  return (
    <Styled.ManagedPostListContainer>
      {data?.pages.map(({ content }) =>
        content?.map((data: ManagedPostData) => (
          <ManagedPostCard postData={data} key={data.postId} />
        )),
      )}
    </Styled.ManagedPostListContainer>
  );
};

export default ManagedPostList;
