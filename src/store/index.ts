import { configureStore } from '@reduxjs/toolkit';

import { localeSlice } from './slices/locale/localeSlice';
import todoReducer from './slices/todoSlice';

const store = configureStore({
  reducer: {
    locale: localeSlice.reducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
