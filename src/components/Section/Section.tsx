import React, { ReactChildren, ReactChild }  from 'react';
import './Section.scss';

type SectionProps = {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  shAlignInlineBlockOnMobile?: boolean;
  isFullHeight?: boolean;
  headerTitle?: string;
};

const Section = ({ children, isFullHeight, headerTitle, shAlignInlineBlockOnMobile }: SectionProps): JSX.Element => {
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
      </div>
    </div>
  );
};

export { Section };
