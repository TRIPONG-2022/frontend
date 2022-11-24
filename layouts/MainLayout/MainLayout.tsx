import React, { ReactNode } from 'react';

import GNB from '@/layouts/GNB';
import Footer from '@/layouts/Footer';
import ResponsiveContainer from '../../components/shared/ResponsiveContainer';

interface MainLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

function MainLayout({ children, fullWidth }: MainLayoutProps) {
  return (
    <>
      <GNB />
      <main>
        {fullWidth ? (
          <>{children}</>
        ) : (
          <ResponsiveContainer>{children}</ResponsiveContainer>
        )}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
