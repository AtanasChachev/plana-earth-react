import React from 'react';
import { Snackbar }  from '@material-ui/core';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import { State } from 'models/store';
import { UserInterfaceState } from 'models/ui';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from 'store/actions/ui';
import { SETTINGS } from 'config/settings';

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction="up" />;
};

const Toast = (): JSX.Element => {
  const dispatch = useDispatch();
  const { 
    toast: {
      shShowToast,
      message,
    },
  }: UserInterfaceState = useSelector((state: State) => state.uiState);

  return (
    <Snackbar
      open={shShowToast}
      onClose={() => dispatch(showToast(false, ''))}
      autoHideDuration={SETTINGS.toastAutoDuration}
      TransitionComponent={TransitionUp}
      message={message}
    />
  );
};

export { Toast };