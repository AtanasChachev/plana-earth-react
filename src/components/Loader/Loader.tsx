import CircularProgress from '@material-ui/core/CircularProgress';
import { LoaderProps } from './types';
import './Loader.scss';

const Loader = ({ showLoader }: LoaderProps): JSX.Element => 
  <div className={`loader ${showLoader ? 'loader--visible' : ''}`}>
    <CircularProgress size={100} className="loader__spinner" color='inherit' />
  </div>;

export default Loader;