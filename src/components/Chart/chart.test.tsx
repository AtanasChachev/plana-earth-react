import Chart from './Chart';
import { render } from '@testing-library/react';

const mockData = [
  {
    'time': '2022-10-04',
    'average': 1923.1207275390625,
    'count': 1,
    'max': 1923.1207275390625,
    'min': 1923.1207275390625,
    'standarddeviation': 15.24512392132,
  },
  {
    'time': '2022-10-26',
    'average': 1860.1245422363281,
    'count': 4,
    'max': 1873.88232421875,
    'min': 1845.958251953125,
    'standarddeviation': 12.96518628068393,
  },
  {
    'time': '2022-11-23',
    'average': 1897.4003228081597,
    'count': 27,
    'max': 1920.560302734375,
    'min': 1872.42626953125,
    'standarddeviation': 11.01504923711368,
  },
];

const setup = () => {
  const { asFragment } = render(
      <Chart data={mockData}/>,
  );

  return {
    asFragment,
  };
};

describe('<Chart />', () => {
  test('<Chart /> should render properly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});