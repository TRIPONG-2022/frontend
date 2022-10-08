import { ManagedPostInterface } from '@/types/managed-post';
import { SearchParams } from '@/types/search-params';
import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';
import useManagedReportPostQuery from '../hooks/useManagedReportPostQuery';

import * as Styled from './ManagedPostList.styled';

interface ManagedReportPostListProps {
  searchParams: SearchParams;
}

const ManagedReportPostList = ({
  searchParams,
}: ManagedReportPostListProps) => {
  const { data } = useManagedReportPostQuery(searchParams);

  return (
    <Styled.Container>
      {data?.pages.map(({ content }) =>
        content?.map((data: ManagedPostInterface) => (
          <ManagedPostCard postData={data} key={data.postId} />
        )),
      )}
    </Styled.Container>
  );
};

export default ManagedReportPostList;
