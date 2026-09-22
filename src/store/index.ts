import { configureStore } from '@reduxjs/toolkit';

import { dialogControllerSlice } from './slices/dialogController/dialogControllerSlice';
import { localeSlice } from './slices/locale/localeSlice';
import todoReducer from './slices/todoSlice';

const store = configureStore({
  reducer: {
    locale: localeSlice.reducer,
    dialogController: dialogControllerSlice.reducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
