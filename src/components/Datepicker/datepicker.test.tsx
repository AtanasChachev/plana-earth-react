import { Datepicker } from './Datepicker';
import { screen, render, fireEvent } from '@testing-library/react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { SETTINGS } from 'config/settings';
import { waitForElementToBeRemoved } from '@testing-library/dom';

const theme = createTheme({
  palette: {
    primary: {
      main: SETTINGS.theme.palette.primary.main,
      contrastText: SETTINGS.theme.palette.primary.contrastText,
    },
  },
});

const onChange = jest.fn();

const setup = () => {
  const { asFragment } = render(
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiThemeProvider theme={theme}>
        <Datepicker 
          label={'Test label'}
          onChange={onChange}
        />
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>,
  );

  const datepicker = screen.getByTestId('datepicker');

  return { 
    datepicker,
    asFragment,
  };
};

const handleDatepickerOpen = () => {
  const { datepicker } = setup();
  const datepickerButton = datepicker.querySelector('button') as HTMLButtonElement;

  fireEvent.click(datepickerButton);
  
  const datepickerContainer = document.querySelector('.MuiPickersBasePicker-container') as HTMLElement;
  const datepickerDateButtonsContainer = datepickerContainer.querySelector('.MuiPickersCalendar-transitionContainer') as HTMLElement;
  const datepickerDateButton = datepickerDateButtonsContainer.querySelector('[type="button"]:not(.MuiPickersDay-hidden)') as HTMLElement;

  return {
    datepickerContainer,
    datepickerDateButton,
  };
};

describe('<Datepicker />', () => {
  test('<Datepicker /> is rendering properly', () => {
    const { asFragment } = setup();
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('<Datepicker /> should open calendar on input click', () => {
    const { datepickerContainer } = handleDatepickerOpen();

    expect(datepickerContainer).toBeInTheDocument();
  });

  test('<Datepicker /> calendar should be unmounted on date click from the DOM', async () => {
    const { datepickerDateButton } = handleDatepickerOpen();
    
    fireEvent.click(datepickerDateButton);
    
    const datepickerContainerAfterManipulation = await waitForElementToBeRemoved(() =>
      document.querySelector('.MuiPickersBasePicker-container'),
    );

    expect(datepickerContainerAfterManipulation).toBeUndefined();
  });

  test('<Datepicker / should execute onChange when a date is chosen>', () => {
    const { datepickerDateButton } = handleDatepickerOpen();
    
    fireEvent.click(datepickerDateButton);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('Entering date manually in input should update its value', () => {
    const { datepicker } = setup();
    const input = datepicker.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, { 
      target: {
        value: '2020-03-03',
      },
    });

    expect(input.value).toEqual('2020-03-03');
  });
});