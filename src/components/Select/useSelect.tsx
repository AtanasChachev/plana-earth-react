import { useState, ChangeEvent } from 'react';
import { SelectProps } from './Select';
import { Product } from 'models/products';
import { Country } from 'models/products';

interface Return {
  value: string | unknown;
  handleSelectChange: (event: ChangeEvent<{ value: unknown }>) => void;
}

type UseSelectProps = Pick<SelectProps, 'onChange' | 'options'>;

export const useSelect = ({ onChange, options }: UseSelectProps): Return => {
  const [value, updateValue] = useState<string | unknown>('');

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    const getOption = [...options].find((option: Product | Country) => option.id === event.target.value);
    const name = getOption?.name;

    updateValue(event.target.value);
    onChange && onChange(event.target.value, name);
  };

  return {
    value,
    handleSelectChange,
  };
};