import { UPDATE_LOADER_STATE } from '../constants/ui';
import { UILoaderReducerData } from 'models/ui';

export const showLoader = (shShowLoader: boolean): UILoaderReducerData => ({
  type: UPDATE_LOADER_STATE,
  payload: shShowLoader,
});