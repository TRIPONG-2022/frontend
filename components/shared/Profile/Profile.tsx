import Link from 'next/link';
import { userDataType } from 'pages/my/profile';
import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import Button from '../Button';
import SVGIcon from '../SVGIcon';
import * as Styled from './Profile.styled';

type ProfileProps = {
  userData: userDataType;
};

const Profile = ({ userData }: ProfileProps) => {
  const {
    nickName,
    userId,
    name,
    email,
    authenticated,
    characteristic,
    introduction,
  } = userData;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);
  const [profileImg, setProfileImg] = useState<File>();
  const [nickNameToggle, setNicknameToggle] = useState(false);
  const [modifiedNickname, setmodifiedNickname] = useState<string>(nickName);

  const onOpenFileWindow = useCallback(() => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }, []);

  const onRegisterImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (
            e.target &&
            imgRef.current &&
            typeof e.target.result === 'string'
          ) {
            imgRef.current.src = e.target.result;
          }
        };
        reader.readAsDataURL(e.target.files[0]);
        setProfileImg(e.target.files[0]);
        console.log(profileImg);
      }
    },
    [profileImg],
  );

  const onNicknameToggle = useCallback(() => {
    if (nickName.length > 2) {
      setNicknameToggle(!nickNameToggle);
      setIsAuthenticated(!isAuthenticated);
    }
  }, [nickName, nickNameToggle, isAuthenticated]);

  const onSetNickname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setmodifiedNickname(e.target.value);
  }, []);

  return (
    <Styled.Container>
      <Styled.ProfileWrapper>
        <Styled.ProfileImageWrapper>
          <Styled.ProfileImageDiv onClick={onOpenFileWindow}>
            <Styled.ProfileImage
              title="클릭해서 프로필 이미지를 변경할 수 있습니다."
              ref={imgRef}
              src={
                'https://a.cdn-hotels.com/gdcs/production47/d1059/04077388-e2a5-4952-88d6-4cd6ffe07710.jpg'
              }
              alt="profile"
            />
            <input
              ref={inputFileRef}
              onChange={onRegisterImage}
              type="file"
              style={{ display: 'none' }}
            />
          </Styled.ProfileImageDiv>
          <Styled.NicknameDiv>
            {!nickNameToggle && (
              <Styled.Nickname>{modifiedNickname}</Styled.Nickname>
            )}
            {nickNameToggle && (
              <Styled.NicknameInput
                maxLength={14}
                onChange={onSetNickname}
                value={modifiedNickname}
              />
            )}
            {isAuthenticated && (
              <SVGIcon icon="Authenticated" width={25} height={25} />
            )}
          </Styled.NicknameDiv>
          <Button
            onClick={onNicknameToggle}
            css={{ background: 'grey', width: '4.5rem', height: '2.5rem' }}
          >
            {nickNameToggle ? '확인' : '편집'}
          </Button>
        </Styled.ProfileImageWrapper>

        <Styled.InfoWrapper>
          <Styled.InfoP>아이디</Styled.InfoP>
          <Styled.InfoContentInput value={userId} readOnly />
          <Styled.InfoP>이름</Styled.InfoP>
          <Styled.InfoContentInput value={name} readOnly />
          <Styled.InfoP>이메일</Styled.InfoP>
          <Styled.InfoContentInput value={email} readOnly />
          <Styled.InfoP>소개글</Styled.InfoP>
          <Styled.InformationTextarea
            placeholder="소개글을 입력해주세요 (2000자 이내)"
            maxLength={2000}
          />
          <Styled.InfoP>성향</Styled.InfoP>
          <Styled.CharacteristicDiv>
            {characteristic.map((char) => '#' + char + ' ')}
          </Styled.CharacteristicDiv>
        </Styled.InfoWrapper>
      </Styled.ProfileWrapper>

      <Styled.ButtonWrapper>
        <Link href="http://13.209.251.206:8080/oauth2/authorization/naver">
          aowjisef
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default Profile;
