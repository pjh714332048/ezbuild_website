import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { LanguageKeys } from 'models/locale/LanguageKeys';

import type { LocaleState } from './types';

const initialState: LocaleState = {
  language: 'zh',
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageKeys>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = localeSlice.actions;
