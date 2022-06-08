import { State } from 'models/store';
import { UserInterfaceState } from 'models/ui';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from 'store/actions/ui';

type Return = {
  shShowToast: boolean;
  message: string;
  handleOnClose: () => void;
};

export const useToast = (): Return => {
  const dispatch = useDispatch();
  const { 
    toast: {
      shShowToast,
      message,
    },
  }: UserInterfaceState = useSelector((state: State) => state.uiState);

  const handleOnClose = () => dispatch(showToast(false, ''));

  return {
    shShowToast,
    message,
    handleOnClose,
  };
};