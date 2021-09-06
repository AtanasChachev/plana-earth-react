import React, { useState } from 'react';
import { Product } from 'models/products';
import { Countries } from 'models/settings';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import './Select.scss';

type SelectProps = {
  placeholder: string;
  options: Product[] | Countries[];
  className?: string;
  onChange(value: string | unknown, name?: string): void;
};

const SelectComponent = ({ options, placeholder, className, onChange }: SelectProps): JSX.Element => {
  const [value, updateValue] = useState<string | unknown>('');

  return (
    <>
      {
        options && options.length && <>
          <FormControl className={`select ${className ? className : ''}`}>
            <InputLabel className="select__label">{ placeholder }</InputLabel>

            <Select
              className="select__form"
              value={value}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                let name = '';
                const getOptionIndex = [...options].findIndex((option: Product | Countries) => option.id);

                if (getOptionIndex > -1) {
                  name = options[getOptionIndex].name;
                }

                updateValue(event.target.value);
                onChange && onChange(event.target.value, name);
              }}>
              {
                options.map((option: Product | Countries, index: number) => 
                  <MenuItem className="select__option" key={index} value={option.id}>{option.name}</MenuItem>)
              }
            </Select>
          </FormControl>
        </>
      }
    </>
  );
};

export { SelectComponent };