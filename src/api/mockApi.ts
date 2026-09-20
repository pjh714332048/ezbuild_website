/**
 * Mock API 层
 * 使用 async 函数 + setTimeout 模拟后端交互，数据存储在内存中
 */

/** 待办事项类型 */
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// 内存存储
let todos: Todo[] = [
  { id: '1', text: '学习 React', completed: false },
  { id: '2', text: '学习 Redux', completed: false },
  { id: '3', text: '构建项目', completed: true },
];

/** 模拟网络延迟 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 获取待办列表 */
export async function fetchTodos(): Promise<Todo[]> {
  await delay(500);
  return todos.map((t) => ({ ...t }));
}

/** 添加待办 */
export async function addTodo(text: string): Promise<Todo> {
  await delay(300);
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text,
    completed: false,
  };
  todos = [...todos, newTodo];
  return { ...newTodo };
}

/** 切换完成状态 */
export async function toggleTodo(id: string): Promise<Todo> {
  await delay(200);
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  const target = todos.find((t) => t.id === id);
  if (!target) throw new Error('未找到该待办事项');
  return { ...target };
}

/** 删除待办 */
export async function deleteTodo(id: string): Promise<void> {
  await delay(200);
  todos = todos.filter((t) => t.id !== id);
}
