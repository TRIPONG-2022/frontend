import { SearchParams } from '@/types/search-params';
import { ManagedPostInterface } from '@/types/managed-post';
import useManagedPostQuery from '../hooks/useManagedPostQuery';
import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';

import * as Styled from './ManagedPostList.styled';

interface ManagedPostListProps {
  searchParams: SearchParams;
}

const ManagedPostList = ({ searchParams }: ManagedPostListProps) => {
  const { data } = useManagedPostQuery(searchParams);

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

export default ManagedPostList;
