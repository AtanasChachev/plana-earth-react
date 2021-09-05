import React, { useState } from 'react';
import { Product } from 'models/products';
import { Countries } from 'models/settings';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './Select.scss';

type SelectProps = {
  placeholder: string;
  options: Product[] | Countries[];
  onChange(value: string | unknown): void;
};

const SelectComponent = ({ options, placeholder, onChange }: SelectProps): JSX.Element => {
  const [value, updateValue] = useState<string | unknown>('');

  return (
    <>
      {
        options && options.length && <>
          <FormControl className="select">
            <InputLabel className="select__label">{ placeholder }</InputLabel>

            <Select
              className="select__form"
              value={value}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                updateValue(event.target.value);
                onChange && onChange(event.target.value);
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