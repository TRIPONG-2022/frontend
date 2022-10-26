import { NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import Profile from '@/components/my/profile/Profile';
import { MY_PAGE_MENUS } from '@/constants/menus';

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <MyPageLayout menus={MY_PAGE_MENUS}>
        <Profile />
      </MyPageLayout>
    </MainLayout>
  );
};

export default ProfilePage;
