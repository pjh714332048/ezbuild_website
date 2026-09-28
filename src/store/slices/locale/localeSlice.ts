import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { LanguageKeys } from 'models/locale/LanguageKeys';

import type { LocaleState } from './types';

const storageKey = 'ezbuild-language';

const getInitialLanguage = (): LanguageKeys => {
  if (typeof window === 'undefined' || !window.localStorage) return 'zh';
  const stored = window.localStorage.getItem(storageKey);
  return stored === 'en' || stored === 'zh' ? stored : 'zh';
};

const initialState: LocaleState = {
  language: getInitialLanguage(),
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageKeys>) => {
      state.language = action.payload;
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(storageKey, action.payload);
      }
    },
  },
});

export const { setLanguage } = localeSlice.actions;
