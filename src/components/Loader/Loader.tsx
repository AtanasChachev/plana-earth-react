import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { State } from 'models/store';
import { UserInterfaceState } from 'models/ui';
import { useSelector } from 'react-redux';
import './Loader.scss';

const Loader = (): JSX.Element => {
  const { shShowLoader }: UserInterfaceState = useSelector((state: State) => state.uiState);

  return (
    <div className={`loader ${shShowLoader ? 'loader--visible' : ''}`}>
       <CircularProgress size={60} className="loader__spinner" color="primary" />
    </div>
  );
};

export { Loader };