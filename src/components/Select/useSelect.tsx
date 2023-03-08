import { useState, ChangeEvent } from 'react';
import { SelectProps } from './Select';
import { Product } from 'models/products';
import { Countries } from 'models/settings';

type Return = {
  value: string | unknown;
  handleSelectChange: (event: ChangeEvent<{ value: unknown }>) => void;
};

type UseSelectProps = Pick<SelectProps, 'onChange' | 'options'>;

export const useSelect = ({ onChange, options }: UseSelectProps): Return => {
  const [value, updateValue] = useState<string | unknown>('');

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    const getOptionIndex = [...options].findIndex((option: Product | Countries) => option.id === event.target.value);
    let name = '';

    if (getOptionIndex > -1) name = options[getOptionIndex].name;

    updateValue(event.target.value);
    onChange && onChange(event.target.value, name);
  };

  return {
    value,
    handleSelectChange,
  };
};