import { Loader } from 'components/index';
import './Section.scss';

type SectionProps = {
  children: JSX.Element | JSX.Element[];
  isFullHeight?: boolean;
  headerTitle?: string;
  shRenderLoader?: boolean;
  shAlignInlineBlockOnMobile?: boolean;
};

const Section = ({ children, isFullHeight, headerTitle, shAlignInlineBlockOnMobile, shRenderLoader }: SectionProps): JSX.Element => {
  return (
    <div className="section">
      <div className={`section__inner ${isFullHeight ? 'section__inner--full-height' : ''}`}>
        {
          headerTitle && headerTitle.length && <>
            <div className="section__inner__header">
              <h3 className="section__inner__header__title">{ headerTitle }</h3>
            </div>
          </>
        }

        <div className={`section__inner__content ${shAlignInlineBlockOnMobile ? 'section__inner__content--mobile-inline-blocks' : ''}`}>
          {children}
        </div>

        {
          shRenderLoader && <Loader />
        }
      </div>
    </div>
  );
};

export { Section };
