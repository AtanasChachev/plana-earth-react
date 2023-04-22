import { render } from '@testing-library/react';
import Section from './Section';

const setup = () => {
  const { asFragment } = render(
    <Section
      children={<div>Test message</div>}
      isFullHeight={true}
      headerTitle='Test header title'
      shAlignInlineBlockOnMobile={true}
      shRenderLoader={false}
      isEmptyBlockActive={false}
    />,
  );

  return {
    asFragment,
  };
};

describe('<Section />', () => {
  test('<Section /> renders correctly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});