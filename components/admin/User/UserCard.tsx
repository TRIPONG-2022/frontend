import SVGIcon from '@/components/shared/SVGIcon';
import * as Styled from './UserCard.styled';

// 임시
const UserCard = ({ userData }: any) => {
  return (
    <Styled.Container>
      <Styled.NameWrapper>
        <Styled.NickName>{userData.nickName}</Styled.NickName>
        <Styled.Name>
          {userData.name ? userData.name : '추가정보 입력X'}
        </Styled.Name>
      </Styled.NameWrapper>
      <Styled.LoginId>{userData.loginId}</Styled.LoginId>
      <Styled.CreateDate>가입날짜 : {userData.createdDate}</Styled.CreateDate>
      <Styled.Menu>
        <SVGIcon icon="DotThree" />
      </Styled.Menu>
    </Styled.Container>
  );
};

export default UserCard;
