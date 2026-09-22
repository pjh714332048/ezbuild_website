import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { DialogControllerState } from './types';

const initialState: DialogControllerState = {
  isContactUsModelOpen: false,
};

export const dialogControllerSlice = createSlice({
  name: 'dialogController',
  initialState,
  reducers: {
    setIsContactUsModelOpen: (state, action: PayloadAction<boolean>) => {
      state.isContactUsModelOpen = action.payload;
    },
  },
});

export const { setIsContactUsModelOpen } = dialogControllerSlice.actions;
