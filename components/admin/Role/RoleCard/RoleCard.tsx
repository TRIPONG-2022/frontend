import { useMutation } from 'react-query';
import { deleteRoles } from '@/api/admin';
import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import SVGIcon from '@/components/shared/SVGIcon';
import useModal from '@/hooks/useModal';
import useRoleQuery from '@/hooks/useRoleQuery';
import * as Styled from './RoleCard.styled';

interface RoleCardProps {
  item: {
    roleId: number;
    roleName: string;
    description: string;
  };
}

const RoleCard = ({ item }: RoleCardProps) => {
  const [isModal, open, close] = useModal();

  const { refetch } = useRoleQuery();

  const { mutate } = useMutation((roleId: number) => deleteRoles(roleId), {
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <Styled.Container>
      <Styled.Label>권한</Styled.Label>
      <Styled.Title>{item.roleName}</Styled.Title>
      <Styled.Label>권한 설명</Styled.Label>
      <Styled.Description>{item.description}</Styled.Description>
      <Styled.Menu onClick={() => open()}>
        <SVGIcon icon="DotThree" />
      </Styled.Menu>
      <Modal isModal={isModal} close={close}>
        <Modal.Title>해당 권한을 삭제하시겠습니까?</Modal.Title>
        <Modal.BtnContainers>
          <Button
            size="lg"
            type="submit"
            css={`
              width: 100%;
              margin-top: 2rem;
            `}
            onClick={() => {
              mutate(item.roleId);
              close();
            }}
          >
            예
          </Button>
          <Button
            size="lg"
            type="button"
            variant="outline"
            css={`
              width: 100%;
              margin-top: 2rem;
            `}
            onClick={() => close()}
          >
            닫기
          </Button>
        </Modal.BtnContainers>
      </Modal>
    </Styled.Container>
  );
};

export default RoleCard;