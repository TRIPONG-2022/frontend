import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CategoryPicker from '@/components/shared/CategoryPicker';
import DatePicker from '@/components/shared/DatePicker';
import OrderButton from '@/components/shared/OrderButton';
import {
  setSendCategory,
  setSendEndDate,
  setSendOrder,
  setSendStartDate,
} from 'store/postSlice';

import * as Styled from './PostLayout.styled';

interface PostLayoutProps {
  children: ReactNode;
  existCategory?: boolean;
  existCalendar?: boolean;
}

const PostLayout = ({
  children,
  existCalendar,
  existCategory,
}: PostLayoutProps) => {
  const dispatch = useDispatch();

  const [storeCategory, setStoreCategory] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    dispatch(setSendStartDate(JSON.stringify(selectedStartDate)));
    dispatch(setSendEndDate(JSON.stringify(selectedEndDate)));
    dispatch(setSendCategory(storeCategory));
    dispatch(setSendOrder(order));
  }, [dispatch, selectedStartDate, selectedEndDate, storeCategory, order]);

  return (
    <Styled.Container>
      {existCalendar && (
        <>
          <Styled.Title>조회기간</Styled.Title>
          <Styled.DatePickerWrapper>
            <DatePicker setDate={setSelectedStartDate} />
            <DatePicker setDate={setSelectedEndDate} />
          </Styled.DatePickerWrapper>
        </>
      )}
      {existCategory && (
        <>
          <Styled.CategoryWrapper>
            <Styled.Title>카테고리</Styled.Title>
            <CategoryPicker setStoreCategory={setStoreCategory} />
          </Styled.CategoryWrapper>
        </>
      )}
      <Styled.PostWrapper>
        <Styled.Title>총 {5}개의 글</Styled.Title>
        <OrderButton setOrder={setOrder} />
      </Styled.PostWrapper>
      <Styled.ContentBox>{children}</Styled.ContentBox>
    </Styled.Container>
  );
};

export default PostLayout;
