import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import { RoleData } from '@/types/managed-role';
import useDeleteRole from '../hooks/useDeleteRole';

import * as Styled from './RoleCard.styled';

interface RoleCardProps {
  item: RoleData;
}

const RoleCard = ({ item }: RoleCardProps) => {
  const [isModal, open, close] = useModal();

  const { mutate } = useDeleteRole();

  return (
    <Styled.RoleCardContainer>
      <Styled.Label>권한</Styled.Label>
      <Styled.Title>{item.roleName}</Styled.Title>
      <Styled.Label>권한 설명</Styled.Label>
      <Styled.Description>{item.description}</Styled.Description>
      <Styled.Menu onClick={() => open()}>
        <SVGIcon icon="DotThree" />
      </Styled.Menu>
      <Modal isModal={isModal} close={close}>
        <Modal.Title>해당 권한을 삭제하시겠습니까?</Modal.Title>
        <Modal.BtnContainer>
          <Button
            size="md"
            type="submit"
            fullWidth
            onClick={() => {
              mutate(item.roleId);
              close();
            }}
          >
            예
          </Button>
          <Button
            size="md"
            type="button"
            variant="outline"
            fullWidth
            onClick={close}
          >
            닫기
          </Button>
        </Modal.BtnContainer>
      </Modal>
    </Styled.RoleCardContainer>
  );
};

export default RoleCard;
