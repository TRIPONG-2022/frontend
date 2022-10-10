import { ManagedPostData } from '@/types/managed-post';
import useManagedPostQuery from '../hooks/useManagedPostQuery';
import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';

import * as Styled from './ManagedPostList.styled';
import usePostSearchParamsContext from '../contexts/usePostSearchParamsContext';

const ManagedPostList = () => {
  const { searchParams } = usePostSearchParamsContext();

  const { data } = useManagedPostQuery(searchParams);

  return (
    <Styled.Container>
      {data?.pages.map(({ content }) =>
        content?.map((data: ManagedPostData) => (
          <ManagedPostCard postData={data} key={data.postId} />
        )),
      )}
    </Styled.Container>
  );
};

export default ManagedPostList;
