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
  introduction: '',
  characteristic: ['빵을 좋아하는', '여행을 좋아하는', '적극적인'],
  authenticated: true,
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
