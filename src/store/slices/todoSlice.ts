import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todo } from '../../api/mockApi';
import * as api from '../../api/mockApi';

/** Todo 状态类型 */
interface TodoState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  items: [],
  loading: false,
  error: null,
};

/** 获取待办列表 */
export const fetchTodosThunk = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    return api.fetchTodos();
  }
);

/** 添加待办 */
export const addTodoThunk = createAsyncThunk(
  'todos/addTodo',
  async (text: string) => {
    return api.addTodo(text);
  }
);

/** 切换完成状态 */
export const toggleTodoThunk = createAsyncThunk(
  'todos/toggleTodo',
  async (id: string) => {
    return api.toggleTodo(id);
  }
);

/** 删除待办 */
export const deleteTodoThunk = createAsyncThunk(
  'todos/deleteTodo',
  async (id: string) => {
    await api.deleteTodo(id);
    return id;
  }
);

/** Todo 状态切片 */
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 获取待办
    builder
      .addCase(fetchTodosThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTodosThunk.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchTodosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? '获取待办失败';
      });

    // 添加待办
    builder
      .addCase(addTodoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addTodoThunk.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.loading = false;
          state.items.push(action.payload);
        }
      )
      .addCase(addTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? '添加待办失败';
      });

    // 切换完成状态
    builder
      .addCase(toggleTodoThunk.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });

    // 删除待办
    builder.addCase(
      deleteTodoThunk.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      }
    );
  },
});

export default todoSlice.reducer;
