import { ManagedPostInterface } from '@/types/managed-post';
import { SearchParams } from '@/types/search-params';

import * as Styled from './ManagedPostList.styled';
import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';
import useManagedReportPostQuery from '../hooks/useManagedReportPostQuery';

interface Props {
  searchParams: SearchParams;
}

const ManagedReportPostList = ({ searchParams }: Props) => {
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
