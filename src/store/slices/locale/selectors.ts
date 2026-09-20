import { localeSlice } from './localeSlice';
import type { LocaleState } from './types';

const { name } = localeSlice;

interface State {
  [name]: LocaleState;
}

export const selectLanguage = (state: State) => state[name].language;
