import useModal from '@/hooks/useModal';
import ModalComponent from '@/components/shared/Modal';
import React, { useState } from 'react';
import { NextPage } from 'next';
import Button from '@/components/shared/Button';

const ModalPage: NextPage = () => {
  const { isModal, open, close } = useModal();

  const btnClick = () => {
    alert('클릭');
  };

  return (
    <div>
      <ModalComponent isModal={isModal} close={close}>
        <ModalComponent.Title>
          포스트 미리보기 이것도 보여줄게요
        </ModalComponent.Title>
        <ModalComponent.Description>상세 내용</ModalComponent.Description>
        <ModalComponent.BtnContainer>
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
        </ModalComponent.BtnContainer>
        <ModalComponent.BtnContainers>
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
          <Button
            size="lg"
            type="submit"
            css={`
              width: 100%;
              margin-top: 2rem;
            `}
            onClick={() => btnClick()}
          >
            로그인
          </Button>
        </ModalComponent.BtnContainers>
      </ModalComponent>

      {/* <ModalComponent 
        isModal={isModal} 
        close={close} 
        tit='' 
        sum='', 
        onClick={btnClick}
        closeText='닫'
        actionText='열'
        state={img}
        setState={setImg}
      /> */}

      <button onClick={() => open()}>클릭미</button>
      <button onClick={() => close()}>닫힌다</button>
    </div>
  );
};

export default ModalPage;
