import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORY_MENUS } from '@/constants/menus';
import * as Styled from './CategoryPicker.styled';
import { AppState } from '@/store/index';
import { setSendCategory } from '@/store/slice/myPageSlice';

const CategoryPicker = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(({ myPage }: AppState) => myPage);

  const handleClickCategory = useCallback(
    (value: string) => {
      dispatch(setSendCategory(value));
    },
    [dispatch],
  );

  return (
    <Styled.Container>
      <Styled.CategoryUl>
        {CATEGORY_MENUS.map(({ name, value }) => (
          <Styled.CategoryLi
            onClick={() => handleClickCategory(value)}
            active={category === value}
            key={name}
          >
            {name}
          </Styled.CategoryLi>
        ))}
      </Styled.CategoryUl>
    </Styled.Container>
  );
};

export default CategoryPicker;
