import { Moment } from 'moment';

export interface DatepickerProps {
  label: string;
  minDate?: Date | string;
  maxDate?: Date | string;
  className?: string;
  ariaLabel?: string;
  onChange(date: string): void;
}

export type UseDatepickerProps = Pick<DatepickerProps, 'onChange'>;

export interface Return {
  selectedDate: Date | Moment | null;
  handleDateChange: (date: Date | Moment | null) => void;
}