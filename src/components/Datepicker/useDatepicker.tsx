import { useState } from 'react';
import { formatDate } from 'utils/helpers';
import { Moment } from 'moment';
import { DatepickerProps } from './Datepicker';

type UseDatepickerProps = Pick<DatepickerProps, 'onChange'>;

interface Return {
  selectedDate: Date | Moment | null;
  handleDateChange: (date: Date | Moment | null) => void;
}

export const useDatepicker = ({ onChange }: UseDatepickerProps): Return => {
  const [selectedDate, setSelectedDate] = useState<Date | Moment | null>(null);

  const handleDateChange = (date: Date | Moment | null) => {
    setSelectedDate(date);
    onChange(formatDate(date, 'YYYY-MM-DD'));
  };

  return {
    selectedDate,
    handleDateChange,
  };
};