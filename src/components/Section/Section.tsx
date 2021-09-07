import React, { ReactChildren, ReactChild }  from 'react';
import './Section.scss';

type SectionProps = {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  isFullHeight?: boolean;
  headerTitle?: string;
};

const Section = ({ children, isFullHeight, headerTitle }: SectionProps): JSX.Element => {
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

        <div className="section__inner__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Section };
