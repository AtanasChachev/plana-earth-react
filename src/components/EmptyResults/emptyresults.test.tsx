import { render } from '@testing-library/react';
import { EmptyResults } from './EmptyResults';

const setup = () => {
  const { asFragment } = render(<EmptyResults />);

  return {
    asFragment,
  };
};

describe('<EmptyResults />', () => {
  test('<EmptyResults /> is rendering correctly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});