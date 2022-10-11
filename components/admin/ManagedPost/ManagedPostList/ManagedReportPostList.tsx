import { ManagedPostData } from '@/types/managed-post';

import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';
import useManagedReportPostQuery from '../hooks/useManagedReportPostQuery';

import * as Styled from './ManagedPostList.styled';
import { usePostSearchParamsContext } from '../contexts/PostSearchParamsContext';

const ManagedReportPostList = () => {
  const { searchParams } = usePostSearchParamsContext('ManagedReportPostList');

  const { data } = useManagedReportPostQuery(searchParams);

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

export default ManagedReportPostList;
