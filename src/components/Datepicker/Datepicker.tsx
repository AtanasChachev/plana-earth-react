import React, { useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { formatDate } from 'utils/helpers';
import './Datepicker.scss';

type DatepickerProps = {
  label: string;
  minDate?: Date | string;
  maxDate?: Date | string;
  className?: string;
};

const Datepicker = ({ label, minDate, maxDate, className }: DatepickerProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: any) => {
    console.log(formatDate(date, 'YYYY-MM-DD'));
    setSelectedDate(date);
  };

  return (
    <KeyboardDatePicker
      autoOk={true}
      className={`datepicker ${className ? className : ''}`}
      // disableToolbar
      variant="inline"
      format="YYYY-MM-DD"
      margin="normal"
      id="date-picker-inline"
      label={label}
      value={selectedDate}
      maxDate={maxDate ? maxDate : new Date()}
      minDate={minDate ? minDate : '1960-01-01'}
      onChange={handleDateChange}
    />
  );
};

export { Datepicker };