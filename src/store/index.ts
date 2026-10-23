import { configureStore } from '@reduxjs/toolkit';

import { emailApi } from './services/emailService';
import { dialogControllerSlice } from './slices/dialogController/dialogControllerSlice';
import { localeSlice } from './slices/locale/localeSlice';

const store = configureStore({
  reducer: {
    locale: localeSlice.reducer,
    dialogController: dialogControllerSlice.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(emailApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
