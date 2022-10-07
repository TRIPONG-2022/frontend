import { useState } from 'react';
import useManagedPostQuery from '../hooks/useManagedPostQuery';

import ManagedPostCard from '../ManagedPostCard/ManagedPostCard';
import * as Styled from './ManagedPostList.styled';
import { SearchParams } from '@/types/search-params';
import { ManagedPostInterface } from '@/types/managed-post';

interface Props {
  searchParams: SearchParams;
}

const ManagedPostList = ({ searchParams }: Props) => {
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
