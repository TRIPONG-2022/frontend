import { OLD_NEW_MENUS } from '@/constants/menus';
import React, { MouseEvent, SetStateAction, useState } from 'react';
import SVGIcon from '../SVGIcon';
import * as Styled from './OrderButton.styled';

interface OrderButtonProps {
  setOrder: React.Dispatch<SetStateAction<string>>;
}

const OrderButton = ({ setOrder }: OrderButtonProps) => {
  const [active, setActive] = useState(false);
  const [orderMenu, setOrderMenu] = useState(OLD_NEW_MENUS);

  const onChangeOrder = (e: MouseEvent, idx: number, value: string) => {
    if (active === true) e.stopPropagation();
    if (idx === 1) {
      const [a, b] = [...orderMenu];
      setOrderMenu([b, a]);
      setOrder(value);
    }
    setActive(false);
  };

  return (
    <Styled.OrderDiv onClick={() => setActive(true)}>
      {orderMenu.map(({ name, value }, idx) => (
        <Styled.Order
          onClick={(e) => onChangeOrder(e, idx, value)}
          active={active}
          key={name}
        >
          {name}
          {idx === 0 && <SVGIcon icon="ArrowDownIcon" />}
        </Styled.Order>
      ))}
    </Styled.OrderDiv>
  );
};

export default OrderButton;
