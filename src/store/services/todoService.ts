import { fakeBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

/** 待办事项类型 */
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// 内存存储（模拟后端，数据存储在内存中）
let todos: Todo[] = [
  { id: '1', text: '学习 React', completed: false },
  { id: '2', text: '学习 Redux', completed: false },
  { id: '3', text: '构建项目', completed: true },
];

/** 模拟网络延迟 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** 待办事项 API（内存 Mock，非标准 REST 故使用 queryFn 包装） */
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fakeBaseQuery<Error>(),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getTodos: builder.query<Todo[], void>({
      queryFn: async () => {
        await delay(500);
        return { data: todos.map(t => ({ ...t })) };
      },
      providesTags: ['Todo'],
    }),
    addTodo: builder.mutation<Todo, string>({
      queryFn: async text => {
        await delay(300);
        const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };
        todos = [...todos, newTodo];
        return { data: { ...newTodo } };
      },
      invalidatesTags: ['Todo'],
    }),
    toggleTodo: builder.mutation<Todo, string>({
      queryFn: async id => {
        await delay(200);
        todos = todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t));
        const target = todos.find(t => t.id === id);
        if (!target) return { error: new Error('未找到该待办事项') };
        return { data: { ...target } };
      },
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<void, string>({
      queryFn: async id => {
        await delay(200);
        todos = todos.filter(t => t.id !== id);
        return { data: undefined };
      },
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
