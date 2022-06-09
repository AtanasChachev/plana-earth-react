import CircularProgress from '@material-ui/core/CircularProgress';
import { useLoader } from './useLoader';
import './Loader.scss';

const Loader = (): JSX.Element => {
  const { shShowLoader } = useLoader();

  return (
    <div className={`loader ${shShowLoader ? 'loader--visible' : ''}`}>
       <CircularProgress size={60} className="loader__spinner" color="primary" />
    </div>
  );
};

export { Loader };