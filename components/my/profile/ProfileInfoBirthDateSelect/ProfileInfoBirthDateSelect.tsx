import { useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import styled from 'styled-components';

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
    <Flex>
      <Select
        id="year"
        type="profile"
        isEdit={isEdit}
        disabled={!isEdit}
        label="생년월일"
        defaultLabel="연도 입력"
        options={allYears}
        selectedValue={selectedYear}
        onChangeOption={onChangeOption('year')}
      />
      <Select
        id="month"
        type="profile"
        isEdit={isEdit}
        disabled={!isEdit}
        defaultLabel="월 입력"
        options={allMonths}
        selectedValue={selectedMonth}
        onChangeOption={onChangeOption('month')}
      />
      <Select
        id="day"
        type="profile"
        isEdit={isEdit}
        disabled={!isEdit}
        defaultLabel="날짜 입력"
        options={allDays}
        selectedValue={selectedDay}
        onChangeOption={onChangeOption('day')}
      />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

export default ProfileInfoBirthDateSelect;
