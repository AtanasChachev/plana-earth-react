import { Product, Country } from 'models/products';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { useSelect } from './useSelect';
import { SelectProps } from './types';

import './Select.scss';

const SelectComponent = ({ options, placeholder, className, ariaLabel, onChange }: SelectProps): JSX.Element => {
  const {
    value,
    handleSelectChange,
  } = useSelect({ onChange, options });

  return (
    <>
      {
        options && options.length && <>
          <FormControl className={`select ${className ? className : ''}`}>
            <InputLabel className="select__label">{ placeholder }</InputLabel>

            <Select
              data-testid="select"
              aria-required="true"
              aria-label={ariaLabel}
              className="select__form"
              value={value}
              onChange={handleSelectChange}>
              {
                options.map((option: Product | Country, index: number) => 
                  <MenuItem className="select__option" key={index} value={option.id}>{option.name}</MenuItem>)
              }
            </Select>
          </FormControl>
        </>
      }
    </>
  );
};

export default SelectComponent;