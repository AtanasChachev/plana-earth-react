import { UPDATE_LOADER_STATE } from '../constants/ui';
import { UserInterfaceState } from 'models/ui';
import { StateAction } from 'models/store';
 
const userInterfaceState: UserInterfaceState = {
  shShowLoader: false,
};

const UserInterfaceReducer = (
  state: UserInterfaceState = userInterfaceState,
  action: StateAction,
): UserInterfaceState => {
  switch (action.type) {
    case UPDATE_LOADER_STATE: {
      return { ...state, shShowLoader: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default UserInterfaceReducer;
