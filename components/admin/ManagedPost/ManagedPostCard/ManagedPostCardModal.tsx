import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import { ADMINPOST_DROPDOWN } from '@/constants/admin';
import useBlackUser from '../../ManagedUser/hooks/useBlackUser';
import useDeletePost from '../hooks/useDeletePost';

interface ManagedPostCardModalProps {
  userId: number;
  postId: number;
  isModal: boolean;
  close: () => void;
  menu: string;
}

const ManagedPostCardModal = ({
  userId,
  postId,
  isModal,
  close,
  menu,
}: ManagedPostCardModalProps) => {
  const { mutate: black } = useBlackUser();

  const { mutate: deletePost } = useDeletePost();

  return (
    <Modal isModal={isModal} close={close}>
      <Modal.Title>{ADMINPOST_DROPDOWN[menu]?.title}</Modal.Title>
      <Modal.BtnContainer>
        <Button
          size="md"
          type="submit"
          fullWidth
          onClick={() => {
            ADMINPOST_DROPDOWN[menu]?.onClick(
              { userId, postId },
              {
                black,
                deletePost,
              },
            );
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
  );
};

export default ManagedPostCardModal;
