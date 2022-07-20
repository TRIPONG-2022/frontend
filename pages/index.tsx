import CardContainer from '@/components/shared/Card/CardContainer';
import MainLayout from '@/layouts/MainLayout';
import type { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="">TRIPONG</h1>

      <CardContainer />
    </MainLayout>
  );
};

export default HomePage;
