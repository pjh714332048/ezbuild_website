import { dialogControllerSlice } from './dialogControllerSlice';
import type { DialogControllerState } from './types';

const { name } = dialogControllerSlice;

interface State {
  [name]: DialogControllerState;
}

export const selectIsContactUsModelOpen = (state: State) => state[name].isContactUsModelOpen;
