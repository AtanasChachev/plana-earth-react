import React, { useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { formatDate } from 'utils/helpers';
import { Moment } from 'moment';
import './Datepicker.scss';

type DatepickerProps = {
  label: string;
  minDate?: Date | string;
  maxDate?: Date | string;
  className?: string;
  onChange(date: string): void;
};

const Datepicker = ({ label, minDate, maxDate, className, onChange }: DatepickerProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | Moment | null>(null);

  const handleDateChange = (date: Date | Moment | null ) => {
    setSelectedDate(date);
    onChange(formatDate(date, 'YYYY-MM-DD'));
  };

  return (
    <KeyboardDatePicker
      autoOk={true}
      className={`datepicker ${className ? className : ''}`}
      variant="inline"
      format="YYYY-MM-DD"
      margin="normal"
      label={label}
      value={selectedDate}
      maxDate={maxDate ? maxDate : new Date()}
      minDate={minDate ? minDate : '1960-01-01'}
      onChange={handleDateChange}
    />
  );
};

export { Datepicker };