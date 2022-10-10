import useToggle from '@/hooks/useToggle';
import ManagedPostList from './ManagedPostList/ManagedPostList';
import ManagedReportPostList from './ManagedPostList/ManagedReportPostList';
import ManagedPostSearch from './ManagedPostSearch/ManagedPostSearch';

import * as Styled from './ManagedPost.styled';
import PostSearchParamsContextProvider from './contexts/PostSearchParamsContex';

const Post = () => {
  const { toggle: isPostSearch, onToggle, setOff, setOn } = useToggle(true);

  return (
    <PostSearchParamsContextProvider>
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

            <ManagedPostSearch isePostSearch={isPostSearch} />

            {isPostSearch && <ManagedPostList />}
            {!isPostSearch && <ManagedReportPostList />}
          </Styled.Container>
        </Styled.LayoutBody>
      </Styled.LayoutContainer>
    </PostSearchParamsContextProvider>
  );
};

export default Post;
