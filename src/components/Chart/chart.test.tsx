import { Chart } from './Chart';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const setup = () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Chart />
    </Provider>,
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