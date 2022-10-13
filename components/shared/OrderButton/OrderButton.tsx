import { OLD_NEW_MENUS } from '@/constants/menus';
import { AppState } from '@/store/index';
import { setSendOrder } from '@/store/slice/myPageSlice';
import React, {
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVGIcon from '../SVGIcon';
import * as Styled from './OrderButton.styled';

const OrderButton = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(({ myPage }: AppState) => myPage);

  const [active, setActive] = useState<boolean>(false);

  const onClickActive = useCallback(() => {
    setActive(!active);
  }, [active]);

  const onChangeOrder = useCallback(
    (value: string) => {
      dispatch(setSendOrder(value));
      setActive(false);
    },
    [dispatch],
  );

  return (
    <Styled.OrderButtonContainer>
      <Styled.Backdrop onClick={onClickActive} active={active} />
      {OLD_NEW_MENUS.map(
        ({ name, value }) =>
          value === order && (
            <Styled.SelectOrder key={name} onClick={onClickActive}>
              {name}
              <SVGIcon icon="ArrowDownIcon" />
            </Styled.SelectOrder>
          ),
      )}
      {OLD_NEW_MENUS.map(
        ({ name, value }) =>
          value !== order && (
            <Styled.Order
              onClick={() => onChangeOrder(value)}
              active={active}
              key={name}
            >
              {name}
            </Styled.Order>
          ),
      )}
    </Styled.OrderButtonContainer>
  );
};

export default OrderButton;
