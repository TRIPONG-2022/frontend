import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import { ADMINUSER_DROPDOWN } from '@/constants/admin';
import ManagedUserRoleChange from '../ManagedUserRoleChange/ManagedUserRoleChange';
import useBlackUser from '../hooks/useBlackUser';
import useChangeUserRole from '../hooks/useChangeUserRole';

interface ManagedUserCardModalProps {
  id: number;
  isModal: boolean;
  close: () => void;
  menu: string;
  selectRoles: string[];
  setSelectRoles: (
    selectRoles: string[] | ((selectRoles: string[]) => string[]),
  ) => void;
}

const ManagedUserCardModal = ({
  id,
  isModal,
  close,
  menu,
  selectRoles,
  setSelectRoles,
}: ManagedUserCardModalProps) => {
  const { mutate: black } = useBlackUser();

  const { mutate: changeRole } = useChangeUserRole(selectRoles);

  return (
    <Modal isModal={isModal} close={close}>
      <Modal.Title>{ADMINUSER_DROPDOWN[menu]?.title}</Modal.Title>
      {menu == 'roleChange' && (
        <ManagedUserRoleChange
          selectRoles={selectRoles}
          setSelectRoles={setSelectRoles}
        />
      )}
      <Modal.BtnContainer>
        <Button
          size="md"
          type="submit"
          fullWidth
          onClick={() => {
            ADMINUSER_DROPDOWN[menu]?.onClick(id, {
              black,
              changeRole,
            });
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
          onClick={() => {
            setSelectRoles([]);
            close();
          }}
        >
          닫기
        </Button>
      </Modal.BtnContainer>
    </Modal>
  );
};

export default ManagedUserCardModal;
