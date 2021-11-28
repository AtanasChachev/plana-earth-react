import { UPDATE_LOADER_STATE, UPDATE_TOAST_STATE } from '../constants/ui';
import { UserInterfaceState } from 'models/ui';
import { StateAction } from 'models/store';
 
const userInterfaceState: UserInterfaceState = {
  shShowLoader: false,
  toast: {
    shShowToast: false,
    message: '',
  },
};

const UserInterfaceReducer = (
  state: UserInterfaceState = userInterfaceState,
  action: StateAction, 
): UserInterfaceState => { 
  switch (action.type) {
    case UPDATE_LOADER_STATE: {
      return { ...state, shShowLoader: action.payload };
    }

    case UPDATE_TOAST_STATE : {
      const { shShowToast, message } = action.payload;
      const localState: UserInterfaceState = { ...state };
      
      localState.toast.shShowToast = shShowToast;
      localState.toast.message = message;
      
      return localState;
    }

    default: {
      return { ...state };
    }
  }
};

export default UserInterfaceReducer;
