import MainLayout from '@/layouts/MainLayout';
import type { NextPage } from 'next';
import React from 'react';

const arr = new Array(100).fill(1);

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      {arr.map((ar) => (
        <React.Fragment key={ar}>
          TRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONGTRIPONG
        </React.Fragment>
      ))}
    </MainLayout>
  );
};

export default HomePage;
