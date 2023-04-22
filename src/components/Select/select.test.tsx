import { screen, render, fireEvent, act, within } from '@testing-library/react';
import { waitForElementToBeRemoved } from '@testing-library/dom';
import SelectComponent from './Select';

const MOCK_OPTIONS = [
  {
    id: 'test',
    name: 'Test name',
  }, 
  {
    id: 'test_two',
    name: 'Test two',
  },
];

const onChange = jest.fn();
const setup = () => {
  const { asFragment } = render(
    <SelectComponent 
      options={MOCK_OPTIONS}
      placeholder='Test Select Component'
      onChange={onChange}
    />,
  );

  const select = screen.getByTestId('select');

  return { asFragment, select };
};

const openSelectDropdown = () => {
  const { select } = setup();
  const selectButton = within(select).getByRole('button');

  act(() => {
    fireEvent.mouseDown(selectButton);
  });

  const selectDropdown = document.querySelector('.MuiPopover-root') as HTMLElement;

  return { select, selectDropdown };
};

const triggerDropdownOption = () => {
  const { select, selectDropdown } = openSelectDropdown();
  const selectDropdownOption = selectDropdown.querySelectorAll('.MuiPopover-root [role="option"]')[0] as HTMLElement;

  act(() => {
    fireEvent.click(selectDropdownOption);
  });

  return { select };
};

describe('<Select />', () => {
  test('<Select /> should render properly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });

  test('<Select /> should open popup', () => {
    const { selectDropdown } = openSelectDropdown();
    expect(selectDropdown).toBeInTheDocument();
  });

  test('<Select /> dropdown click should execute onChange', () => {
    triggerDropdownOption();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('<Select /> dropdown option click should umount the component from DOM', async () => {
    triggerDropdownOption();

    const selectContainerAfterManipulation = await waitForElementToBeRemoved(() =>
      document.querySelector('.MuiPopover-root'),
    );

    expect(selectContainerAfterManipulation).toBeUndefined();
  });

  test('<Select /> dropdown option click should update input text value', () => {
    const { select } = triggerDropdownOption();
    const selectInputTextWrapper = within(select).getByRole('button');

    expect(selectInputTextWrapper.textContent).toEqual('Test name');
  });
});