import { State } from 'models/store';
import { UserInterfaceState } from 'models/ui';
import { useSelector } from 'react-redux';

type Return = {
  shShowLoader: boolean;
};

export const useLoader = (): Return => {
  const { shShowLoader }: UserInterfaceState = useSelector((state: State) => state.uiState);

  return {
    shShowLoader,
  };
};