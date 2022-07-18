import { NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import Profile from '@/components/shared/Profile';
import { MY_PAGE_MENUS } from '@/constants/menus';

const characteristic = [
  '빵을 좋아하는',
  '여행을 좋아하는',
  '적극적인',
  '가나다라',
  '마바사',
  '아자차카',
  '타파하',
].map((el) => Object.assign({ character: el }));

const userData = {
  nickName: '닉네임',
  loginId: '아이디다',
  name: '이름이다',
  email: '이메일@이메일.이다',
  introduction: '안녕하세요 잘 부탁드립니다!',
  characteristic,
  picture:
    'https://a.cdn-hotels.com/gdcs/production47/d1059/04077388-e2a5-4952-88d6-4cd6ffe07710.jpg',
  authentication: true,
};

export type userDataType = typeof userData;

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <MyPageLayout menus={MY_PAGE_MENUS}>
        <Profile userData={userData} />
      </MyPageLayout>
    </MainLayout>
  );
};

export default ProfilePage;
