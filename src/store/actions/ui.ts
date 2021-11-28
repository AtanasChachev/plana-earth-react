import { UPDATE_LOADER_STATE, UPDATE_TOAST_STATE } from '../constants/ui';
import { UILoaderReducerData, UIToastReducerData } from 'models/ui';

export const showLoader = (shShowLoader: boolean): UILoaderReducerData => ({
  type: UPDATE_LOADER_STATE,
  payload: shShowLoader,
});

export const showToast = (shShowToast: boolean, message: string): UIToastReducerData => ({
  type: UPDATE_TOAST_STATE,
  payload: {
    shShowToast,
    message,
  },
});