import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { ADDROLE_SCHEMA, AddRoleSchema } from '@/constants/schema';
import AuthInput from '@/components/shared/AuthInput';
import useAddRole from '../hooks/useAddRole';

import * as Styled from './AddRole.styled';

const AddRole = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, isDirty, errors },
  } = useForm<AddRoleSchema>({
    mode: 'onChange',
    resolver: yupResolver(ADDROLE_SCHEMA),
  });

  const { mutate } = useAddRole();

  const onSubmit = (data: AddRoleSchema) => {
    console.log(data);
    mutate(data);
  };

  return (
    <Styled.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.AddRoleWrapper>
          <Styled.AddRoleInPutWrapper>
            <AuthInput
              id="roleName"
              type="roleName"
              label="권한이름"
              placeholder="권한을 만들어주세요"
              errorMessage={errors.roleName?.message}
              {...register('roleName')}
            />
            <AuthInput
              id="description"
              type="description"
              label="권한설명"
              placeholder="권한 추가설명을 작성해주세요"
              errorMessage={errors.description?.message}
              {...register('description')}
            />
          </Styled.AddRoleInPutWrapper>
          <Styled.Button type="submit">등록</Styled.Button>
        </Styled.AddRoleWrapper>
      </form>
    </Styled.Container>
  );
};

export default AddRole;
