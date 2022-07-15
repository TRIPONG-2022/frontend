import { NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import Profile from '@/components/shared/Profile';
import { MY_PAGE_MENUS } from '@/constants/menus';

const userData = {
  nickName: '닉네임',
  userId: '아이디다',
  name: '이름이다',
  email: '이메일@이메일.이다',
  introduction: '안녕하세요 잘 부탁드립니다!',
  characteristic: [
    { character: '빵을 좋아하는' },
    { character: '여행을 좋아하는' },
    { character: '적극적인' },
    { character: '가나다라' },
    { character: '마바사' },
    { character: '아자차카' },
    { character: '타파하' },
  ],
  authenticated: true,
  profileImage:
    'https://a.cdn-hotels.com/gdcs/production47/d1059/04077388-e2a5-4952-88d6-4cd6ffe07710.jpg',
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
