
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useDatepicker } from './useDatepicker';
import { DatepickerProps } from './types';
import './Datepicker.scss';

const Datepicker = ({ label, minDate, maxDate, className, ariaLabel, onChange }: DatepickerProps): JSX.Element => {
  const {
    selectedDate,
    handleDateChange,
  } = useDatepicker({ onChange });

  return (
    <KeyboardDatePicker
      data-testid="datepicker"
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

export default Datepicker;