import MainLayout from '@/layouts/MainLayout';
import type { NextPage } from 'next';
import React from 'react';

const arr = new Array(100).fill(1);

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="">TRIPONG</h1>
    </MainLayout>
  );
};

export default HomePage;
