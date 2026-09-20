import { localeSlice } from './localeSlice';

const { name } = localeSlice;

export const selectLanguage = state => state[name].language;
