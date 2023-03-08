import search from 'assets/images/search.png';

import './EmptyResults.scss';

const EmptyResults = (): JSX.Element => {
  return (
    <div className="empty-results">
      <img className="empty-results__image" src={search} alt="Search Icon" />

      <h2 className="empty-results__title">No Results Found</h2>
      <p className="empty-results__description">We were not able to find results by the given criteria. Please try to change the filters in the left column.</p>
    </div>
  );
};

export { EmptyResults };