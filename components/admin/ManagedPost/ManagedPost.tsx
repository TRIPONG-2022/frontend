import { useState } from 'react';

import useToggle from '@/hooks/useToggle';
import { SearchParams } from '@/types/search-params';

import * as Styled from './ManagedPost.styled';
import ManagedPostList from './ManagedPostList/ManagedPostList';
import ManagedReportPostList from './ManagedPostList/ManagedReportPostList';
import ManagedPostSearch from './ManagedPostSearch/ManagedPostSearch';

const Post = () => {
  const { toggle: isPostSearch, onToggle, setOff, setOn } = useToggle(true);

  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchType: 'title',
    keyword: '',
    size: 3,
  });

  return (
    <Styled.LayoutContainer>
      <Styled.LayoutSideMenu>
        <Styled.SideMenu></Styled.SideMenu>
      </Styled.LayoutSideMenu>
      <Styled.LayoutBody>
        <Styled.Container>
          <Styled.Title>게시글 조회</Styled.Title>
          <Styled.GetPostsBtn
            toggle={isPostSearch}
            onClick={() => {
              setOn();
            }}
          >
            전체 게시글 조회
          </Styled.GetPostsBtn>
          <Styled.GetPostsBtn
            toggle={!isPostSearch}
            onClick={() => {
              setOff();
            }}
          >
            신고된 게시글 조회
          </Styled.GetPostsBtn>

          <ManagedPostSearch
            isePostSearch={isPostSearch}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />

          {isPostSearch && <ManagedPostList searchParams={searchParams} />}
          {!isPostSearch && (
            <ManagedReportPostList searchParams={searchParams} />
          )}
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default Post;
