import { getPosts, getReportPosts } from '@/api/admin';
import { useEffect, useState } from 'react';
import * as Styled from './AdminPost.styled';

const Post = () => {
  const [postList, setPostList] = useState([]);
  const [activeBtn, setActiveBtn] = useState(true);

  const getAllPost = async () => {
    const { data } = await getPosts();
    setPostList(data.content);
  };

  const getReportPost = async () => {
    const { data } = await getReportPosts();
    setPostList(data.content);
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <Styled.LayoutContainer>
      <Styled.LayoutSideMenu>
        <Styled.SideMenu></Styled.SideMenu>
      </Styled.LayoutSideMenu>
      <Styled.LayoutBody>
        <Styled.Container>
          <Styled.Title>게시글 조회</Styled.Title>
          <Styled.GetPostsBtn
            active={activeBtn}
            onClick={() => {
              setActiveBtn((prev) => !prev);
              getAllPost();
            }}
          >
            전체 게시글 조회
          </Styled.GetPostsBtn>
          <Styled.GetPostsBtn
            active={!activeBtn}
            onClick={() => {
              setActiveBtn((prev) => !prev);
              getReportPost();
            }}
          >
            신고된 게시글 조회
          </Styled.GetPostsBtn>
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default Post;
