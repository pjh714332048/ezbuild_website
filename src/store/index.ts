import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';

/** Redux Store 配置 */
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

/** Store 状态类型 */
export type RootState = ReturnType<typeof store.getState>;
/** Dispatch 类型 */
export type AppDispatch = typeof store.dispatch;

export default store;
