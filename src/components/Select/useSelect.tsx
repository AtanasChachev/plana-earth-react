import { useState, ChangeEvent } from 'react';
import { Product, Country } from 'models/products';
import { Return, UseSelectProps } from './types';

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