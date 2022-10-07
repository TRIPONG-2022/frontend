import Button from '@/components/shared/Button';
import Modal from '@/components/shared/Modal';
import { ADMINPOST_MENU } from '@/constants/admin';
import useBlackUser from '../../ManagedUser/hooks/useBlackUser';
import useDeletePost from '../hooks/useDeletePost';

interface Props {
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
}: Props) => {
  const { mutate: black } = useBlackUser();

  const { mutate: deletePost } = useDeletePost();

  return (
    <Modal isModal={isModal} close={close}>
      <Modal.Title>{ADMINPOST_MENU[menu]?.title}</Modal.Title>

      <Modal.BtnContainers>
        <Button
          size="lg"
          type="submit"
          css={`
            width: 100%;
            margin-top: 2rem;
          `}
          onClick={() => {
            ADMINPOST_MENU[menu]?.onClick(
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
          size="lg"
          type="button"
          variant="outline"
          css={`
            width: 100%;
            margin-top: 2rem;
          `}
          onClick={() => {
            close();
          }}
        >
          닫기
        </Button>
      </Modal.BtnContainers>
    </Modal>
  );
};

export default ManagedPostCardModal;
