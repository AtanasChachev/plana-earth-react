/* Type for Loader actions */
export type UILoaderReducerData = {
  type: symbol;
  payload: boolean;
};

/* Type for UserInterface state */
export type UserInterfaceState = {
  shShowLoader: boolean;
  toast: UIToastData;
};

/* Type for Toast's actions */
export type UIToastReducerData = {
  type: symbol;
  payload: UIToastData;
};

type UIToastData = {
  shShowToast: boolean;
  message: string;
};
