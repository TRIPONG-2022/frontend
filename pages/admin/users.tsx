import type { NextPage } from 'next';
import styled from 'styled-components';
import User from '@/components/admin/ManagedUser/ManagedUser';
import MainLayout from '@/layouts/MainLayout';

const UsersPage: NextPage = () => {
  return (
    <MainLayout>
      <User />
    </MainLayout>
  );
};

export default UsersPage;
