import { render } from '@testing-library/react';
import { Loader } from './Loader';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const setup = () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Loader showLoader={true} />
    </Provider>,
  );

  return {
    asFragment,
  };
};

describe('<Loader />', () => {
  test('<Loader /> renders correctly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});