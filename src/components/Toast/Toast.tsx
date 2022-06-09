import { Snackbar }  from '@material-ui/core';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import { SETTINGS } from 'config/settings';
import { useToast } from './useToast';

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionUp = (props: TransitionProps) => <Slide {...props} direction="up" />;

const Toast = (): JSX.Element => {
  const {
    shShowToast,
    message,
    handleOnClose,
  } = useToast();

  return (
    <Snackbar
      open={shShowToast}
      onClose={handleOnClose}
      autoHideDuration={SETTINGS.toastAutoDuration}
      TransitionComponent={TransitionUp}
      message={message}
    />
  );
};

export { Toast };