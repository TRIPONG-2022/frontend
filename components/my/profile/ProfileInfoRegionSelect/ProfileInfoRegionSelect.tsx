import { useFormContext, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import { useCityQuery } from '@/hooks/useCityQuery';
import { useDistrictQuery } from '@/hooks/useDistrictQuery';
import { ProfilePatchSchema } from '@/constants/schema';
import Select from '@/components/shared/Select';

interface ProfileInfoRegionSelectProps {
  isEdit: boolean;
}

const ProfileInfoRegionSelect = ({ isEdit }: ProfileInfoRegionSelectProps) => {
  const { control, setValue } = useFormContext<ProfilePatchSchema>();

  const selectedCity = useWatch({ control, name: 'city' });
  const selectedDistrict = useWatch({ control, name: 'district' });

  const { data: cityData } = useCityQuery();
  const { data: districtData } = useDistrictQuery(selectedCity);

  const onChangeOption = (id: 'city' | 'district') => (value: string) => {
    setValue(id, value);
  };

  return (
    <Flex>
      <Select
        id="city"
        type="profile"
        isEdit={isEdit}
        label="지역"
        disabled={!isEdit}
        defaultLabel="도시를 선택해주세요"
        options={cityData?.regionData}
        selectedValue={selectedCity}
        onChangeOption={onChangeOption('city')}
      />
      <Select
        id="district"
        type="profile"
        isEdit={isEdit}
        defaultLabel="구를 선택해주세요"
        options={districtData?.regionData}
        disabled={!selectedCity || !isEdit}
        selectedValue={selectedDistrict}
        onChangeOption={onChangeOption('district')}
      />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export default ProfileInfoRegionSelect;
