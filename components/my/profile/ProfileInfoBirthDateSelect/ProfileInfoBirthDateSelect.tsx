import { useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import styled, { css } from 'styled-components';

import {
  getCurrentYear,
  getOptionDays,
  getOptionMonths,
  getOptionYears,
} from '@/utils/date';
import Select from '@/components/shared/Select';
import { ProfilePatchSchema } from '@/constants/schema';

interface ProfileInfoBirthDateSelectProps {
  isEdit: boolean;
}

const ProfileInfoBirthDateSelect = ({
  isEdit,
}: ProfileInfoBirthDateSelectProps) => {
  const { control, setValue } = useFormContext<ProfilePatchSchema>();

  const selectedYear = useWatch({ control, name: 'year' });
  const selectedMonth = useWatch({ control, name: 'month' });
  const selectedDay = useWatch({ control, name: 'day' });

  const allYears = useMemo(() => getOptionYears(getCurrentYear(), 100), []);
  const allMonths = useMemo(() => getOptionMonths, []);
  const allDays = useMemo(
    () => getOptionDays(selectedYear, selectedMonth),
    [selectedYear, selectedMonth],
  );

  const onChangeOption = (id: 'year' | 'month' | 'day') => (value: number) => {
    setValue(id, value);
  };

  return (
    <Flex isEdit={isEdit}>
      <Select
        id="year"
        disabled={!isEdit}
        label="생년월일"
        defaultLabel={'연도 입력'}
        options={allYears}
        selectedValue={selectedYear}
        onChangeOption={onChangeOption('year')}
      />
      <Select
        id="month"
        disabled={!isEdit}
        defaultLabel={'월 입력'}
        options={allMonths}
        selectedValue={selectedMonth}
        onChangeOption={onChangeOption('month')}
      />
      <Select
        id="day"
        disabled={!isEdit}
        defaultLabel={'일 입력'}
        options={allDays}
        selectedValue={selectedDay}
        onChangeOption={onChangeOption('day')}
      />
    </Flex>
  );
};

const Flex = styled.div<{ isEdit: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;
  ${({ theme, isEdit }) =>
    !isEdit &&
    css`
      div div {
        color: ${theme.colors.gray[400]};
      }
    `}

  label {
    display: inline-block;
    font-size: 1rem;
    font-weight: normal;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
  }

  button {
    width: 100%;
    background: white;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
    border: none;
    color: black;
    font-size: 1rem;
  }
`;

export default ProfileInfoBirthDateSelect;
