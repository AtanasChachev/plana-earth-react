import { Product, Country } from 'models/products';
import { ChangeEvent } from 'react';

export interface SelectProps {
  placeholder: string;
  options: Product[] | Country[];
  className?: string;
  ariaLabel?: string;
  onChange(value: string | unknown, name?: string): void;
}

export interface Return {
  value: string | unknown;
  handleSelectChange: (event: ChangeEvent<{ value: unknown }>) => void;
}

export type UseSelectProps = Pick<SelectProps, 'onChange' | 'options'>;
