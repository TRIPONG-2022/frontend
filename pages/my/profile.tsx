import { NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import Profile from '@/components/my/profile/Profile';
import { MY_PAGE_MENUS } from '@/constants/menus';
import { getProfileInfomation } from 'api/myPage';

export interface UserDataType {
  userData: {
    loginId: string;
    email: string;
    gender: string;
    name: string;
    nickName: string;
    joinMethod: string;
    authentication: number;
    birthDate: string;
    city: string;
    district: string;
    introduction: string;
    latitude: number;
    longitude: number;
    phoneNumber: string;
    picture: string;
    tags: {
      tag: string;
    }[];
  };
}

const ProfilePage: NextPage<UserDataType> = ({ userData }) => {
  return (
    <MainLayout>
      <MyPageLayout menus={MY_PAGE_MENUS}>
        <Profile userData={userData} />
      </MyPageLayout>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  const userData = await getProfileInfomation(4);

  const tagArr = ['가나다', '라마바', '사아자', '차카타', '파하'];

  const tags = tagArr.map((tag) => ({
    tag: tag,
  }));

  const modifiedUserData = {
    // ...userData,
    picture:
      'https://a.cdn-hotels.com/gdcs/production47/d1059/04077388-e2a5-4952-88d6-4cd6ffe07710.jpg',
    introduction: '안녕하세요 잘 부탁드립니다!',
    tags: tags,
  };

  return {
    props: {
      userData: modifiedUserData,
    },
  };
};

export default ProfilePage;
