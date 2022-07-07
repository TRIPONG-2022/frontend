import { NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import { MY_PAGE_MENUS } from '@/constants/menus';

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <MyPageLayout menus={MY_PAGE_MENUS}>oijefoij</MyPageLayout>
    </MainLayout>
  );
};

export default ProfilePage;
