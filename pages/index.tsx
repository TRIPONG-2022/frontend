import CardContainer from '@/components/shared/Card/CardContainer';
import CardExample from '@/components/shared/Card/CardExample';
import CardPresenter from '@/components/shared/Card/CardExample2';
import CardTextGrid from '@/components/shared/Card/CardPresentation';
import MainLayout from '@/layouts/MainLayout';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="">TRIPONG</h1>

      {/* 추후에 props로 조건에 맞는 post data를 props로 넘겨받을 예정 */}
      <CardContainer />
    </MainLayout>
  );
};

export default HomePage;
