import type { NextPage } from 'next';
import styled from 'styled-components';

import Role from '@/components/admin/Role/Role';
import MainLayout from '@/layouts/MainLayout';

const RolesPage: NextPage = () => {
  return (
    <MainLayout>
      <Role />
    </MainLayout>
  );
};

export default RolesPage;
