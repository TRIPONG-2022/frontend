import { FieldErrors, FieldValues, DeepPartial } from 'react-hook-form';

interface FieldErrorMessage {
  keys: string[];
  label: string;
}

export const createErrorMessage = <T extends FieldValues>(
  errors: FieldErrors<T>,
  fieldErrorMessage: FieldErrorMessage[],
  type: string,
  message: string,
) => {
  const labels = fieldErrorMessage
    .filter(({ keys, label }) => keys.some((key) => errors[key]?.type === type))
    .map(({ label }) => label)
    .join(', ');
  return labels ? labels + message : '';
};
