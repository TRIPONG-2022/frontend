import { CATEGORY_MENUS } from '@/constants/menus';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as Styled from './CategoryPicker.styled';

interface CategoryPickerProps {
  setStoreCategory: Dispatch<SetStateAction<string>>;
}

const CategoryPicker = ({ setStoreCategory }: CategoryPickerProps) => {
  const [category, setCategory] = useState({ name: '모두보기', value: 'all' });

  useEffect(() => {
    setStoreCategory(category.value);
  }, [category, setStoreCategory]);

  return (
    <Styled.Container>
      <Styled.CategoryUl>
        {CATEGORY_MENUS.map(({ name, value }) => (
          <Styled.CategoryLi
            onClick={() => setCategory({ name, value })}
            active={category.name === name}
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
