import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CategoryPicker from '@/components/shared/CategoryPicker';
import OrderButton from '@/components/shared/OrderButton';

import * as Styled from './MyPagePostLayout.styled';
import ProfileDateRangeInput from '@/components/shared/ProfileDateRangeInput';
import {
  setSendCategory,
  setSendEndDate,
  setSendOrder,
  setSendStartDate,
} from 'store/slice/postSlice';

interface PostLayoutProps {
  children: ReactNode;
  existCategory?: boolean;
  existCalendar?: boolean;
  contentTitle: string;
}

const PostLayout = ({
  children,
  existCalendar,
  existCategory,
  contentTitle,
}: PostLayoutProps) => {
  const dispatch = useDispatch();

  const [storeCategory, setStoreCategory] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    dispatch(setSendStartDate(JSON.stringify(selectedStartDate)));
  }, [dispatch, selectedStartDate, selectedEndDate, storeCategory, order]);

  useEffect(() => {
    dispatch(setSendEndDate(JSON.stringify(selectedEndDate)));
  }, [dispatch, selectedEndDate]);

  useEffect(() => {
    dispatch(setSendCategory(storeCategory));
  }, [dispatch, storeCategory]);

  useEffect(() => {
    dispatch(setSendOrder(order));
  }, [dispatch, order]);

  return (
    <Styled.Container>
      {existCalendar && (
        <>
          <Styled.Title>조회기간</Styled.Title>
          <Styled.DatePickerWrapper>
            <ProfileDateRangeInput
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              onChangeStartDate={setSelectedStartDate}
              onChangeEndDate={setSelectedEndDate}
            />
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
        <Styled.Title>{contentTitle}</Styled.Title>
        <OrderButton setOrder={setOrder} />
      </Styled.PostWrapper>
      <Styled.ContentBox>{children}</Styled.ContentBox>
    </Styled.Container>
  );
};

export default PostLayout;
