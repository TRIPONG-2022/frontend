import { getPosts, getReportPosts } from '@/api/admin';
import { useEffect, useState } from 'react';
import * as Styled from './AdminPost.styled';
import AdminPostCard from './AdminPostCard';

interface PostType {
  userId: number;
  postId: number;
  title: string;
  loginId: string;
  nickName: string;
  postCreatedDate: string;
}

const Post = () => {
  const [postList, setPostList] = useState([
    {
      userId: 1,
      postId: 2,
      title: '제목',
      loginId: 'admin',
      nickName: '관리자',
      postCreatedDate: '2022-07-26',
    },
  ]);
  const [activeBtn, setActiveBtn] = useState(true);

  const getAllPost = async () => {
    const { data } = await getPosts();
    // setPostList(data.content);
  };

  const getReportPost = async () => {
    const { data } = await getReportPosts();
    // setPostList(data.content);
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

          {postList.map((data) => (
            <AdminPostCard key={data.postId} postData={data} />
          ))}
        </Styled.Container>
      </Styled.LayoutBody>
    </Styled.LayoutContainer>
  );
};

export default Post;
