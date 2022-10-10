import { ManagedPostData } from '@/types/managed-post';

import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';
import useManagedReportPostQuery from '../hooks/useManagedReportPostQuery';

import * as Styled from './ManagedPostList.styled';
import usePostSearchParamsContext from '../contexts/usePostSearchParamsContext';

const ManagedReportPostList = () => {
  const { searchParams } = usePostSearchParamsContext();

  const { data } = useManagedReportPostQuery(searchParams);

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

export default ManagedReportPostList;
