import React, { useCallback, useMemo, useState } from 'react';

import Modal from '@/components/shared/Modal';
import Select from '@/components/shared/Select';
import Button from '@/components/shared/Button';
import useReportTypeQuery from '@/hooks/useReportTypeQuery';
import useReportPostMutation from '@/hooks/useReportPostMutation';

interface PostReportModalProps {
  postId: string | number;
  isOpen: boolean;
  onClose: () => void;
}

export default function PostReportModal({
  postId,
  isOpen,
  onClose,
}: PostReportModalProps) {
  const { data } = useReportTypeQuery();
  const [reportType, setReportType] = useState<string>('');
  const { mutate } = useReportPostMutation(postId);

  const reportPost = useCallback(() => {
    mutate(reportType, {
      onSuccess: () => {
        onClose();
        setReportType('');
      },
    });
  }, [mutate, reportType, onClose]);

  const reportOptions = useMemo(
    () => data?.map(({ kr, en }) => ({ value: en, label: kr })),
    [data],
  );

  const handleClose = useCallback(() => {
    onClose();
    setReportType('');
  }, [onClose]);

  return (
    <Modal isModal={isOpen} close={handleClose} size="sm">
      <Modal.Title>신고하기</Modal.Title>
      <div>
        <Select
          id="report-post"
          defaultLabel="신고 유형을 선택하세요."
          selectedValue={reportType}
          onChangeOption={setReportType}
          options={reportOptions}
        />
      </div>
      <Modal.TwoBtnContainer
        leftBtn={
          <Button
            size="md"
            onClick={reportPost}
            fullWidth
            disabled={!Boolean(reportType)}
          >
            신고하기
          </Button>
        }
        rightBtn={
          <Button size="md" variant="default" onClick={handleClose} fullWidth>
            취소
          </Button>
        }
      />
    </Modal>
  );
}
