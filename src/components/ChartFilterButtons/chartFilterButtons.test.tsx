import ChartFilterButtons from './ChartFilterButtons';
import { render, screen, act, fireEvent } from '@testing-library/react';

const onClick = jest.fn();

const setup = () => {
  const { asFragment } = render(<ChartFilterButtons onClick={onClick} />);
  const filterButton = screen.getAllByTestId('chart-filter-button')[0];

  return { 
    filterButton,
    asFragment,
  };
};

describe('<ChartFilterButtons />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('<ChartFilterButtons /> should render correctly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });

  test('ChartFilterButtons button should emit click', () => {
    const { filterButton } = setup();

    act(() => {
      fireEvent.click(filterButton);
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});