import { render } from '@testing-library/react';
import { Loader } from './Loader';

const setup = () => {
  const { asFragment } = render(
      <Loader showLoader={true} />,
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