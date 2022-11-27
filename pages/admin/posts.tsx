import type { NextPage } from 'next';
import styled from 'styled-components';
import AdminPost from '@/components/admin/ManagedPost/ManagedPost';
import MainLayout from '@/layouts/MainLayout';

const PostsPage: NextPage = () => {
  return (
    <MainLayout>
      <AdminPost />
    </MainLayout>
  );
};
export default PostsPage;
