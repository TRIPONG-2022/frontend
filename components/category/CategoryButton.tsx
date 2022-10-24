import * as Styled from './CategoryButton.styled';

const CategoryButton = () => {
  return (
    <Styled.Continer>
      <Styled.Button active>전체결과</Styled.Button>
      <Styled.Button>자유게시판</Styled.Button>
      <Styled.Button>후기,리뷰</Styled.Button>
      <Styled.Button>Q&A</Styled.Button>
      <Styled.Button>여행메이트 모집</Styled.Button>
    </Styled.Continer>
  );
};

export default CategoryButton;
