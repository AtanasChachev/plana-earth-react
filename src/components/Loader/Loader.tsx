import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.scss';

interface LoaderProps {
  showLoader?: boolean;
}

const Loader = ({ showLoader }: LoaderProps): JSX.Element => 
  <div className={`loader ${showLoader ? 'loader--visible' : ''}`}>
      <CircularProgress size={100} className="loader__spinner" color='inherit' />
  </div>;

export { Loader };