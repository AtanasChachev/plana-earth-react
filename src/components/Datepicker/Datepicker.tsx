
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useDatepicker } from './useDatepicker';
import './Datepicker.scss';

export type DatepickerProps = {
  label: string;
  minDate?: Date | string;
  maxDate?: Date | string;
  className?: string;
  ariaLabel?: string;
  onChange(date: string): void;
};

const Datepicker = ({ label, minDate, maxDate, className, ariaLabel, onChange }: DatepickerProps): JSX.Element => {
  const {
    selectedDate,
    handleDateChange,
  } = useDatepicker({ onChange });

  return (
    <KeyboardDatePicker
      aria-required="true"
      aria-label={ariaLabel}
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