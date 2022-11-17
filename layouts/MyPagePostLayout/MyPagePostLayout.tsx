import React, { ReactNode } from 'react';

import OrderButton from '@/components/shared/OrderButton';
import CategoryPicker from '@/components/shared/CategoryPicker';
import ProfileDateRangeInput from '@/components/shared/ProfileDateRangeInput';

import * as Styled from './MyPagePostLayout.styled';

interface MyPagePostLayoutProps {
  children: ReactNode;
  existCategory?: boolean;
  existCalendar?: boolean;
  contentTitle: string;
}

const MyPagePostLayout = ({
  children,
  existCalendar,
  existCategory,
  contentTitle,
}: MyPagePostLayoutProps) => {
  return (
    <Styled.Container>
      {existCalendar && (
        <>
          <Styled.Title>조회기간</Styled.Title>
          <Styled.DatePickerWrapper>
            <ProfileDateRangeInput />
          </Styled.DatePickerWrapper>
        </>
      )}
      {existCategory && (
        <>
          <Styled.CategoryWrapper>
            <Styled.Title>카테고리</Styled.Title>
            <CategoryPicker />
          </Styled.CategoryWrapper>
        </>
      )}
      <Styled.PostWrapper>
        <Styled.Title>{contentTitle}</Styled.Title>
        {/* <OrderButton /> */}
      </Styled.PostWrapper>
      <Styled.ContentBox>{children}</Styled.ContentBox>
    </Styled.Container>
  );
};

export default MyPagePostLayout;
