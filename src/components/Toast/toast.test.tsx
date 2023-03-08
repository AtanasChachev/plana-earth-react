import { render } from '@testing-library/react';
import { Toast } from './Toast';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const setup = () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Toast />
    </Provider>,
  );

  return { asFragment };
};

describe('<Toast />', () => {
  test('<Toast /> should render correctly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});